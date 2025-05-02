---
topic: integrals
title: what is this
desc: 
date: 2025 March 25
tags:
  - dread
 - sqrt
  - exp
  - ln
methods:
  - sub
---


## Question
```math
\int \frac{\left(2x+1\right)}{\left(x+\sqrt{x}e^{-x}\right)\ln\left(1+\sqrt{x}e^{x}\right)}\ dx
```


## Hints

### 1
Sometimes, you just gotta trust the process.

### 2
Substitute!

### 3
There are 2 things you could get on the outside – the substitution, or the derivative of the substitution.


## Answer
```math
2\ln\left(\ln\left(1+\sqrt{x}e^{x}\right)\right)-c
```


## Solution

### Substitute
```math
\begin{align*}
  1+\sqrt{x}e^{x}=t
  \\ e^{x}\left(\sqrt{x}+\frac{1}{2\sqrt{x}}\right)\ dx=dt
  \\ e^{x}\left(\frac{2x+1}{2\sqrt{x}}\right)\ dx=dt
  \\ \left(2x+1\right)\ dx=\frac{2\sqrt{x}}{e^{x}}\ dt
\end{align*}
```

### Reshape
```math
\begin{align*}
  &\ \int \frac{\left(2x+1\right)}{\left(x+\sqrt{x}e^{-x}\right)\ln\left(1+\sqrt{x}e^{x}\right)}\ dx
  \\ =&\ \int \frac{1}{\left(x+\sqrt{x}e^{-x}\right)\ln t}\cdot\frac{2\sqrt{x}}{e^{x}}\ dt
  \\ =&\ 2\int \frac{\sqrt{x}}{\left(xe^{x}+\sqrt{x}\right)\ln t}\ dt
  \\ =&\ 2\int \frac{1}{\left(\sqrt{x}e^{x}+1\right)\ln t}\ dt
  \\ =&\ 2\int \frac{1}{t\ln t}\ dt
  \\ =&\ 2\ln\left(\ln t\right)
  \\ =&\ 2\ln\left(\ln\left(1+\sqrt{x}e^{x}\right)\right)-c
\end{align*}
```
