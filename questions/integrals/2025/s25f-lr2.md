---
topic: integrals
title: fractional uncertainty
desc:  
date:  2025 June 24
difficulty: based
tags:
  - wack
  - ln
  - root
methods:
  - speed
---


## Question
```math
\int \sqrt[\ln x]{x^{2}}\ dx
```


## Hints

### 1
How else can you write $\sqrt[n]{x}$?

### 2
$\sqrt[n]{x} = x^{1/n}$.

### 3
How can you write $x^p$ as $e^q$?


## Answer
```math
e^{2}x-c\ \ \left\{0<x\right\}
```


## Solution

```math
\begin{align*}
  &\ \int \sqrt[\ln x]{x^{2}}\ dx
  \\ =&\ \int x^{\frac{2}{\ln x}}\ dx
  \\ =&\ \int e^{\left(\ln x\right)\cdot\frac{2}{\ln x}}\ dx
  \\ =&\ \int e^{2}\ dx
  \\ =&\ e^{2}x-c\ \ \left\{0<x\right\}
\end{align*}
```
