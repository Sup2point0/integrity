---
topic: integrals
title: simply devastating
desc: 
date: 2024 September
tags:
  - frac
  - trig
methods:
  - speed
---


## Question
```math
\int \frac{\cos2x}{\cos^{2}x}\ dx
```


## Hints

### 1
How could you expand $\cos(2x)$?


## Answer
```math
2x-\tan x-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{\cos2x}{\cos^{2}x}\ dx
  \\ =&\ \int \frac{\cos^{2}x-\sin^{2}x}{\cos^{2}x}\ dx
  \\ =&\ \int 1-\tan^{2}x\ dx
  \\ =&\ \int 1-\left(\sec^{2}x-1\right)\ dx
  \\ =&\ \int 2-\sec^{2}x\ dx
  \\ =&\ 2x-\tan x-c
\end{align*}
```
