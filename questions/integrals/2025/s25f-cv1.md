---
topic: integrals
title: Integrity’s Finest
desc: 
date: 2025 March 8
difficulty: incline
tags:
  - arctrig
methods:
  - spot
---


## Question
```math
\int \frac{\cos^{-1}x}{\sqrt{1-x^{2}}}-\frac{\sin^{-1}x}{\sqrt{1-x^{2}}}\ dx
```


## Hints

### 1
What’s the derivative of $\sin^{-1}{x}$?

### 2
What’s the derivative of $\cos^{-1}{x}$?


## Answer
```math
\sin^{-1}x\cos^{-1}x-c
```


## Solution

### Inverse Product Rule
```math
\begin{align*}
  \frac{d}{dx}\left(\sin^{-1}x\right) &= \frac{1}{\sqrt{1-x^{2}}}
  \\ \frac{d}{dx}\left(\cos^{-1}x\right) &= -\frac{1}{\sqrt{1-x^{2}}}
  \\ \frac{d}{dx}\left(\sin^{-1}x\cos^{-1}x\right) &= \frac{\cos^{-1}}{\sqrt{1-x^{2}}}-\frac{\sin^{-1}}{\sqrt{1-x^{2}}}
\end{align*}
```

Hence

```math
\int \frac{\cos^{-1}}{\sqrt{1-x^{2}}}-\frac{\sin^{-1}}{\sqrt{1-x^{2}}}\ dx=\sin^{-1}x\cos^{-1}x-c
```
