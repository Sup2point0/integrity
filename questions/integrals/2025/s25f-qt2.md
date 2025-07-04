---
topic: integrals
title: architechnica
desc: Long road ahead.
date: 2025 February 1
difficulty: chaos
tags:
  - dread
  - sqrt
  - trig
methods:
  - tough
  - work
flags:
  - feat
---


## Question
```math
\int \sqrt{1-\tan^{2}x}\ dx
```


## Hints

### 1
If the $\tan{x}$ were just $x$, how would you solve the integral?

### 2
You can do a compound substitution of $\tan{x} = \sin{t}$.

### 3
The resultant integral looks simpler, but is just as horrific.

### 4
You want to divide through by something.

### 5
How can you rewrite the expression in terms of just 1 trigonometric function?

### 6
Can you factorise the resultant polynomial?

### 7
Partial fractions will be of help.


## Answer
```math
\sqrt{2}\tan^{-1}\left(\frac{\sqrt{2}\tan x}{\sqrt{1-\tan^{2}x}}\right)-\sin^{-1}\left(\tan x\right)-c
```


## Solution

### Trigonometric Substitution
```math
\begin{align*}
  \tan x &= \sin t
  \\ x &= \tan^{-1}\left(\sin t\right)
  \\ dx &= \frac{1}{1+\sin^{2}t}\cdot\cos t\ dt
\end{align*}
```

### Trigonometric Identities
```math
\begin{align*}
  &\ \int \sqrt{1-\tan^{2}x}\ dx
  \\ =&\ \int \sqrt{1-\sin^{2}t}\cdot\frac{\cos t}{1+\sin^{2}t}\ dt
  \\ =&\ \int \frac{\cos^{2}t}{1+\sin^{2}t}\ dt
  \\ =&\ \int \frac{\cos^{2}t}{1+\sin^{2}t}\cdot\frac{\sec^{2}t}{\sec^{2}t}\ dt
  \\ =&\ \int \frac{\sec^{2}t}{\sec^{4}t+\sec^{2}t\tan^{2}t}\ dt
  \\ =&\ \int \frac{\sec^{2}t}{\left(\tan^{2}t+1\right)^{2}+\left(\tan^{2}t+1\right)\left(\tan^{2}t\right)}\ dt
\end{align*}
```

### Substitute
```math
\begin{align*}
  \tan t &= v
  \\ \sec^{2}t\ dt &= dv
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &= \int \frac{1}{\left(v^{2}+1\right)^{2}+\left(v^{2}+1\right)\left(v^{2}\right)}\ dv
  \\ &= \int \frac{1}{v^{4}+2v^{2}+1+v^{4}+v^{2}}\ dv
  \\ &= \int \frac{1}{2v^{4}+3v^{2}+1}\ dv
\end{align*}
```

### Factor Theorem
Write $v^2 = w$ for convenience.

```math
\frac{1}{2v^{4}+3v^{2}+1}=\frac{1}{2w^{2}+3w+1}
```

$w = -1$ is a solution to $2w^2 + 3w + 1 = 0$, therefore $(w + 1)$ is a factor:

```math
\frac{1}{2w^{2}+3w+1} = \frac{1}{\left(w+1\right)\left(2w+1\right)}
```

### Partial Fractions
```math
\begin{align*}
  \frac{1}{\left(w+1\right)\left(2w+1\right)}
    &= \frac{p}{w+1}+\frac{q}{2w+1}
  \\ 1 &= p\left(2w+1\right)+q\left(w+1\right)
\end{align*}
```

Let $w = -1$:

```math
\begin{align*}
  1 &= p\left(-2+1\right)
  \\ p &= -1
\end{align*}
```

Let $w = -1/2$:

```math
\begin{align*}
  1 &= q\left(-\frac{1}{2}+1\right)
  \\ q &= 2
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  \int \frac{1}{\left(w+1\right)\left(2w+1\right)}\ dv
    &= \int -\frac{1}{w+1}+\frac{2}{2w+1}\ dv
  \\ &= \int \frac{2}{2v^{2}+1}-\frac{1}{v^{2}+1}\ dv
  \\ &= \int \frac{1}{\frac{1}{2}+v^{2}}-\frac{1}{1+v^{2}}\ dv
  \\ &= \sqrt{2}\tan^{-1}\left(\sqrt{2}v\right)-\tan^{-1}v
  \\ &= \sqrt{2}\tan^{-1}\left(\sqrt{2}\tan t\right)-t
\end{align*}
```

### Reformulate
```math
\begin{align*}
  \sin t &= \tan x
  \\ \cos t &= \sqrt{1-\tan^{2}x}
  \\ \tan t &= \frac{\sin t}{\cos t}
  \\ &= \frac{\tan x}{\sqrt{1-\tan^{2}x}}
\end{align*}
```

### Solve (3)
```math
=\sqrt{2}\tan^{-1}\left(\frac{\sqrt{2}\tan x}{\sqrt{1-\tan^{2}x}}\right)-\sin^{-1}\left(\tan x\right)-c
```
