---
topic: integrals
title: lineup
desc: 
date: 2025 April 19
difficulty: incline
tags:
  - arctrig
methods:
  - speed
---


## Question
```math
\int \frac{\sec^{-1}x}{x^{2}}\ dx
```


## Hints

### 1

### 2

### 3


## Answer
```math

```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\sec^{-1}x}{x^{2}}\ dx
  \\ =&\ \int \frac{1}{x^{2}}\cos^{-1}\left(\frac{1}{x}\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \frac{1}{x} &= t
  \\ -\frac{1}{x^{2}}\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -\int \cos^{-1}t\ dt
  \\ &= -t\cos^{-1}t+\int -\frac{t}{\sqrt{1-t^{2}}}\ dx
  \\ &= -t\cos^{-1}t+\int \frac{-2t}{2\sqrt{1-t^{2}}}\ dx
  \\ &= -t\cos^{-1}t+\sqrt{1-t^{2}}-c
  \\ &= \sqrt{1-\frac{1}{x^{2}}}-\frac{1}{x}\cos^{-1}\left(\frac{1}{x}\right)-c
  \\ &= \frac{1}{\left|x\right|}\sqrt{x^{2}-1}-\frac{1}{x}\sec^{-1}\left(x\right)-c
\end{align*}
```


## Alternates

Substitute:

```math
\begin{align*}
  \sec^{-1}x &= t
  \\ x &= \sec t
  \\ dx &= \sec t\tan t\ dt
\end{align*}
```

Which gives:

```math
\begin{align*}
  &\ \int \frac{\sec^{-1}x}{x^{2}}\ dx
  \\ =&\ \int \frac{t}{\sec^{2}t}\cdot\sec t\tan t\ dt
  \\ =&\ \int t\frac{\tan t}{\sec t}\ dt
  \\ =&\ \int t\sin t\ dt
\end{align*}
```

Parts:

```math
\begin{align*}
      f &= t \quad&\quad g' &= \sin t
  \\ f' &= 1 \quad&\quad g &= -\cos t
\end{align*}
```

To give:

```math
\begin{align*}
  &\ fg-\int f'g\ dt
  \\ =&\ -t\cos t+\int \cos t\ dt
  \\ =&\ -t\cos t+\sin t
  \\ =&\ -\frac{\sec^{-1}x}{x}+\frac{\sqrt{x^{2}-1}}{\left|x\right|}-c
\end{align*}
```
