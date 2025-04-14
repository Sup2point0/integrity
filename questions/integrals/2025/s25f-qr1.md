---
topic: integrals
title: gridded
desc: 
date: 2025 January 18
tags:
  - horror
  - sqrt
  - frac
methods:
  - work
  - acc
---


## Question
```math
\int
  \sqrt{ \frac
    { \sqrt{x-1}+\sqrt{x+1} }
    { \sqrt{x+1}-\sqrt{x-1} }
  }
\ dx
```


## Hints

### 1
Start by splitting the large $\sqrt{}$ so that it wraps the numerator and denominator separately.

### 2
How we get rid of $\sqrt{}$ in the denominator?


## Answer
```math
\frac{\sqrt{2}}{3}\left(x+1\right)^{3/2}+\frac{\sqrt{2}}{3}\left(x-1\right)^{3/2}-c
```


## Solution

The strategy for this one, really, is to just keep multiplying by the conjugate of the denominator, so that you can do difference of 2 squares.

```math
\begin{align*}
  &\ \int \sqrt{\frac{\sqrt{x-1}+\sqrt{x+1}}{\sqrt{x+1}-\sqrt{x-1}}}\ dx
  \\ =&\ \int \sqrt{\frac{\sqrt{x-1}+\sqrt{x+1}}{\sqrt{x+1}-\sqrt{x-1}}\cdot\frac{\sqrt{x+1}-\sqrt{x-1}}{\sqrt{x+1}-\sqrt{x-1}}}\ dx
  \\ =&\ \int \frac{\sqrt{\left(\sqrt{x+1}\right)^{2}-\left(\sqrt{x-1}\right)^{2}}}{\sqrt{\left(\sqrt{x+1}-\sqrt{x-1}\right)^{2}}}\ dx
  \\ =&\ \int \frac{\sqrt{\left(x+1\right)-\left(x-1\right)}}{\sqrt{x+1}-\sqrt{x-1}}\ dx
  \\ =&\ \int \frac{\sqrt{2}}{\sqrt{x+1}-\sqrt{x-1}}\ dx
  \\ =&\ \sqrt{2}\int \frac{1}{\sqrt{x+1}-\sqrt{x-1}}\cdot\frac{\sqrt{x+1}+\sqrt{x-1}}{\sqrt{x+1}+\sqrt{x-1}}\ dx
  \\ =&\ \sqrt{2}\int \frac{\sqrt{x+1}+\sqrt{x-1}}{\left(\sqrt{x+1}\right)^{2}-\left(\sqrt{x-1}\right)^{2}}\ dx
  \\ =&\ \sqrt{2}\int \frac{\sqrt{x+1}+\sqrt{x-1}}{\left(x+1\right)-\left(x-1\right)}\ dx
  \\ =&\ \sqrt{2}\int \frac{\sqrt{x+1}+\sqrt{x-1}}{2}\ dx
  \\ =&\ \frac{\sqrt{2}}{2}\int \sqrt{x+1}+\sqrt{x-1}\ dx
  \\ =&\ \frac{\sqrt{2}}{2}\left(\frac{2}{3}\left(x+1\right)^{3/2}+\frac{2}{3}\left(x-1\right)^{3/2}\right)
  \\ =&\ \frac{\sqrt{2}}{3}\left(x+1\right)^{3/2}+\frac{\sqrt{2}}{3}\left(x-1\right)^{3/2}-c
\end{align*}
```
