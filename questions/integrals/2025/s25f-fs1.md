---
topic: integrals
title: foreshadowing
desc: 
date: 2025 March 8
tags:
  - poly
  - sqrt
methods:
  - 
---


## Question
```math
\int
  \frac
    { \left( x + \sqrt{x^2 + 1} \right)^2 }
    { x^2 + 1 }
\ dx
```


## Answer
```math
2x-\tan^{-1}x+2\sqrt{x^{2}+1}-c
```


## Solution

```math
\begin{align*}
  &\ \int \frac{\left(x+\sqrt{x^{2}+1}\right)^{2}}{x^{2}+1}\ dx
  \\ =&\ \int \frac{\left(x^{2}+1\right)+x^{2}+2x\sqrt{x^{2}+1}}{x^{2}+1}\ dx
  \\ =&\ \int \frac{x^{2}+1}{x^{2}+1}+\frac{x^{2}+1-1}{x^{2}+1}+\frac{2x\sqrt{x^{2}+1}}{x^{2}+1}\ dx
  \\ =&\ \int 2-\frac{1}{x^{2}+1}+\frac{2x}{\sqrt{x^{2}+1}}\ dx
  \\ =&\ 2x-\tan^{-1}x+2\sqrt{x^{2}+1}-c
\end{align*}
```


## Alternates

### Trigonometric Substitution

```math
\begin{align*}
  x &= \tan t
  \\ dx &= \sec^{2}t\ dt
\end{align*}
```

```math
\begin{align*}
  &\ \int \frac{\left(x+\sqrt{x^{2}+1}\right)^{2}}{x^{2}+1}\ dx
  \\ =&\ \int \frac{\left(\tan t+\sqrt{\tan^{2}t+1}\right)^{2}}{\tan^{2}t+1}\cdot\sec^{2}t\ dt
  \\ =&\ \int \frac{\left(\tan t+\sec t\right)^{2}}{\sec^{2}t}\cdot\sec^{2}t\ dt
  \\ =&\ \int \left(\tan t+\sec t\right)^{2}\ dt
  \\ =&\ \int \tan^{2}t+2\sec t\tan t+\sec^{2}t\ dt
  \\ =&\ \int \sec^{2}t-1+2\sec t\tan t+\sec^{2}t\ dt
  \\ =&\ \int 2\sec^{2}t+2\sec t\tan t-1\ dt
  \\ =&\ 2\tan t+2\sec t-t
  \\ =&\ 2x+2\sqrt{x^{2}+1}-\tan^{-1}x-c
\end{align*}
```
