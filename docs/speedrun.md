# Speedrun
<!-- #SQUARK live!
| dest = docs/speedrun
| index = docs
| date = 2025 January 14
| update = 2025 July 2
-->

<!-- Holy crap, it took me half year to finally implement the speedrunner?? -->

*Integrity* features a [Speedrun](https://sup2point0.github.io/integrity/speedrun) environment where you can test your mathematical speed and accuracy.

Currently as of writing, you can choose to speedrun differentiation and graph drawing questions only. More question topics are likely to be supported in future.

The speedrun menu may look a little different for each topic, but ultimately it functions the same regardless of which: you answer questions one after the other against the clock.

> [!Tip]
> Heads up, you don’t have to use this for speedrunning! It’s also a nice way to see how long you take on questions, or just work through curated questions from *Integrity* in a random order.


## Setup

Head to [Setup Speedrun](https://sup2point0.github.io/integrity/speedrun/init) to configure the speedrun. Pick your topic, difficulties to include, and customise all your other preferences.

![configuring speedrun options]()

If you don’t set finishing criteria, the speedrun will keep going until you’ve exhausted all the available questions. You can also choose to end the speedrun manually at any time.

Once you’re happy, click **Create Speedrun**, which will take you to the speedrunner. When you’re ready to begin, hit **Start**!


## Speedrun

You can pause the speedrun at any time.

### Multiple Choice
Differentiation and graph drawing questions are multiple-choice (it’s a lot easier this way than checking an inputted answer). Naturally, you’ve got to identify and choose the correct option(s) out of the 4 options. It turns green if you answer correctly, or red if incorrect.

Of course, options may intentionally be similar or deceiving!

### Integration
Checking integrals programmatically is nontrivial,[^check-solutions] so you’ll have you to check your solution yourself. If you have it identical to my canonical solution, perfect; otherwise, you may need to check if some simplification or rewrite can transform your solution into mine. If it’s wildly different, you’ve probably used a different solution route, so your best bet is to use [Workspace](../workspace?preset=integrals) with the **Integral** preset to check. I recommend enabling **Pause timer on submit** for speedrunning integrals to give yourself time to check, and having Workspace open in a separate tab or window to do so.

[^check-solutions]: Different methods can yield different but congruent results.


## Finish

Whenever you feel like ending the speedrun, hit **Finish** in the upper-left. You’ll be taken to the results screen where you can see all sorts of fun statistics on your performance.


## Saving

Speedrun data and preferences are all saved to `localStorage`, which means they persist even if you close the tab. In fact, you can leave a speedrun unfinished and come back to it later!

Note that `localStorage` may periodically be purged by your browser, usually if you don’t visit *Integrity* for a while. If you really do want to save your performance, just take a screenshot ;)


## Shortcuts

If you’re serious about timing yourself you’ll of course want to avoid all time-wasting inefficiencies. As such, the speedrunner provides plenty of shortcuts to help you navigate. They should be pretty intuitive!

| key     | action |
| :------ | :----- |
| `Space` | pause speedrun timer |
| `1`     | select upper-left option |
| `2`     | select upper-right option |
| `3`     | select lower-left option |
| `4`     | select lower-right option |
| `Enter` | next question / skip question |
