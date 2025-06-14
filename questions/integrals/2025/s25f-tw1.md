---
topic: integrals
title: Monday workout
desc: 
date: 2025 June 9
tags:
  - arctrig
methods:
  - work
---


## Question
```math
\int
  \tan^{-1} \left(
    \frac
      { x }
      { x + 1 }
  \right)
\ dx
```


## Hints

### 1
You know how to differentiate $\tan^{-1}(x)$.

### 2
You may want to simplify the stuff inside first.


## Answer
```math
x\tan^{-1}\left(\frac{x}{x+1}\right)-\frac{1}{4}\ln\left(x^{2}+x+1/2\right)+\frac{1}{2}\tan^{-1}\left(2x+1\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \tan^{-1}\left(\frac{x}{x+1}\right)\ dx
  \\ =&\ \int \tan^{-1}\left(\frac{x+1}{x+1}-\frac{1}{x+1}\right)\ dx
  \\ =&\ \int \tan^{-1}\left(1-\frac{1}{x+1}\right)\ dx
\end{align*}
```

### Parts
```math
\begin{align*}
      f &= \tan^{-1}\left(1-\frac{1}{x+1}\right) \quad&\quad g' &= 1
  \\ f' &= \frac{1}{\left(\frac{x}{x+1}\right)^{2}+1}\cdot\frac{1}{\left(x+1\right)^{2}} \quad&\quad g &= x
  \\ &= \frac{1}{x^{2}+\left(x+1\right)^{2}}
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ fg-\int f'g\ dx
  \\ =&\ x\tan^{-1}\left(1-\frac{1}{x+1}\right)-\int \frac{x}{x^{2}+\left(x+1\right)^{2}}\ dx
  \\ =&\ x\tan^{-1}\left(\frac{x}{x+1}\right)-\int \frac{x}{x^{2}+x^{2}+2x+1}\ dx
  \\ =&\ x\tan^{-1}\left(\frac{x}{x+1}\right)-\int \frac{x}{2x^{2}+2x+1}\ dx
  \\ =&\ x\tan^{-1}\left(\frac{x}{x+1}\right)-\frac{1}{4}\int \frac{2x}{x^{2}+x+1/2}\ dx
  \\ =&\ x\tan^{-1}\left(\frac{x}{x+1}\right)-\frac{1}{4}\int \frac{2x+1-1}{x^{2}+x+1/2}\ dx
  \\ =&\ x\tan^{-1}\left(\frac{x}{x+1}\right)-\frac{1}{4}\int \frac{2x+1}{x^{2}+x+1/2}\ dx+\frac{1}{4}\int \frac{1}{x^{2}+x+1/2}\ dx
  \\ =&\ x\tan^{-1}\left(\frac{x}{x+1}\right)-\frac{1}{4}\ln\left(x^{2}+x+1/2\right)+\frac{1}{4}\int \frac{1}{\left(x+1/2\right)^{2}-1/4+1/2}\ dx
  \\ =&\ x\tan^{-1}\left(\frac{x}{x+1}\right)-\frac{1}{4}\ln\left(x^{2}+x+1/2\right)+\frac{1}{4}\int \frac{1}{\left(x+1/2\right)^{2}+1/4}\ dx
  \\ =&\ x\tan^{-1}\left(\frac{x}{x+1}\right)-\frac{1}{4}\ln\left(x^{2}+x+1/2\right)+\frac{1}{4}\cdot\sqrt{4}\tan^{-1}\left(\sqrt{4}\left(x+\frac{1}{2}\right)\right)
  \\ =&\ x\tan^{-1}\left(\frac{x}{x+1}\right)-\frac{1}{4}\ln\left(x^{2}+x+1/2\right)+\frac{1}{2}\tan^{-1}\left(2x+1\right)-c
\end{align*}
```
