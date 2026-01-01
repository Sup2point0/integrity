---
topic: integrals
title: new start
desc:  
date:  2025 October 16
difficulty: incline
tags:
  - ln
methods:
  - tough
  - spot
  - arcprod
---


## Question
```math
\int \left(\ln x\right)\left(1+\frac{1}{2}\ln x\right)\ dx
```


## Hints

### 1
$(\ln{x})^2$ is quite painful to integrate.

### 2
Can you spot any relation between the 2 added terms?

### 3
Look for inverse product rule!


## Answer
```math
\frac{1}{2}x\left(\ln x\right)^{2}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \left(\ln x\right)\left(1+\frac{1}{2}\ln x\right)\ dx
  \\ =&\ \int \ln x+\frac{1}{2}\left(\ln x\right)^{2}\ dx
  \\ =&\ \frac{1}{2}\int 2\ln x+\left(\ln x\right)^{2}\ dx
  \\ =&\ \frac{1}{2}\int x\cdot\frac{2\ln x}{x}+1\cdot\left(\ln x\right)^{2}\ dx
\end{align*}
```

### Inverse Product Rule
```math
\frac{d}{dx}\left(x\left(\ln x\right)^{2}\right)
  = 1\cdot\left(\ln x\right)^{2}+x\cdot\frac{2\ln x}{x}
```

```math
\begin{align*}
  &\ \frac{1}{2}\int x\cdot\frac{2\ln x}{x}+1\cdot\left(\ln x\right)^{2}\ dx
  \\ =&\ \frac{1}{2}x\left(\ln x\right)^{2}-c
\end{align*}
```
