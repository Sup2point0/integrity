---
topic: integrals
title: intcore
desc: 
date: 2025 January 30
tags:
  - funny
methods:
  - speed
---


## Question
```math
\int
  \frac{1}{x}
  \int
    \frac{1}{x}
      \int
        \frac{1}{x}
      \ dx
  \ dx
\ dx
```


## Hints

### 1
Remember your constants!


## Answer
```math
\frac{1}{6}\left(\ln x\right)^{3}+cx-c
```


## Solution

### Solve (1)
```math
\int \frac{1}{x}\ dx = \ln x+c
```

### Solve (2)
```math
\begin{align*}
  &\ \int \frac{1}{x}\int \frac{1}{x}\ dx\ dx
  \\ =&\ \int \frac{1}{x}\left(\ln x+c_{1}\right)\ dx
  \\ =&\ \int \frac{1}{x}\ln x\ dx+c_{1}\int \frac{1}{x}\ dx
  \\ =&\ \frac{1}{2}\left(\ln x\right)^{2}+c_{1}\ln x+c_{2}
\end{align*}
```

### Solve (3)
```math
\begin{align*}
  &\ \int \frac{1}{x}\int \frac{1}{x}\int \frac{1}{x}\ dx\ dx\ dx
  \\ =&\ \int \frac{1}{x}\left(\frac{1}{2}\left(\ln x\right)^{2}+c_{1}\ln x+c_{2}\right)\ dx
  \\ =&\ \frac{1}{2}\int \frac{1}{x}\left(\ln x\right)^{2}+c_{1}\int \frac{1}{x}\ln x\ dx+c_{2}\int \frac{1}{x}\ dx
  \\ =&\ \frac{1}{6}\left(\ln x\right)^{3}+\frac{c_{1}}{2}\left(\ln x\right)^{2}+c_{2}\ln x-c_{3}
\end{align*}
```
