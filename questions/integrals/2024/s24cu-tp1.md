---
topic: integrals
title: simp
desc: 
date: 2024 September
tags:
  - trig
methods:
  - trap
---


## Question
```math
\int \frac{1-\sin x}{\left(1+\sin x\right)\left(1-\sin x\right)}\ dx
```


## Hints

### 1
You may find it helpful here to *not* cancel out.


## Answer
```math
\tan x-\sec x-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{1-\sin x}{\left(1+\sin x\right)\left(1-\sin x\right)}\ dx
  \\ =&\ \int \frac{1-\sin x}{1-\sin^{2}x}\ dx
  \\ =&\ \int \frac{1-\sin x}{\cos^{2}x}\ dx
  \\ =&\ \int \sec^{2}x-\sec x\tan x\ dx
  \\ =&\ \tan x-\sec x-c
\end{align*}
```
