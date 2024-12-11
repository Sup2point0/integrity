---
topic: addvent
title: Day 3
desc: 'This is a really important thing to know that crops up *very* often in life. Sauce: trust.'
date: 2024 December 4
tags:
  - combinatorics
---


## Question

I am decorating gingerbread men with buttons.

I have $2$ blue, $2$ green, $2$ yellow, and $2$ purple buttons. Each gingerbread man needs $3$ buttons arranged vertically.

<strong>How many different gingerbread men designs can I make?</strong>


## Notes

- Treat distinct orders of colours as different designs: blue, blue, green is different to blue, green, blue.


## Hints

### 1
We might want to systematically list out some cases to start with, but it may be better to consider different *kinds* of cases here.

### 2
What if all 3 buttons are different colours?

### 3
What if 2 of the 3 buttons are the same colour?


## Answer
60


## Solution

### _
We consider 2 cases – either all 3 buttons are different colours, or a colour is repeated (we have 2 of the same colour).

### All Different
We have 4 choices for the first colour, 3 for the second, and 2 for the third. This gives $4 \cdot 3 \cdot 2 = 24$ patterns.

### Repeated
We have 4 choices for which colour to repeat, leaving 3 choices for the remaining colour. Furthermore, we then have 3 slots to place the remaining button (top, middle or bottom). This gives $4 \cdot 3 \cdot 3 = 36$ patterns.

### Solve
Adding these, we find in total we can obtain $24 + 36 = 60$ different designs.


## Alternatives

We count the permutations of 4 colours in 3 slots, then discount those that have 3 of the same colour.

In each of the 3 slots, we have 4 colours to choose from, giving $4^3 = 64$ permutations.

4 of these patterns are 3 buttons of the colour, hence we have $64 - 4 = 60$ designs.
