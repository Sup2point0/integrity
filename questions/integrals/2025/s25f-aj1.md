---
topic: integrals
title: mathematical adjective
desc: 
date: 2025 April 16
tags:
  - horror
  - frac
  - ln
  - trig
methods:
  - tough
  - spot
---


## Question
```math
\int
  \frac
    { \sqrt{3} - \tan{x}}
    { 1 + \sqrt{3}\tan{x} }
  \ln\left(
    \frac
      { \cos{x} + \sqrt{3}\sin{x} }
      { 2 }
  \right)
\ dx
```


## Hints

### 1
Start by getting rid of the $\tan(x)$-s.

### 2
Does $\sqrt{3}/2$ look familiar?

### 3
How could you express $\sqrt{3}/2$ in terms of $\sin(\theta)$ or $\cos(\theta)$?

### 4
Could you do the same for $1/2$?

### 5
What do you notice about the 2 values of $\theta$?

### 6
Try spot the trig angle addition!

### 7
You can write the inside term as $\cos\left(x-\frac{\pi}{3}\right)$.

### 8
Now you can make a substitution!


## Answer
```math
\frac{1}{2}\ln\left(\cos\left(x-\frac{\pi}{3}\right)\right)^{2}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\sqrt{3}-\tan x}{1+\sqrt{3}\tan x}\ln\left(\frac{\cos x+\sqrt{3}\sin x}{2}\right)\ dx
  \\ =&\ \int \frac{\sqrt{3}-\tan x}{1+\sqrt{3}\tan x}\ln\left(\frac{\cos x+\sqrt{3}\sin x}{2}\right)\cdot\frac{\cos x}{\cos x}\ dx
  \\ =&\ \int \frac{\sqrt{3}\cos x-\sin x}{\cos x+\sqrt{3}\sin x}\ln\left(\frac{\cos x+\sqrt{3}\sin x}{2}\right)\ dx
  \\ =&\ \int \frac{\frac{\sqrt{3}}{2}\cos x-\frac{1}{2}\sin x}{\frac{1}{2}\cos x+\frac{\sqrt{3}}{2}\sin x}\ln\left(\frac{1}{2}\cos x+\frac{\sqrt{3}}{2}\sin x\right)\ dx
\end{align*}
```

### Angle Addition
```math
\begin{align*}
  &= \int \frac{\sin\left(\frac{\pi}{3}\right)\cos\left(x\right)-\cos\left(\frac{\pi}{3}\right)\sin\left(x\right)}{\cos\left(\frac{\pi}{3}\right)\cos\left(x\right)+\sin\left(\frac{\pi}{3}\right)\sin\left(x\right)}\ln\left(\cos\left(\frac{\pi}{3}\right)\cos\left(x\right)+\sin\left(\frac{\pi}{3}\right)\sin\left(x\right)\right)\ dx
  \\ &= -\int \frac{\sin\left(x\right)\cos\left(\frac{\pi}{3}\right)-\sin\left(\frac{\pi}{3}\right)\cos\left(x\right)}{\cos\left(\frac{\pi}{3}\right)\cos\left(x\right)+\sin\left(\frac{\pi}{3}\right)\sin\left(x\right)}\ln\left(\cos\left(\frac{\pi}{3}\right)\cos\left(x\right)+\sin\left(\frac{\pi}{3}\right)\sin\left(x\right)\right)\ dx
  \\ &= -\int \frac{\sin\left(x-\frac{\pi}{3}\right)}{\cos\left(x-\frac{\pi}{3}\right)}\ln\left(\cos\left(x-\frac{\pi}{3}\right)\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \cos\left(x-\frac{\pi}{3}\right)=t
  \\ -\sin\left(x-\frac{\pi}{3}\right)\ dx=dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{1}{t}\ln t\ dt
  \\ &= \frac{1}{2}\left(\ln t\right)^{2}
  \\ &= \frac{1}{2}\ln\left(\cos\left(x-\frac{\pi}{3}\right)\right)^{2}-c
\end{align*}
```
