---
topic: integrals
title: abnormal
desc: 
date: 2025 January 27
tags:
  - exp
methods:
  - spot
  - draw
---


## Question
```math
\int_{-\infty}^{\infty}exe^{-x^{2}}\ dx
```


## Answer
$0$


## Solution

```math
\begin{align*}
  &\ \int_{-\infty}^{\infty}exe^{-x^{2}}\ dx
  \\ =&\ e\int_{-\infty}^{\infty}xe^{-x^{2}}\ dx
\end{align*}
```

The integrand is odd, since we have multiplied the even normal distribution $e^{-x^2}$ by the odd $x$.

The areas either side are also convergent, so they safely cancel to give $0$.
