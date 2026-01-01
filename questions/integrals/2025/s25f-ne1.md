---
topic: integrals
title: neomorphism
desc:  
date:  2025 June 24
difficulty: manifold
tags:
  - trig
methods:
  - spot
  - parts
---


## Question
```math
\int \sin\left(x\right)\cos\left(x\right)\sin\left(\cos x\right)\ dx
```


## Hints

### 1
Try bundling the expression into 2 halves.

### 2
What would you get if you differentiate $\sin(\cos{x})$?

### 3
Try integration by parts.

### 4
You can integrate $(\sin{x})\sin(\cos{x})$?


## Answer
```math
\left(\cos x\right)\cos\left(\cos x\right)-\sin\left(\cos x\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \sin\left(x\right)\cos\left(x\right)\sin\left(\cos x\right)\ dx
  \\ =&\ -\int \left(\cos x\right)\left(-\sin x\right)\sin\left(\cos x\right)\ dx
\end{align*}
```

### Parts
```math
\begin{align*}
      f &= \cos x \quad&\quad g' &= \left(-\sin x\right)\sin\left(\cos x\right)
  \\ f' &= -\sin x \quad&\quad g &= -\cos\left(\cos x\right)
\end{align*}
```

### Substitute
```math
\begin{align*}
  &\ -\left[fg-\int f'g\ dx\right]
  \\ =&\ -fg+\int f'g\ dx
  \\ =&\ -\left(\cos x\right)\left(-\cos\left(\cos x\right)\right)+\int \left(-\sin x\right)\left(-\cos\left(\cos x\right)\right)\ dx
  \\ =&\ \left(\cos x\right)\cos\left(\cos x\right)-\int \left(-\sin x\right)\cos\left(\cos x\right)\ dx
  \\ =&\ \left(\cos x\right)\cos\left(\cos x\right)-\sin\left(\cos x\right)-c
\end{align*}
```
