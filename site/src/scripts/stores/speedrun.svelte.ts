import { persisted, type Serializer } from "svelte-persisted-store";

import type { Shard } from "#scripts/types";


type Topic = "integrals" | "derivatives";


/* Speedrun configurations. Data for the current run is stored in `.run` attribute. */
export class SpeedrunData
{
  topic: Topic | null = null;

  on_submit = {
    pause_timer: true,
    reveal_answer: true,
  };

  include = {
    seen: true,
    solved: true,
  };

  run = new RunData();


  /** Expose attributes for syncing to localStorage. */
  to_json(): object
  {
    return {
      topic: this.topic,
      pause_timer_on_submit: this.pause_timer_on_submit,
      reveal_answer_on_submit: this.reveal_answer_on_submit,
      include: this.include,
      run: this.run,
    };
  }

  /** Load attributes from `localStorage` JSON. */
  set_from_json(data: Partial<SpeedrunData>): SpeedrunData
  {
    this.topic = data.topic ?? this.topic;
    this.on_submit = data.on_submit ?? this.on_submit;
    this.include = data.include ?? this.include;
    this.run = data.run ?? this.run;

    return this;
  }

  new_run(topic: Topic)
  {
    this.topic = topic;
    this.run = new RunData();
  }
}


class RunData
{
  started = false;
  running = false;
  state: "start" | "solving" | "check" | "finish" | null = null;
  elapse = 0;

  questions_hist: Record<Shard, QuestionStats> = {};
}

interface QuestionStats {
  answered: boolean;
  correct: boolean;
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
