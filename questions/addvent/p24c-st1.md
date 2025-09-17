---
topic: addvent
title: Day 9
desc: 
date: 2024 December 13
tags:
  - probability
methods:
  - trap
---


## Question

An 8 ft tall inflatable Santa has spontaneously appeared at school, attracting the admiration of students and teachers alike!

Every time someone walks past it, there is a 0.01% chance they trip over Santa’s enormous feet and fall into his puffy embrace.

Suppose 3 people walk past Santa every minute of a 9-hour schoolday.

<strong>What is the probability at least 1 person is tripped up in the week?</strong>


## Hints

### 1
How many people walk past Santa in a school week?

### 2
At least 1 person tripping up is the opposite of *no one* tripping up.

### 3
What’s the probably no one trips up in a week?


## Answer

$55.5159951\%$


## Solution

We wish to find $P(\text{tripped} > 0)$. Finding the individual probabilities for 1 person being tripped up, 2 people, 3 people, etc. is not viable. Instead, we can find the probability of the *opposite* scenario occurring – that is, nobody trips up – and subtract this from $1$.

```math
P(\text{tripped} > 0) = 1 - P(\text{tripped} = 0)
```

For each person, the probability they trip up is $0.01 \% = 0.0001$ (be careful with how many zeroes you have!). So the probability they *don’t* trip up is $1 - 0.0001 = 0.9999$.

Now we find how many people walk past in a week. If $3$ walk past every minute, then $3 \cdot 60 = 180$ walk past in an hour, and $180 \cdot 9 = 1620$ walk past in the whole day. A school week runs from Monday to Friday, so in the whole week a total of $1620 \cdot 5 = 8100$ people walk past Santa.

The probability that none of these people trip over is

```math
P(\text{tripped} = 0) = 0.9999^{8100}
```

Putting this into our original equation then gives

```math
\begin{align*}
  P(\text{tripped} > 0) &= 1 - 0.9999^{8100}
  \\ &= 0.5551
  \\ &= 55.5 \%
\end{align*}
```

Hence the probability at least 1 person gets tripped up is $55.5 \%$. Pretty even split, eh?
