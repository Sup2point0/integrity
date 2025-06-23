---
topic: integrals
title: mash equilibrium
desc: This is the first lost integral on Integrity. The original integral was erased due to a faulty document save, and is now lost in the dreamscape...
date: 2025 June 9
tags:
  - sqrt
  - trig
  - ln
methods:
  - 
---


## Question
```math
\int
  \frac
    {
  \left(
    \cos \sqrt[3]{x} 
  \right)
  \ln\left(
    \cos \sqrt[3]{x}
  \right)
    }
    { x^{2/3} }
\ dx
```


## Hints

### 1
Start by substituting.

### 2
You know how to differentiate $\ln(x)$.

### 3
$\cos(t)$ is easily integrated.


## Answer
```math
3\left(\sin\sqrt[3]{x}\right)\ln\left(\cos\sqrt[3]{x}\right)+3\ln\left(\sec\sqrt[3]{x}+\tan\sqrt[3]{x}\right)-3\sin\sqrt[3]{x}-c
```


## Solution

### Substitute
```math
\begin{align*}
  x^{1/3}=t
  \\ x=t^{3}
  \\ dx=3t^{2}\ dt
\end{align*}
```

### Simplify
```math
\begin{align*}
  &\ \int \frac{\left(\cos\sqrt[3]{x}\right)\ln\left(\cos\sqrt[3]{x}\right)}{x^{2/3}}\ dx
  \\ =&\ \int \frac{\left(\cos t\right)\ln\left(\cos t\right)}{t^{2}}\cdot3t^{2}\ dt
  \\ =&\ 3\int \left(\cos t\right)\ln\left(\cos t\right)\ dt
\end{align*}
```

### Parts
```math
\begin{align*}
      f &= \ln\left(\cos t\right) \quad&\quad g' &= \cos t
  \\ f' &= \frac{-\sin t}{\cos t} \quad&\quad g &= \sin t
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ 3\left[fg-\int f'g\ dt\right]
  \\ =&\ 3\left[\left(\sin t\right)\ln\left(\cos t\right)-\int \frac{-\sin t}{\cos t}\cdot\sin t\ dt\right]
  \\ =&\ 3\left(\sin t\right)\ln\left(\cos t\right)+3\int \frac{\sin^{2}t}{\cos t}\ dt
  \\ =&\ 3\left(\sin t\right)\ln\left(\cos t\right)+3\int \frac{1-\cos^{2}t}{\cos t}\ dt
  \\ =&\ 3\left(\sin t\right)\ln\left(\cos t\right)+3\int \sec t-\cos t\ dt
  \\ =&\ 3\left(\sin t\right)\ln\left(\cos t\right)+3\ln\left(\sec t+\tan t\right)-3\sin t
  \\ =&\ 3\left(\sin\sqrt[3]{x}\right)\ln\left(\cos\sqrt[3]{x}\right)+3\ln\left(\sec\sqrt[3]{x}+\tan\sqrt[3]{x}\right)-3\sin\sqrt[3]{x}-c
\end{align*}
```
