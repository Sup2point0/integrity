---
topic: integrals
title: steamroller
desc: 
date: 2025 January 18
tags:
  - horror
  - trig
  - pi
method:
  - sub
  - spot
---


## Question
```math
\int
  \left( \frac{x+\pi}{4} \right)
  \sin\left( \frac{x+\pi}{4} \right)
  \sin\left( \frac{x-\pi}{4} \right)
\ dx
```


## Hints

### 1
Ignore the $\left( \frac{x+\pi}{4} \right)$ on the outside for now.

### 2
The $4$ may be important.

### 3
How could you turn $\sin$ into $\cos$?


## Answer
```math
\frac{x+\pi}{4}\cos\left(\frac{x+\pi}{2}\right)-\frac{1}{2}\sin\left(\frac{x+\pi}{2}\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  x + \pi &= t
  \\ dx &= dt
\end{align*}
```

### Trigonometric Identities
```math
\begin{align*}
  &\ \int \left(\frac{x+\pi}{4}\right)\sin\left(\frac{x+\pi}{4}\right)\sin\left(\frac{x-\pi}{4}\right)\ dx
  \\ =&\ \int \frac{t}{4}\sin\left(\frac{t}{4}\right)\sin\left(\frac{t-2\pi}{4}\right)\ dt
  \\ =&\ \int \frac{t}{4}\sin\left(\frac{t}{4}\right)\sin\left(\frac{t}{4}-\frac{\pi}{2}\right)\ dt
  \\ =&\ -\int \frac{t}{4}\sin\left(\frac{t}{4}\right)\sin\left(\frac{\pi}{2}-\frac{t}{4}\right)\ dt
  \\ =&\ -\int \frac{t}{4}\sin\left(\frac{t}{4}\right)\cos\left(\frac{t}{4}\right)\ dt
  \\ =&\ -\frac{1}{8}\int t\sin\left(\frac{t}{2}\right)\ dt
\end{align*}
```

### Parts
```math
\begin{align*}
  &= -\frac{1}{8}\left(t\cdot-2\cos\left(\frac{t}{2}\right)-\int -2\cos\left(\frac{t}{2}\right)\ dt\right)
  \\ &= -\frac{1}{8}\left(-2t\cos\left(\frac{t}{2}\right)+\int 2\cos\left(\frac{t}{2}\right)\ dt\right)
  \\ &= \frac{1}{4}t\cos\left(\frac{t}{2}\right)-\frac{1}{2}\int \frac{1}{2}\cos\left(\frac{t}{2}\right)\ dt
  \\ &= \frac{t}{4}\cos\left(\frac{t}{2}\right)-\frac{1}{2}\sin\left(\frac{t}{2}\right)
  \\ &= \frac{x+\pi}{4}\cos\left(\frac{x+\pi}{2}\right)-\frac{1}{2}\sin\left(\frac{x+\pi}{2}\right)-c
\end{align*}
```
