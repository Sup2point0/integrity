---
topic: integrals
title: let you down
desc: Is it as easy as it looks?
date: 2025 April 1
difficulty: null
tags:
  - 
methods:
  - troll
---


## Question
```math
\int
  \frac{2}{e^x+e^{-x}}
\ dx - \int
  \operatorname{sech}{x}
\ dx
```


## Hints

### 1
How is $\operatorname{sech}{x}$ defined?

### 2
What’s the integral of $0$?


## Answer
$c$


## Solution

```math
\begin{align*}
  &\ \int \frac{2}{e^{x}+e^{-x}}\ dx-\int \operatorname{sech}x\ dx
  \\ =&\ \int \operatorname{sech}x\ -\operatorname{sech}x\ dx
  \\ =&\ \int 0\ dx
  \\ =&\ c
\end{align*}
```
