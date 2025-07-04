---
topic: integrals
title: automata
desc: 
date: 2025 April 18
difficulty: manifold
tags:
  - sqrt
  - poly
methods:
  - trig sub
---


## Question
```math
\int \frac{x}{x+\sqrt{x^{2}+1}}\ dx
```


## Hints

### 1
What does $\sqrt{x^2+1}$ suggest?

### 2
Trig sub is probably easier here than hyp trig sub.

### 3
Let $x^2 = \tan(t)$.


## Answer
```math
\frac{1}{3}\left[\left(x^{2}+1\right)^{3/2}-x^{3}\right]-c
```


## Solution

### Trigonometric Substitution
```math
\begin{align*}
  x &= \tan{t}
  \\ dx &= \sec^2{t} \ dt
\end{align*}
```

### Reshape
```math
\begin{align*}
  &\ \int \frac{x}{x+\sqrt{x^{2}+1}}\ dx
  \\ =&\ \int \frac{\tan t}{\tan t+\sqrt{\tan^{2}t+1}}\cdot\sec^{2}t\ dt
  \\ =&\ \int \frac{\sec^{2}t\tan t}{\tan t+\sec t}\ dt
  \\ =&\ \int \frac{\sec^{2}t\tan t}{\tan t+\sec t}\cdot\frac{\tan t-\sec t}{\tan t-\sec t}\ dt
  \\ =&\ \int \frac{\left(\sec^{2}t\tan t\right)\left(\tan t-\sec t\right)}{\tan^{2}t-\sec^{2}t}\ dt
  \\ =&\ \int \frac{\left(\sec^{2}t\tan t\right)\left(\tan t-\sec t\right)}{-1}\ dt
  \\ =&\ -\int \sec^{2}t\tan^{2}t-\sec^{3}t\tan t\ dt
  \\ =&\ \int \sec^{2}t\cdot\sec t\tan t\ dt-\int \tan^{2}t\cdot\sec^{2}t\ dt
  \\ =&\ \frac{1}{3}\sec^{3}t-\frac{1}{3}\tan^{3}t
  \\ =&\ \frac{1}{3}\left[\left(x^{2}+1\right)^{3/2}-x^{3}\right]-c
\end{align*}
```
