---
topic: integrals
title: relinquish
desc: 
date: 2025 March 20
tags:
  - frac
  - exp
  - infinite
methods:
  - sub
---


## Question
```math
\int
  \frac{1}{
    e^x + \frac{1}{
      e^x + ...
    }
  }
\ dx
```


## Hints

### 1
You’ll need a substitution for this.

### 2
You will need to <em>solve</em> the substitution.

### 3
Let $y$ denote the integrand.

### 4
What does the integrand contain?

### 5
Another one of itself!

### 6
Use the relationship $y = \frac{1}{e^x+y}$.

### 7
Find an(other) expression for $y$ in terms of only $x$.


## Answer
```math
-\frac{1}{2}e^{x}+\frac{1}{2}\sqrt{4+e^{2x}}-\tanh^{-1}\left(\frac{1}{2}\sqrt{4+e^{2x}}\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  y &= \frac{1}{e^{x}+\frac{1}{e^{x}+...}}
  \\ y &= \frac{1}{e^{x}+y}
  \\ y\left(e^{x}+y\right) &= 1
  \\ ye^{x}+y^{2} &= 1
  \\ \left(y+\frac{1}{2}e^{x}\right)^{2}-\left(\frac{1}{2}e^{x}\right)^{2} &= 1
  \\ \left(y+\frac{1}{2}e^{x}\right)^{2} &= 1+\frac{1}{4}e^{2x}
  \\ y+\frac{1}{2}e^{x} &= \sqrt{1+\frac{1}{4}e^{2x}}
  \\ y &= -\frac{1}{2}e^{x}+\sqrt{1+\frac{1}{4}e^{2x}}
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  \int \frac{1}{e^{x}+\frac{1}{e^{x}+...}}\ dx
    &= \int y\ dx
  \\ &= \int -\frac{1}{2}e^{x}+\sqrt{1+\frac{1}{4}e^{2x}}\ dx
  \\ &= -\frac{1}{2}\int e^{x}\ dx+\frac{1}{2}\int \sqrt{4+e^{2x}}\ dx
  \\ &= -\frac{1}{2}e^{x}+\frac{1}{2}\int \sqrt{4+e^{2x}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \sqrt{4+e^{2x}} &= t
  \\ 4+e^{2x} &= t^{2}
  \\ e^{2x} &= t^{2}-4
  \\ 2x &= \ln\left(t^{2}-4\right)
  \\ x &= \frac{1}{2}\ln\left(t^{2}-4\right)
  \\ dx &= \frac{1}{2}\cdot\frac{1}{t^{2}-4}\cdot2t
  \\ &= \frac{t}{t^{2}-4}
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= -\frac{1}{2}e^{x}+\frac{1}{2}\int t\cdot\frac{t}{t^{2}-4}\ dt
  \\ &= -\frac{1}{2}e^{x}+\frac{1}{2}\int \frac{t^{2}-4+4}{t^{2}-4}\ dt
  \\ &= -\frac{1}{2}e^{x}+\frac{1}{2}\int 1+\frac{4}{t^{2}-4}\ dt
  \\ &= -\frac{1}{2}e^{x}+\frac{1}{2}t-2\int \frac{1}{4-t^{2}}\ dt
  \\ &= -\frac{1}{2}e^{x}+\frac{1}{2}t-2\cdot\frac{1}{\sqrt{4}}\tanh^{-1}\left(\frac{1}{\sqrt{4}}t\right)
  \\ &= -\frac{1}{2}e^{x}+\frac{1}{2}t-\tanh^{-1}\left(\frac{1}{2}t\right)
  \\ &= -\frac{1}{2}e^{x}+\frac{1}{2}\sqrt{4+e^{2x}}-\tanh^{-1}\left(\frac{1}{2}\sqrt{4+e^{2x}}\right)-c
\end{align*}
```
