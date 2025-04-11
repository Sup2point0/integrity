---
topic: integrals
title: new gen
desc: 
date: 2025 April 3
tags:
  - sqrt
  - inverse trig
methods:
  - parts
---


## Question
```math
\int
  x \tan^{-1}{\sqrt{x}}
\ dx
```


## Answer
```math
\frac{1}{2}x^{2}\tan^{-1}\sqrt{x}-\frac{1}{6}x^{3/2}+\frac{1}{2}\sqrt{x}-\frac{1}{2}\tan^{-1}\sqrt{x}-c
```


## Solution

### Substitute
```math
\begin{align*}
  \sqrt{x} &= t
  \\ x &= t^{2}
  \\ dx &= 2t\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int x\tan^{-1}\sqrt{x}\ dx
  \\ =&\ \int t^{2}\tan^{-1}t\cdot2t\ dt
  \\ =&\ 2\int t^{3}\tan^{-1}t\ dt
\end{align*}
```

### Parts
```math
\begin{align*}
  &= 2\left(\frac{1}{4}t^{4}\tan^{-1}t-\int \frac{1}{4}t^{4}\cdot\frac{1}{t^{2}+1}\ dt\right)
  \\ &= \frac{1}{2}t^{4}\tan^{-1}t-\frac{1}{2}\int \frac{t^{4}}{t^{2}+1}\ dt
  \\ &= \frac{1}{2}t^{4}\tan^{-1}t-\frac{1}{2}\int \frac{t^{4}+t^{2}-t^{2}}{t^{2}+1}\ dt
  \\ &= \frac{1}{2}t^{4}\tan^{-1}t-\frac{1}{2}\int \frac{t^{2}\left(t^{2}+1\right)}{t^{2}+1}-\frac{t^{2}}{t^{2}+1}\ dt
  \\ &= \frac{1}{2}t^{4}\tan^{-1}t-\frac{1}{2}\int t^{2}-\frac{t^{2}+1-1}{t^{2}+1}\ dt
  \\ &= \frac{1}{2}t^{4}\tan^{-1}t-\frac{1}{2}\int t^{2}-1+\frac{1}{t^{2}+1}\ dt
  \\ &= \frac{1}{2}t^{4}\tan^{-1}t-\frac{1}{6}t^{3}+\frac{1}{2}t-\frac{1}{2}\tan^{-1}t
  \\ &= \frac{1}{2}x^{2}\tan^{-1}\sqrt{x}-\frac{1}{6}x^{3/2}+\frac{1}{2}\sqrt{x}-\frac{1}{2}\tan^{-1}\sqrt{x}-c
\end{align*}
```
