---
topic: integrals
title: lawful evil
desc: 
date: 2024 December 9
difficulty: manifold
tags:
  - scare
  - sqrt
  - ln
methods:
  - long
  - spot
  - sub
  - trig sub
flags:
  - feat
  - guide
---


## Question
```math
\int \frac{1}{\sqrt{1-x^{-2}}}\ln\left(x-1\right)\ dx+\int \frac{1}{\sqrt{1-x^{-2}}}\ln\left(x+1\right)\ dx
```


## Hints

### 1
Those 2 integrals look awfully similar...

### 2
Do $x - 1$ and $x + 1$ look familiar to you?

### 3
Starts with “f” and rhymes with <em>tractorise</em>.


## Answer
```math
2\sqrt{x^{2}-1}\left(\ln\left(\sqrt{x^{2}-1}\right)-1\right)-c
```


## Solution

### Clean
These 2 integrals are really similar, so let’s merge them:

```math
=\int \frac{1}{\sqrt{1-\frac{1}{x^{2}}}}\ln\left(x-1\right)+\frac{1}{\sqrt{1-\frac{1}{x^{2}}}}\ln\left(x+1\right)\ dx
```

We factorise out the fraction:

```math
=\int \frac{1}{\sqrt{1-\frac{1}{x^{2}}}}\left(\ln\left(x-1\right)+\ln\left(x+1\right)\right)\ dx
```

Since we’re adding logs we can now apply a log law:

```math
=\int \frac{1}{\sqrt{1-\frac{1}{x^{2}}}}\ln\left(\left(x-1\right)\left(x+1\right)\right)\ dx
```

Oh hey, this is difference of 2 squares!

```math
=\int \frac{1}{\sqrt{1-\frac{1}{x^{2}}}}\ln\left(x^{2}-1\right)\ dx
```

### Substitute (1)

```math
\begin{align*}
  x &= \sec t
  \\ dx &= \sec t\tan t\ dt
  \\ =\int \frac{1}{\sqrt{1-\frac{1}{\sec^{2}t}}}\ln\left(\sec^{2}t-1\right)\left(\sec t\tan t\right)\ dt
\end{align*}
```

### Solve (1)
Reduce to primitives to spot eliminations:

```math
\begin{align*}
  &= \int \frac{1}{\sqrt{1-\cos^{2}t}}\cdot\ln\left(\tan^{2}t\right)\cdot\frac{1}{\cos t}\cdot\frac{\sin t}{\cos t}\ dt
  \\ &= \int \frac{1}{\sin t}\cdot2\ln\left(\tan t\right)\cdot\frac{\sin t}{\cos^{2}t}\ dt
  \\ &= 2\int \ln\left(\tan t\right)\sec^{2}t\ dt
\end{align*}
```

### Substitute (2)

```math
\begin{align*}
  \tan t &= v
  \\ \sec^{2}t\ dt &= dv
  \\ =2\int \ln v\ dv
\end{align*}
```

### Solve (2)
Integral of $\ln{v}$ is quotable, see [Antiderivatives/Logarithms](../../../scriptures/integrals/antiderivatives/ln.md)

```math
=2v\left(\ln v-1\right)
```

Put $t$ back:

```math
=2\tan t\left(\ln\left(\tan t\right)-1\right)
```

Put $x$ back:

```math
=2\sqrt{x^{2}-1}\left(\ln\left(\sqrt{x^{2}-1}\right)-1\right)-c
```

