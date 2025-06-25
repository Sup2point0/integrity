import { persisted, type Serializer } from "svelte-persisted-store";

import { SvelteSet as Set } from "svelte/reactivity";
import { goto } from "$app/navigation";

import Site from "#scripts/site";

import type { Shard, Question } from "#scripts/types";


type Topic = "integrals" | "derivatives";


/** Speedrun configurations. Data for the current run is stored in `.run` attribute. */
export class SpeedrunData
{
  topic: Topic | null = null;

  prefs = {
    pause_onblur: false,
    pause_timer_onsubmit: true,
    reveal_answer_onsubmit: true,
  }

  include = {
    seen: true,
    solved: true,
  };

  run = $state(new RunData());


  /** Expose attributes for syncing to localStorage. */
  to_json(): object
  {
    return {
      topic: this.topic,
      prefs: this.prefs,
      include: this.include,
      run: this.run.to_json(),
    };
  }

  /** Load attributes from `localStorage` JSON. */
  set_from_json(data: Partial<SpeedrunData>): SpeedrunData
  {
    this.topic = data.topic ?? this.topic;
    this.prefs = data.prefs ?? this.prefs;
    this.include = data.include ?? this.include;

    Object.assign(this.run, data.run);
    if (typeof this.run.question === "string") {
      this.run.question = Site.questions[this.topic!].questions[this.run.question];
    }

    return this;
  }


  /** Create a new run. */
  new_run(topic: Topic)
  {
    this.topic = topic;
    this.run = new RunData();
  }

  /** Start the currently created run. */
  start()
  {
    this.next_question();
    this._set_interval_();
    this.run.started = true;
    this.run.running = true;
  }

  /** Submit the index of an answer chosen from the options for a multiple-choice question. Returns `true` if the answer is correct. */
  submit_answer(index: number): boolean
  {
    this.run.answers.add(index);
    console.log("answers =", this.run.answers);
    
    let current = this.run.question_hist.at(-1)!;
    current.answered = true;

    if (index === 0) {
      current.correct = true;
      current.time = this.run.elapsed - current.time;
      this.run.state = "correct";
      return true;
    }
    else {
      this.run.state = "incorrect";
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
      answered: false,
      correct: null,
      time: this.run.elapsed,
    });

    this.run.state = "solving";
  }

  /** Pause the current run. */
  pause()
  {
    this._clear_interval_();
    this.run.running = false;
  }

  unpause()
  {
    this._set_interval_();
    this.run.running = true;
  }

  /** Finish the current run. */
  finish()
  {
    this._clear_interval_();
    this.run.running = false;
    this.run.finished = true;
    goto("/speedrun/finish");
  }


  _set_interval_()
  {
    this.run.interval = setInterval(() => {
      this.run.elapsed += 250;
    }, 250);
  }

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
 * - `
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
      question_pool: this.question_pool,
      question: this.question?.shard,
      question_hist: this.question_hist,
    }
  }
}

interface QuestionData {
  shard: Shard;
  answered: boolean;
  correct: boolean | null;
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
