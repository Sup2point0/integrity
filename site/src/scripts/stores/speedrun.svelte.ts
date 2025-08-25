import { persisted, type Serializer } from "svelte-persisted-store";

import { SvelteSet as Set } from "svelte/reactivity";
import { goto } from "$app/navigation";

import Site from "#scripts/site";

import type { Shard, Question, States, InternalError } from "#scripts/types";


type Topic = "integrals" | "derivatives" | "graph-drawing";


/** Speedrun configurations. Data for the current run is stored in `.run` attribute. */
export class SpeedrunData
{
  topic: Topic | null = null;

  difficulties: States = {
    based: false,
    incline: false,
    manifold: false,
    chaos: false,
    unassigned: false,
  };

  include: States = {
    seen: true,
    solved: true,
  };

  prefs: States = {
    pause_onblur: false,
    pause_onsubmit: "when-correct",
    reveal_answer_onsubmit: "always",
    flag_incorrect_questions: false,
  };

  run = $state(new RunData());
  created = $state(false);


  /** Trigger a write to localStorage. */
  _sync_()
  {    
    speedrun.update(s => {
      return s;
    });
  }

  /** Expose attributes for syncing to localStorage. */
  to_json(): object
  {
    return {
      topic: this.topic,
      difficulties: this.difficulties,
      include: this.include,
      prefs: this.prefs,
      run: this.run.to_json(),
      created: this.created,
    };
  }

  /** Load attributes from `localStorage` JSON. */
  set_from_json(data: Partial<SpeedrunData>): SpeedrunData
  {
    this.topic = data.topic ?? this.topic;
    if (data.difficulties) Object.assign(this.difficulties, data.difficulties);
    if (data.prefs) Object.assign(this.prefs, data.prefs);
    if (data.include) Object.assign(this.include, data.include);

    if (data.run) Object.assign(this.run, data.run);
    if (typeof this.run.question === "string") {
      this.run.question = Site.questions[this.topic!].questions[this.run.question];
    }

    this.created = data.created ?? this.created;

    return this;
  }


  /** Create a new run. */
  new_run()
  {
    this.run = new RunData();
    this._sync_();
  }

  /** Check the run configurations are all valid. Returns an Array of errors, if empty then no errors were found. */
  check_errors(): InternalError[]
  {
    let out = [];

    if (!this.topic) {
      out.push({ code: "TOPIC", message: "No question topic(s) have been selected."});
    }

    if (Object.values(this.difficulties).every(diff => !diff)) {
      out.push({ code: "DIFF", message: "No question difficulties have been selected."});
    }

    if (!(
      this.run
      || this.include
    )) {
      out.push({ code: "500", message: "Internal error, something went wrong..."});
    }

    return out;
  }

  /** Start the currently created run. */
  start()
  {    
    this.next_question();
    this._set_interval_();
    this.run.started = true;
    this.run.running = true;
    this._sync_();
  }

  /** Submit the index of an answer chosen from the options for a multiple-choice question. Returns `true` if the answer is correct. */
  submit_answer(index: number): boolean
  {
    this.run.answers.add(index);
    
    let current = this.run.question_hist.at(-1)!;
    current.attempts++;

    if (index === 0) {
      this.run.state = "correct";
      current.correct = true;
      current.time = this.run.elapsed - current.time;
      if (["always", "when-correct"].includes(this.prefs.pause_onsubmit)) {
        this._clear_interval_();
      }
      
      this._sync_();
      return true;
    }
    else {
      this.run.state = "incorrect";
      if (this.prefs.pause_onsubmit === "always") {
        this._clear_interval_();
      }

      this._sync_();
      return false;
    }
  }

  /** Randomly pick the next question. */
  next_question()
  {
    this.run.answers.clear();

    let shard: Shard = this.run.question_pool!.splice(0, 1)[0];
    let question = Site.questions[this.topic!].questions[shard];
    this.run.question = question;

    this.run.question_hist.push({
      shard: shard,
      correct: null,
      attempts: 0,
      time: this.run.elapsed,
    });

    this.run.state = "solving";
    this._set_interval_();
    this._sync_();
  }

  /** Pause the current run. */
  pause()
  {
    this._clear_interval_();
    this.run.running = false;
    this._sync_();
  }

  unpause()
  {
    this._set_interval_();
    this.run.running = true;
    this._sync_();
  }

  /** Finish the current run. */
  finish()
  {
    this._clear_interval_();
    this.run.running = false;
    this.run.finished = true;
    goto("finish");
    this._sync_();
  }


  /** Set a new timer interval, clearing the existing interval if it exists. */
  _set_interval_()
  {
    this._clear_interval_();
    this.run.interval = setInterval(() => {
      this.run.elapsed += 250;
    }, 250);
  }

  /** Clear the current interval if it exists. */
  _clear_interval_()
  {
    if (this.run.interval) {
      clearInterval(this.run.interval);
    }
  }
}


/** 
 * Data for the currently activate speedrun.
 * 
 * - When the speedrun starts `.started` is set to `true`.
 * - `.running` controls whether the run is paused/unpaused.
 * - `.state` keeps track of whether an answer has been submitted.
 * - `.finished` controls whether the run has been ended.
 */
class RunData
{
  started = $state(false);
  running = $state(false);
  state: "solving" | "incorrect" | "correct" | null = $state(null);
  finished = $state(false);

  elapsed: number = $state(0);

  /** Numerical code of interval for updating the elapsed timer. */
  interval: number = 0;

  /** Current question. */
  question: Question | null = $state(null);

  /** Selected answer(s). */
  answers: Set<number> = $state(new Set());
  
  /** Shuffled list of questions to randomly choose from. Should be set before the speedrun begins. */
  question_pool: Shard[] = [];
  question_hist: QuestionData[] = $state([]);

  to_json(): object
  {
    return {
      started: this.started,
      running: this.running,
      state: this.state,
      finished: this.finished,

      elapsed: this.elapsed,
      question: this.question?.shard,
      question_pool: this.question_pool,
      question_hist: this.question_hist,
    }
  }
}

interface QuestionData {
  shard: Shard;
  correct: boolean | null;
  attempts: number;
  time: number;
}


class SpeedrunDataSerializer implements Serializer<SpeedrunData>
{
  parse(data: string): SpeedrunData
  {
    return new SpeedrunData().set_from_json(JSON.parse(data));
  }

  stringify(data: SpeedrunData): string
  {
    return JSON.stringify(data.to_json());
  }
}


export const speedrun = persisted("integrity.run", new SpeedrunData(), {
  serializer: new SpeedrunDataSerializer(),
  syncTabs: true,
});
