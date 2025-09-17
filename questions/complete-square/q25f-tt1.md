---
topic: complete-square
title: tri-try
desc: This site desperately needs more completing the square questions lmao. Unfortunately they’re just not that interesting. Maybe I should make some wordy questions...?
date: 2025 September 16
tags:
  - frac
  - horror
---


## Question
```math
\frac
  { 2x^{4}+5x^{3}-5x^{2}-5x+3 }
  { 3-2x-x^{2} }
```


## Hints

### 1
Starts with “f” and rhymes with *tractorise*.

### 2
How could you factorise the denominator?

### 3
Hint: the denominator divides the numerator.


## Answer
```math
-2\left(x+\frac{1}{4}\right)^{2}+\frac{9}{8}
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \frac{2x^{4}+5x^{3}-5x^{2}-5x+3}{3-2x-x^{2}}
  \\ =&\ -\frac{2x^{4}+5x^{3}-5x^{2}-5x+3}{x^{2}+2x-3}
  \\ =&\ -\frac{2x^{4}+5x^{3}-5x^{2}-5x+3}{\left(x-1\right)\left(x+3\right)}
\end{align*}
```

### Factor Theorem
```math
\begin{align*}
  2x^{4}+5x^{3}-5x^{2}-5x+3 \,\vert_{x=1} &= 2+5-5-5+3
  \\ &= 0
\end{align*}
```

```math
\begin{align*}
  \\ 2x^{4}+5x^{3}-5x^{2}-5x+3 \,\vert_{x=-3} &= 2\left(-3\right)^{4}+5\left(-3\right)^{3}-5\left(-3\right)^{2}-5\left(-3\right)+3
  \\ &= 162-135-45+15+3
  \\ &= 0
\end{align*}
```

Hence:

```math
\begin{align*}
  &\ 2x^{4}+5x^{3}-5x^{2}-5x+3
  \\ =&\ \left(x-1\right)\left(x+3\right)P\left(x\right)
\end{align*}
```

### Polynomial Division
```math
\begin{align*}
  &\ -\frac{2x^{4}+5x^{3}-5x^{2}-5x+3}{\left(x-1\right)\left(x+3\right)}
  \\ =&\ -\frac{\left(x-1\right)\left(x+3\right)\left(2x^{2}+x-1\right)}{\left(x-1\right)\left(x+3\right)}
  \\ =&\ -\left(2x^{2}+x-1\right)
\end{align*}
```

### Complete the Square
```math
\begin{align*}
  &= -2\left(x^{2}+\frac{1}{2}x-\frac{1}{2}\right)
  \\ &= -2\left[\left(x+\frac{1}{4}\right)^{2}-\left(\frac{1}{4}\right)^{2}-\frac{1}{2}\right]
  \\ &= -2\left[\left(x+\frac{1}{4}\right)^{2}-\frac{9}{16}\right]
  \\ &= -2\left(x+\frac{1}{4}\right)^{2}+\frac{9}{8}
\end{align*}
```
