---
topic: graph-drawing
title: trololol
desc: 
date: 2024
tags:
  - ln
methods:
  - chain
graph-bounds:
  left: -2
  right: 8
  bottom: -5
  top: 5
---


## Question
```math
y = \ln\left(\ln x\right)
```


## Options
```desmos
\ln\left(\ln x\right)
\ln\left(x\right)\ln\left(x\right)
x\ln x
\ln\left(\ln\left(\ln x\right)\right)
```


## Hints

### 1

### 2

### 3


## Solution

Start by considering $y = \ln(x)$ as a baseline.

```desmos
y = \ln\left(x\right)
```

The input to this is $x$, which grows linearly, but now we’re going to feed it $\ln{x}$, which will act as a ‘shaping’ function.

$\ln(x)$ must have a positive input, so for $\ln(\ln{x})$ to be defined we require $0 < \ln{x}$. This is true when $x > 1$, so the domain of our graph is $1 < x$.

```desmos
y = \ln{x}
x \leq 1
```

As $x \to 1^{+}$, $\ln{x} \to 0$, so $\ln(\ln{x}) \to -\infin$. We still have an asymptote, but now at $x = 1$ instead of $x = 0$.

```desmos
\asympt : x = 1
```

For $1 < x$, notice $\ln{x}$ is a positive increasing function just like $x$. This means $\ln(\ln{x})$ will still look similar to a $\ln(x)$ curve, just with a distorted shape.

```desmos
\viewport{{ left: -2, right: 8, bottom: -2, top: 8 }} :
y = x \ \left\{ 1 < x \right\}
y = \ln{x} \ \left\{ 1 < x \right\}
```

Since $\ln{x}$ grows more slowly than $x$, we’ll be ‘tracing’ the $y$-height of the baseline $y = \ln(x)$ more slowly. In other words, the graph is being stretched in the $x$-direction. The greater $x$ gets, the slower the $\ln{x}$ grows, and so the slower $\ln(\ln{x})$ changes.

So, starting with the asymptote at $x = 1$, we’re tracing out a flatter $\ln(x)$ shape, crossing the $x$-axis at some point.

```desmos
y = \ln\left(\ln{x}\right)
```

Let’s find the exact $x$-intercept, which occurs when $y = 0$, so we’re solving for


```math
\begin{align*}
  \ln(\ln{x}) &= 0
  \\ \ln{x} &= 1
  \\ x &= e
\end{align*}
```

Which means the $x$-intercept is at $(e,\,0)$.

```desmos
y = \ln\left(\ln{x}\right)
(e,\ 0)
```
