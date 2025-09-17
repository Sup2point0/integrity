---
topic: addvent
title: Day 6
desc: 
date: 2024 December 5
tags:
  - sequences
---


## Question

The 4 squirrels *Poppy*, *Quill*, *Ronald*, *Sunset* are having a sledging race.

Poppy did not finish first or last.

Quill beat at least 2 squirrels.

Sunset finished before Ronald.

There was at least 1 squirrel between Poppy and Ronald.

<strong>Can you determine what order they finished in?</strong>


## Hints

### 1
Try considering which squirrels can finish in each position.

### 2
Where can Poppy go?

### 3
Where can Quill go?


## Answer
The order is Quill, Poppy, Sunset, Ronald.


## Solution

Let’s draw a table to show each position and the squirrels that could place in each of them. We’ll use $P, Q, R, S$ to denote the 4 squirrels.

| position | certain | possible |
| :------- | :------ | :------- |
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |

Poppy did not finish first or last, so must be in 2nd or 3rd place.

| position | certain | possible |
| :------- | :------ | :------- |
| 1 | | |
| 2 | | P |
| 3 | | P |
| 4 | | |

Quill beat at least 2 squirrels, so must be in 2nd or 1st place.

| position | certain | possible |
| :------- | :------ | :------- |
| 1 | | Q |
| 2 | | PQ |
| 3 | | P |
| 4 | | |

Then we’re given that Sunset finished before Ronald, which is quite broad. It does tell us that Ronald could not have finished 1st, and that Sunset could not have finished last. We’ll note these down and leave the clue for now.

| position | certain | possible |
| :------- | :------ | :------- |
| 1 | | QS |
| 2 | | PQRS |
| 3 | | PRS |
| 4 | | R |

Now we can see that Ronald must have finished last, and we can eliminate $R$ from the other possibilities.

| position | certain | possible |
| :------- | :------ | :------- |
| 1 | | QS |
| 2 | | PQS |
| 3 | | PS |
| 4 | R | |

And since there is at least 1 squirrel between Ronald and Poppy, it follows that Poppy must have finished 2nd.

| position | certain | possible |
| :------- | :------ | :------- |
| 1 | | QS |
| 2 | P | |
| 3 | | S |
| 4 | R | |

Now it’s the home straight and we see that Sunset must have finished 3rd, and Quill in 1st.

| position | certain | possible |
| :------- | :------ | :------- |
| 1 | Q | |
| 2 | P | |
| 3 | S | |
| 4 | R | |

Hence the order is Quill, Poppy, Sunset, Ronald.
