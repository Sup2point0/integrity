---
topic: integrals
title: enough will be enough
desc: 
date: 2025 June 7
tags:
  - poly
  - sqrt
methods:
  - speed
---


## Question
```math
\int
  \frac{1}{x^9}
  \sqrt{
    \frac{1}{x^4} + 1
  }
\ dx
```


## Hints

### 1
How can you split $x^9$?

### 2
You’re looking to substitute $\frac{1}{x^4}$.


## Answer
```math
\frac{1}{30}\left(\frac{1}{x^{4}}+1\right)^{3/2}\left(2-\frac{3}{x^{4}}\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1}{x^{9}}\sqrt{\frac{1}{x^{4}}+1}\ dx
  \\ =&\ -\frac{1}{4}\int -\frac{4}{x^{5}}\cdot\frac{1}{x^{4}}\sqrt{\frac{1}{x^{4}}+1}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \frac{1}{x^{4}}+1 &= t
  \\ \frac{1}{x^{4}} &= t-1
  \\ -\frac{4}{x^{5}}\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -\frac{1}{4}\int \left(t-1\right)\sqrt{t}\ dt
  \\ &= -\frac{1}{4}\int t^{3/2}-t^{1/2}\ dt
  \\ &= \frac{1}{4}\int t^{1/2}-t^{3/2}\ dt
  \\ &= \frac{1}{4}\left(\frac{2}{3}t^{3/2}-\frac{2}{5}t^{5/2}\right)
  \\ &= \frac{2}{60}\left(5t^{3/2}-3t^{5/2}\right)
  \\ &= \frac{1}{30}t^{3/2}\left(5-3t\right)
  \\ &= \frac{1}{30}\left(\frac{1}{x^{4}}+1\right)^{3/2}\left(5-3\left(\frac{1}{x^{4}}+1\right)\right)
  \\ &= \frac{1}{30}\left(\frac{1}{x^{4}}+1\right)^{3/2}\left(2-\frac{3}{x^{4}}\right)-c
\end{align*}
```
