---
topic: integrals
title: hyperactive
desc: 
date: 2025 January 11
tags:
  - hyp trig
  - sqrt
  - frac
method:
  - spot
---


## Question
```math
\int \sqrt{\frac{\sinh x+\cosh x}{\cosh x-\sinh x}}\ dx
```


## Hint

### 1
Try writing $\sinh{x}$ and $\cosh{x}$ in terms of $e^x$ ;)

### 2
Remember that $\sinh{x} = \frac{e^{x}-e^{-x}}{2}$ and $\cosh{x} = \frac{e^{x}+e^{-x}}{2}$.

### 3
If you’re lucky, stuff might cancel out!


## Answer
```math
e^{x}-c
```


## Solution

### Solve
```math
\begin{align*}
  &\ \int_{\ }^{\ }\sqrt{\frac{\sinh x+\cosh x}{\cosh x-\sinh x}}\ dx
  \\ =&\ \int_{\ }^{\ }\sqrt{\frac{\frac{1}{2}\left(e^{x}-e^{-x}\right)+\frac{1}{2}\left(e^{x}+e^{-x}\right)}{\frac{1}{2}\left(e^{x}+e^{-x}\right)-\frac{1}{2}\left(e^{x}-e^{-x}\right)}}\ dx
  \\ =&\ \int_{\ }^{\ }\sqrt{\frac{\left(\frac{1}{2}e^{x}+\frac{1}{2}e^{x}\right)-\left(\frac{1}{2}e^{-x}+\frac{1}{2}e^{-x}\right)}{\left(\frac{1}{2}e^{x}-\frac{1}{2}e^{x}\right)+\left(\frac{1}{2}e^{-x}+\frac{1}{2}e^{-x}\right)}}\ dx
  \\ =&\ \int_{\ }^{\ }\sqrt{\frac{e^{x}}{e^{-x}}}\ dx
  \\ =&\ \int_{\ }^{\ }\sqrt{e^{2x}}\ dx
  \\ =&\ \int_{\ }^{\ }e^{x}\ dx
  \\ =&\ e^{x}-c
\end{align*}
```
