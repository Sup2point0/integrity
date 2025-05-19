---
topic: integrals
title: ELECTRO:CONNECTION
desc: 
date: 2025 May 15
tags:
  - dread
  - trig
  - ln
methods:
  - spot
  - sub
---


## Question
```math
\int \frac{1}{x\left(\ln x\right)^{2}}\left(\frac{x\left(\ln x\right)\left(\sec x\right)+1}{\sec x+\tan x}\right)\ dx
```


## Hints

### 1
The derivative of $(\sec{x} + \tan{x})$ contains itself.

### 2
What does the $\displaystyle \frac{1}{x}$ imply?

### 3
$\displaystyle \frac{1}{x}$ suggests you’ll be differentiating $\ln(x)$ at some point (otherwise the integral would be unsolvable).

### 4
Multiply through by $(\sec{x} + \tan{x})$.


## Answer
```math
-\frac{1}{\left(\ln x\right)\left(\sec x+\tan x\right)}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{1}{x\left(\ln x\right)^{2}}\left(\frac{x\left(\ln x\right)\left(\sec x\right)+1}{\sec x+\tan x}\right)\ dx
  \\ =&\ \int \frac{\left(\ln x\right)\left(\sec x\right)+\frac{1}{x}}{\left(\ln x\right)\left(\ln x\right)\left(\sec x+\tan x\right)}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \textcolor{#4d9dcd}{\left(\ln x\right)\left(\sec x+\tan x\right)} &= t
  \\ \left(\frac{1}{x}\left(\sec x+\tan x\right)+\left(\ln x\right)\left(\sec^{2}x+\sec x\tan x\right)\right)\ dx &= dt
  \\ \left(\sec x+\tan x\right)\left(\frac{1}{x}+\left(\ln x\right)\left(\sec x\right)\right)\ dx &= dt
  \\ \left(\textcolor{#f07d1c}{\left(\ln x\right)\left(\sec x\right)+\frac{1}{x}}\right)\ dx &= \frac{1}{\sec x+\tan x}\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{\textcolor{#f07d1c}{\left(\ln x\right)\left(\sec x\right)+\frac{1}{x}}}{\left(\ln x\right)\textcolor{#4d9dcd}{\left(\ln x\right)\left(\sec x+\tan x\right)}}\ dx
  \\ =&\ \int \frac{1}{\left(\ln x\right)\left(t\right)}\cdot\frac{1}{\sec x+\tan x}\ dt
  \\ =&\ \int \frac{1}{t}\cdot\frac{1}{\left(\ln x\right)\left(\sec x+\tan x\right)}\ dt
  \\ =&\ \int \frac{1}{t}\cdot\frac{1}{t}\ dt
  \\ =&\ \int \frac{1}{t^{2}}\ dt
  \\ =&\ -\frac{1}{t}
  \\ =&\ -\frac{1}{\left(\ln x\right)\left(\sec x+\tan x\right)}-c
\end{align*}
```
