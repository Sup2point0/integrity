---
topic: integrals
title: you can’t integrate like this
desc: please use the intended method hehe
date: 2025 June 11
tags:
  - exp
  - trig
methods:
  - parts
flags:
  - feat
---


## Question
```math
\int
  \left( \sin{x} \right)^3 e^{-\cos{x}}
\ dx
```


## Hints

### 1
Parts.

### 2
Parts!

### 3
Parts!!!


## Answer
```math
-e^{-\cos x}\left(\cos x+1\right)^{2}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \left(\sin x\right)^{3}e^{-\cos x}\ dx
  \\ =&\ \int \left(\sin x\right)^{2}\left(\sin x\right)e^{-\cos x}\ dx
\end{align*}
```

### Parts (1)
```math
\begin{align*}
      f &= \left(\sin x\right)^{2} \quad&\quad g' &= \left(\sin x\right)e^{-\cos x}
  \\ f' &= 2\sin x\cos x \quad&\quad g &= e^{-\cos x}
\end{align*}
```

### Simplify
```math
\begin{align*}
  &\ fg-\int f'g\ dx
  \\ =&\ \left(\sin x\right)^{2}e^{-\cos x}-\int 2\left(\sin x\right)\left(\cos x\right)e^{-\cos x}\ dx
  \\ =&\ \left(\sin x\right)^{2}e^{-\cos x}-2\int \left(\cos x\right)\left(\sin x\right)e^{-\cos x}\ dx
\end{align*}
```

### Parts (2)
```math
\begin{align*}
      p &= \cos x \quad&\quad q' &= \left(\sin x\right)e^{-\cos x}
  \\ p' &= -\sin x \quad&\quad q &= e^{-\cos x}
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \left(\sin x\right)^{2}e^{-\cos x}-2\left(pq-\int p'q\ dx\right)
  \\ &= \left(\sin x\right)^{2}e^{-\cos x}-2\left(\left(\cos x\right)e^{-\cos x}-\int \left(-\sin x\right)e^{-\cos x}\ dx\right)
  \\ &= \left(\sin x\right)^{2}e^{-\cos x}-2\left(\cos x\right)e^{-\cos x}-2\int \left(\sin x\right)e^{-\cos x}\ dx
  \\ &= \left(\sin x\right)^{2}e^{-\cos x}-2\left(\cos x\right)e^{-\cos x}-2e^{-\cos x}-c
  \\ &= e^{-\cos x}\left[1-\cos^{2}x-2\cos x-2\right]-c
  \\ &= -e^{-\cos x}\left[\cos^{2}x+2\cos x+1\right]-c
  \\ &= -e^{-\cos x}\left(\cos x+1\right)^{2}-c
\end{align*}
```


## Alternates

The repeated parts is way cooler, but you can also substitute at the start.

```math
\begin{align*}
  &\ \int \left(\sin x\right)^{3}e^{-\cos x}\ dx
  \\ =&\ \int \left(\sin x\right)\left(1-\cos^{2}x\right)e^{-\cos x}\ dx
  \\ =&\ \int \left(\sin x\right)\left(1-\left(-\cos x\right)^{2}\right)e^{-\cos x}\ dx
\end{align*}
```

Substitute:

```math
\begin{align*}
  -\cos x &= t
  \\ \sin x\ dx &= dt
\end{align*}
```

Which gives:

```math
\begin{align*}
  &= \int \left(1-t^{2}\right)e^{t}\ dt
  \\ &= \left(1-t^{2}\right)e^{t}-\int -2te^{t}\ dt
  \\ &= \left(1-t^{2}\right)e^{t}+2\int te^{t}\ dt
  \\ &= \left(1-t^{2}\right)e^{t}+2e^{t}\left(t-1\right)
  \\ &= e^{t}\left[1-t^{2}+2\left(t-1\right)\right]
  \\ &= e^{t}\left[1-t^{2}+2t-2\right]
  \\ &= -e^{t}\left[t^{2}-2t+1\right]
  \\ &= -e^{t}\left(t-1\right)^{2}
  \\ &= -e^{-\cos x}\left(\cos x+1\right)^{2}-c
\end{align*}
```
