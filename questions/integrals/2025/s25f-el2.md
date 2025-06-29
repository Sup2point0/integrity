---
topic: integrals
title: meet and keet
desc: 
date: 2025 April 29
tags:
  - wack
methods:
  - fun
flags:
  - guide
---


## Question
```math
\int
  \max(3, x)
\ dx
```


## Hints

### 1
Think about how you would integrate $\max(0, x)$.

### 2
Applying translations may help.

### 3
$\max(0, x)$ is $0$ on the left. So is its integral!

### 4
You can avoid anything piecewise with a little leverage of $\max(0, x)$.


## Answer
```math
3x+\frac{1}{2}\max\left(0,\ x-3\right)^{2}-c
```


## Solution

The graph of the integrand looks like this:

```desmos
\max\left(3,\ x\right)
```

So the area grows linearly until $x = 3$, then quadratically for $x > 3$. If we split the graph into a rectangle and a triangle, then it looks like a translated activation function (ReLU) added to a constant:

```desmos
f\left(x\right)=3
g\left(x\right)=\max\left(0,\ x\right)
f\left(x\right)+g\left(x-3\right)
```

Hence

```math
\begin{align*}
  &\ \int_{\ }^{\ }\max\left(3,\ x\right)\ dx
  \\ =&\ \int_{\ }^{\ }3+\max\left(0,\ x-3\right)\ dx
  \\ =&\ 3\int_{\ }^{\ }dx+\int_{\ }^{\ }\max\left(0,\ x-3\right)\ dx
\end{align*}
```

Integrating the ReLU becomes essentially another activation – on the left it’s $0$, on the right it’s a quadratic. We can achieve this by feeding the ReLU itself to the quadratic.

```math
= 3x+\frac{1}{2}\max\left(0,\ x-3\right)^{2}-c
```
