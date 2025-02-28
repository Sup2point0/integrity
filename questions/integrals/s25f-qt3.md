---
topic: integrals
title: architechnica
desc: 
date: 2025 February 1
tags:
  - trig
  - sqrt
methods:
  - dread
  - long
---


## Question
```math
\int \sqrt{1-\tan^{2}x}\ dx
```


## Hints

### 1
Good luck.


## Answer
```math
-\sin^{-1}\left(\tan x\right)+\sqrt{2}\tan^{-1}\left(\frac{\sqrt{2}\tan x}{\sqrt{1-\tan^{2}x}}\right)-c
```


## Solution

### Substitute (1)
```math
\begin{align*}
  \tan x &= \sin t
  \\ x &= \tan^{-1}\left(\sin t\right)
  \\ dx &= \frac{1}{1+\sin^{2}t}\cdot\cos t\ dt
\end{align*}
```

### Reshape
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

### Substitute (2)
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
```math
\begin{align*}
  v^2 &= w
  \\ 2v^{4}+3v^{2}+1 &= 2w^{2}+3w+1
\end{align*}
```

$w = -1$ is a solution to $2w^2 + 3w + 1 = 0$, therefore $(w + 1)$ is a factor:

```math
\begin{align*}
  2w^2 + 3w + 1 &= 0
  \\ \left(w+1\right)\left(2w+1\right) &= 0
\end{align*}
```

Hence

```math
\begin{align*}
  &= \int \frac{1}{2w^{2}+3w+1}\ dv
  \\ &= \int \frac{1}{\left(w+1\right)\left(2w+1\right)}\ dv
  \\ &= \int \frac{1}{\left(v^{2}+1\right)\left(2v^{2}+1\right)}\ dv
\end{align*}
```

### Partial Fractions
```math
\begin{align*}
  \frac{1}{\left(v^{2}+1\right)\left(2v^{2}+1\right)} &= \frac{pv+q}{v^{2}+1}+\frac{rv+s}{2v^{2}+1}
  \\ 1 &= \left(pv+q\right)\left(2v^{2}+1\right)+\left(rv+s\right)\left(v^{2}+1\right)
  \\ 1 &= pv\left(2v^{2}+1\right)+q\left(2v^{2}+1\right)+rv\left(v^{2}+1\right)+s\left(v^{2}+1\right)
\end{align*}
```

Let $v^2 = -1$, so $v = i$:

```math
\begin{align*}
  1 &= pi\left(-2+1\right)+q\left(-2+1\right)+0+0
  \\ 1 &= -pi-q
\end{align*}
```

Comparing real and imaginary components gives

```math
\begin{align*}
  p &= 0
  \\ q &= -1
\end{align*}
```

Let $v^2 = -1/2$, so $v = i/\sqrt{2}$:

```math
\begin{align*}
  1 &= \left(pv+q\right)\left(2\cdot-\frac{1}{2}+1\right)+\left(rv+s\right)\left(-\frac{1}{2}+1\right)
  \\ 1 &= 0+\frac{1}{2}r\cdot\frac{i}{\sqrt{2}}+\frac{1}{2}s
  \\ 2 &= \frac{ir}{\sqrt{2}}+s
\end{align*}
```

Comparing real and imaginary components gives

```math
\begin{align*}
  r &= 0
  \\ s &= 2
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &\ \int \frac{1}{\left(v^{2}+1\right)\left(2v^{2}+1\right)}\ dv
  \\ =&\ \int -\frac{1}{v^{2}+1}+\frac{2}{2v^{2}+1}\ dv
  \\ =&\ -\tan^{-1}v+\int \frac{1}{v^{2}+1/2}\ dv
  \\ =&\ -\tan^{-1}v+\sqrt{2}\tan^{-1}\left(\sqrt{2}v\right)
  \\ =&\ -t+\sqrt{2}\tan^{-1}\left(\sqrt{2}\tan t\right)
  \\ =&\ -\sin^{-1}\left(\tan x\right)+\sqrt{2}\tan^{-1}\left(\frac{\sqrt{2}\tan x}{\sqrt{1-\tan^{2}x}}\right)-c
\end{align*}
```
