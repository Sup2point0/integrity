---
topic: integrals
title: what is this
desc: 
date: 2025 April 15
tags:
 - trig
methods:
  - tough
  - spot
---


## Question
```math
\int
  \frac
    { \sin{x} }
    { 1 + \tan{x} }
\ dx
```


## Hints

### 1
Start by getting rid of $\tan(x)$.

### 2
Multiply through by $\cos(x)$.

### 3
Trust your instincts.

### 4
Multiply through by $\cos(x)-\sin(x)$.

### 5
Now you can split the integral to make 2 similar substitutions.

### 6
If you have everything in terms of $\sin(x)$ and 1 $\cos(x)$ in the numerator, you can make a substitution of $\sin(x) = t$.


## Answer
```math
\frac{1}{2}\left(\sin x-\cos x\right)+\frac{\sqrt{2}}{4}\left(\tanh^{-1}\left(\sqrt{2}\cos x\right)-\tanh^{-1}\left(\sqrt{2}\sin x\right)\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int_{\ }^{\ }\frac{\sin x}{1+\tan x}\ dx
  \\ =&\ \int_{\ }^{\ }\frac{\sin x}{1+\tan x}\cdot\frac{\cos x}{\cos x}\ dx
  \\ =&\ \int_{\ }^{\ }\frac{\sin x\cos x}{\cos x+\sin x}\ dx
  \\ =&\ \int_{\ }^{\ }\frac{\sin x\cos x}{\cos x+\sin x}\cdot\frac{\cos x-\sin x}{\cos x-\sin x}\ dx
  \\ =&\ \int_{\ }^{\ }\frac{\sin x\cos^{2}x-\sin^{2}x\cos x}{\cos^{2}x-\sin^{2}x}\ dx
  \\ =&\ \int_{\ }^{\ }\frac{\sin x\cos^{2}x}{\cos^{2}x-\sin^{2}x}-\frac{\sin^{2}x\cos x}{\cos^{2}x-\sin^{2}x}\ dx
  \\ =&\ \int_{\ }^{\ }\frac{\sin x\cos^{2}x}{\cos^{2}x-\left(1-\cos^{2}x\right)}-\frac{\sin^{2}x\cos x}{\left(1-\sin^{2}x\right)-\sin^{2}x}\ dx
  \\ =&\ -\int_{\ }^{\ }\frac{\cos^{2}x\cdot-\sin x}{2\cos^{2}x-1}\ dx-\int_{\ }^{\ }\frac{\sin^{2}x\cdot\cos x}{1-2\sin^{2}x}\ dx
\end{align*}
```

We’ll now evaluate each of these integrals separately.

### Left
```math
\begin{align*}
  \cos x &= t
  \\ -\sin x\ dx &= dt
\end{align*}
```

```math
\begin{align*}
  &\ \int_{\ }^{\ }\frac{\cos^{2}x\cdot-\sin x}{2\cos^{2}x-1}\ dx
  \\ =&\ \int_{\ }^{\ }\frac{t^{2}}{2t^{2}-1}\ dt
  \\ =&\ \frac{1}{2}\int_{\ }^{\ }\frac{2t^{2}}{2t^{2}-1}\ dt
  \\ =&\ \frac{1}{2}\int_{\ }^{\ }\frac{2t^{2}-1}{2t^{2}-1}+\frac{1}{2t^{2}-1}\ dt
  \\ =&\ \frac{1}{2}\int_{\ }^{\ }dt+\frac{1}{2}\int_{\ }^{\ }\frac{1}{2t^{2}-1}\ dt
  \\ =&\ \frac{1}{2}t-\frac{1}{4}\int_{\ }^{\ }\frac{1}{1/2-t^{2}}\ dt
  \\ =&\ \frac{1}{2}t-\frac{1}{4}\cdot\sqrt{2}\tanh^{-1}\left(\sqrt{2}t\right)
  \\ =&\ \frac{1}{2}\cos x-\frac{\sqrt{2}}{4}\tanh^{-1}\left(\sqrt{2}\cos x\right)-c_{1}
\end{align*}
```

### Right
```math
\begin{align*}
  \sin x &= t
  \\ \cos x\ dx &= dt
\end{align*}
```

```math
\begin{align*}
  &\ \int_{\ }^{\ }\frac{\sin^{2}x\cdot\cos x}{1-2\sin^{2}x}\ dx
  \\ =&\ \int_{\ }^{\ }\frac{t^{2}}{1-2t^{2}}\ dt
  \\ =&\ -\frac{1}{2}\int_{\ }^{\ }\frac{-2t^{2}}{1-2t^{2}}\ dt
  \\ =&\ -\frac{1}{2}\int_{\ }^{\ }\frac{1-2t^{2}}{1-2t^{2}}-\frac{1}{1-2t^{2}}\ dt
  \\ =&\ -\frac{1}{2}\int_{\ }^{\ }dt+\frac{1}{2}\int_{\ }^{\ }\frac{1}{1-2t^{2}}\ dt
  \\ =&\ -\frac{1}{2}\int_{\ }^{\ }dt+\frac{1}{4}\int_{\ }^{\ }\frac{1}{1/2-t^{2}}\ dt
  \\ =&\ -\frac{1}{2}t+\frac{1}{4}\sqrt{2}\tanh^{-1}\left(\sqrt{2}t\right)
  \\ =&\ -\frac{1}{2}\sin x+\frac{\sqrt{2}}{4}\tanh^{-1}\left(\sqrt{2}\sin x\right)-c_{2}
\end{align*}
```

### Merge
```math
\begin{align*}
  &\ -\int_{\ }^{\ }\frac{\cos^{2}x\cdot-\sin x}{2\cos^{2}x-1}\ dx-\int_{\ }^{\ }\frac{\sin^{2}x\cdot\cos x}{1-2\sin^{2}x}\ dx
  \\ =&\ -\left(\frac{1}{2}\cos x-\frac{\sqrt{2}}{4}\tanh^{-1}\left(\sqrt{2}\cos x\right)-c_{1}\right)-\left(-\frac{1}{2}\sin x+\frac{\sqrt{2}}{4}\tanh^{-1}\left(\sqrt{2}\sin x\right)-c_{2}\right)
  \\ =&\ \frac{1}{2}\left(\sin x-\cos x\right)+\frac{\sqrt{2}}{4}\left(\tanh^{-1}\left(\sqrt{2}\cos x\right)-\tanh^{-1}\left(\sqrt{2}\sin x\right)\right)-c
\end{align*}
```
