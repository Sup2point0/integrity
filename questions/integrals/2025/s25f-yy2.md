---
topic: integrals
title: PSYCHO+CONNECTION
desc: 
date: 2025 May 16
difficulty: chaos
tags:
  - horror
  - dread
  - elite
  - exp
  - ln
  - hyp trig
methods:
  - tough
  - spot
---


## Question
```math
\int
  \frac
    {
      ( 1 - x \operatorname{sech}{x})(\operatorname{sech}{x}) -
      ( 1 + x \operatorname{sech}{x})(\tanh{x})
    }
    {
      x \mathstrut^{
        \frac{x}{\ln{x}}
        \left( \operatorname{sech}{x} - \tanh{x} \right)
      }
    }
\ dx
```


## Hints

### 1
In the denominator, what happens if you move the base of $x$ into the power?

### 2
What might you substitute?

### 3
The exponent of $e$ would probably be a stellar choice.


## Answer
```math
-e^{-x\left(\operatorname{sech}x-\tanh x\right)}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\left(1-x\operatorname{sech}x\right)\left(\operatorname{sech}x\right)-\left(1+x\operatorname{sech}x\right)\left(\tanh x\right)}{x^{\frac{x}{\ln x}\left(\operatorname{sech}x-\tanh x\right)}}\ dx
  \\ =&\ \int \frac{\left(1-x\operatorname{sech}x\right)\left(\operatorname{sech}x\right)-\left(1+x\operatorname{sech}x\right)\left(\tanh x\right)}{e^{\left(\ln x\right)\frac{x}{\ln x}\left(\operatorname{sech}x-\tanh x\right)}}\ dx
  \\ =&\ \int \frac{\left(1-x\operatorname{sech}x\right)\left(\operatorname{sech}x\right)-\left(1+x\operatorname{sech}x\right)\left(\tanh x\right)}{e^{x\left(\operatorname{sech}x-\tanh x\right)}}\ dx
  \\ =&\ \int \frac{\left(\operatorname{sech}x-x\operatorname{sech}^{2}x\right)-\left(\tanh x+x\operatorname{sech}x\tanh x\right)}{e^{x\left(\operatorname{sech}x-\tanh x\right)}}\ dx
  \\ =&\ \int \frac{\operatorname{sech}x-x\operatorname{sech}^{2}x-\tanh x-x\operatorname{sech}x\tanh x}{e^{x\left(\operatorname{sech}x-\tanh x\right)}}\ dx
  \\ =&\ \int \frac{\left(\operatorname{sech}x-\tanh x\right)+x\left(-\operatorname{sech}x\tanh x-\operatorname{sech}^{2}x\right)}{e^{x\left(\operatorname{sech}x-\tanh x\right)}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  x\left(\operatorname{sech}x-\tanh x\right) &= t
  \\ \left(\operatorname{sech}x-\tanh x\right)+x\left(-\operatorname{sech}x\tanh x-\operatorname{sech}^{2}x\right)\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{1}{e^{t}}\ dt
  \\ &= -e^{-t}
  \\ &= -e^{-x\left(\operatorname{sech}x-\tanh x\right)}-c
\end{align*}
```
