---
topic: integrals
title: kōgeki
desc: 
date: 2025 June 7
difficulty: incline
tags:
  - poly
  - sqrt
methods:
  - spot
---


## Question
```math
\int
  \frac
    { x }
    { x^2 + 2x\sqrt{2+\sqrt{3}}+ 2\sqrt{3} }
\ dx
```


## Hints

### 1
It may help to un-surdify $2\sqrt{3}$.

### 2
You can express $\sqrt{2 + \sqrt{3}}$ as a sum of 2 individual surds.

### 3
Complete the square on $\sqrt{2 + \sqrt{3}}$.

### 4
Starts with “f” and rhymes with *tractorise*.


## Answer
```math
\left(\frac{\sqrt{2}}{\sqrt{2}-\sqrt{6}}\right)\ln\left(x+\sqrt{2}\right)+\left(\frac{\sqrt{6}}{\sqrt{6}-\sqrt{2}}\right)\ln\left(x+\sqrt{6}\right)-c
```


## Solution

### Factorise
```math
\begin{align*}
  &\ x^{2}+2x\sqrt{2+\sqrt{3}}+2\sqrt{3}
  \\ =&\ x^{2}+2x\sqrt{\left(2+\sqrt{3}\right)\cdot\frac{2}{2}}+2\sqrt{3}
  \\ =&\ x^{2}+2x\sqrt{\frac{3+2\sqrt{3}+1}{2}}+2\sqrt{3}
  \\ =&\ x^{2}+x\frac{2}{\sqrt{2}}\sqrt{\left(\sqrt{3}+1\right)^{2}}+2\sqrt{3}
  \\ =&\ x^{2}+x\sqrt{2}\left(\sqrt{3}+1\right)+\sqrt{12}
  \\ =&\ x^{2}+x\left(\sqrt{6}+\sqrt{2}\right)+\sqrt{6}\sqrt{2}
  \\ =&\ \left(x+\sqrt{2}\right)\left(x+\sqrt{6}\right)
\end{align*}
```

### Reshape
```math
\begin{align*}
  &\ \int \frac{x}{x^{2}+2x\sqrt{2+\sqrt{3}}+2\sqrt{3}}\ dx
  \\ =&\ \int \frac{x}{\left(x+\sqrt{2}\right)\left(x+\sqrt{6}\right)}\ dx
\end{align*}
```

### Partial Fractions
```math
\begin{align*}
  \frac{x}{\left(x+\sqrt{2}\right)\left(x+\sqrt{6}\right)} &= \frac{p}{x+\sqrt{2}}+\frac{q}{x+\sqrt{6}}
  \\ x &= p\left(x+\sqrt{6}\right)+q\left(x+\sqrt{2}\right)
\end{align*}
```

Let $x = -\sqrt{2}$:

```math
\begin{align*}
  -\sqrt{2} &= p\left(-\sqrt{2}+\sqrt{6}\right)+0
  \\ p &= \frac{\sqrt{2}}{\sqrt{2}-\sqrt{6}}
\end{align*}
```

Let $x = -\sqrt{6}$:

```math
\begin{align*}
  -\sqrt{6} &= 0+q\left(-\sqrt{6}+\sqrt{2}\right)
  \\ q &= \frac{\sqrt{6}}{\sqrt{6}-\sqrt{2}}
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{x}{\left(x+\sqrt{2}\right)\left(x+\sqrt{6}\right)}\ dx
  \\ =&\ \int \left(\frac{\sqrt{2}}{\sqrt{2}-\sqrt{6}}\right)\frac{1}{x+\sqrt{2}}+\left(\frac{\sqrt{6}}{\sqrt{6}-\sqrt{2}}\right)\frac{1}{x+\sqrt{6}}\ dx
  \\ =&\ \left(\frac{\sqrt{2}}{\sqrt{2}-\sqrt{6}}\right)\ln\left(x+\sqrt{2}\right)+\left(\frac{\sqrt{6}}{\sqrt{6}-\sqrt{2}}\right)\ln\left(x+\sqrt{6}\right)-c
\end{align*}
```
