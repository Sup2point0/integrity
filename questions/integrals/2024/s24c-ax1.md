---
topic: integrals
title: probably
desc: 
date: 2024 November
tags:
  - dread
 - inverse trig
methods:
  - sub
  - parts
---


## Question
```math
\int \frac{\sin^{-1}x}{x^{2}}\ dx
```


## Hints

### 1
How would you get rid of $\sin^{-1}(x)$?

### 2
Substitute!

### 3
How else can you write $\frac{\cos{t}}{\sin^2{t}}$?

### 4
Split it as $\frac{1}{\sin{x}} \cdot \frac{\cos{x}}{\sin{x}}$.


## Answer
```math
-\frac{\sin^{-1}x}{x}+\ln\left(\frac{1-\sqrt{1-x^{2}}}{x}\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  \sin^{-1}x &= t
  \\ x &= \sin t
  \\ dx &= \cos t\ dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ \int \frac{\sin^{-1}x}{x^{2}}\ dx
  \\ =&\ \int \frac{t}{\sin^{2}t}\cdot\cos t\ dt
  \\ =&\ \int t\csc t\cot t\ dt
  \\ =&\ -\int t\cdot-\csc t\cot t\ dt
\end{align*}
```

### Parts
```math
\begin{align*}
      f &= t \quad&\quad g' &= -\csc t\cot t
  \\ f' &= 1 \quad&\quad g &= \csc t
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &\ -\left(fg-\int f'g\ dt\right)
  \\ =&\ -\left(t\csc t-\int \csc t\ dt\right)
  \\ =&\ -t\csc t+\ln\left(\csc t-\cot t\right)
  \\ =&\ -\frac{t}{\sin t}+\ln\left(\frac{1-\cos t}{\sin t}\right)
  \\ =&\ -\frac{\sin^{-1}x}{x}+\ln\left(\frac{1-\sqrt{1-x^{2}}}{x}\right)-c
\end{align*}
```
