---
topic: integrals
title: inductive hypothesis
desc: 
date: 2025 May 12
tags:
  - definite
  - scare
  - trig
  - elite
methods:
  - spot
---


## Question
```math
\int_{-\pi/4}^{\pi/4}
  \left(
    \prod_{n=1}^{
      \operatorname{round}(10^7 \pi)
    } \frac
      { d^n }
      { dx^n }
    \, x \tan{x}
  \right)
\ dx
```


## Hints

### 1
Yes, it’s odd. How do you prove that?

### 2
Consider the parities of the derivatives.

### 3
Consider how you could show the parity of the product.


## Answer
$0$


## Solution

### Parity of Differentiation
We can show the derivative of an odd function is even:

```math
\begin{align*}
  f\left(x\right) &= -f\left(-x\right)
  \\ f'\left(x\right) &= -f'\left(-x\right)\cdot-1
  \\ f'\left(x\right) &= f'\left(-x\right)
\end{align*}
```

And we can show the derivative of an even function is odd:

```math
\begin{align*}
  g\left(x\right) &= g\left(-x\right)
  \\ g'\left(x\right) &= g'\left(-x\right)\cdot-1
  \\ g'\left(x\right) &= -g'\left(-x\right)
\end{align*}
```

Since $\tan(x)$ is odd, this means its first derivative is even, its second derivative is odd, and so on – the parity will alternate with each derivative we take. If $n$ is even, then the $n$-th derivative is odd, and vice versa.

### Parity of Multiplication
Multiplying an odd and even function produces an odd function:

```math
\begin{align*}
  p\left(x\right) &= f\left(x\right)g\left(x\right)
  \\ p\left(-x\right) &= f\left(-x\right)g\left(-x\right)
  \\   &= -f\left(x\right)g\left(x\right)
  \\ p\left(x\right) &= -p\left(-x\right)
\end{align*}
```

Multiplying 2 odd functions produces an even function:

```math
\begin{align*}
  q\left(x\right) &= f\left(x\right)f\left(x\right)
  \\ q\left(-x\right) &= f\left(-x\right)f\left(-x\right)
  \\   &= \left(-f\left(x\right)\right)\left(-f\left(x\right)\right)
  \\   &= f\left(x\right)f\left(x\right)
  \\ q\left(x\right) &= q\left(-x\right)
\end{align*}
```

### Solve
The bounds of the integral are symmetric, meaning if the integrand is odd, then the areas will cancel. Yes, you can probably guess that they do – but how do we prove that?

Consider how many terms the product has:

```math
\begin{align*}
  \operatorname{round}\left(10^{7}\pi\right) &= \operatorname{round}\left(3.14159265...\times10^{7}\right)
  \\   &= \operatorname{round}\left(31415926.5...\right)
  \\   &= 31415927
\end{align*}
```

Since this is odd, the $31415927$-th derivative is even. So our product of derivatives starts and ends with even functions:

```math
\text{even} \times \text{odd} \times \text{even} \times...\times \text{even} \times \text{odd} \times \text{even}
```

Taking off 1 even at the end, this means half of the derivatives are odd:

```math
\frac{31415927-1}{2} = 15707963
```

Remember that multiplying 2 odd functions produces an even function, so $15707962$ of those derivatives will pair up to form even functions, leaving exactly 1 leftover odd derivative. (In other words, multiplying an odd number of functions produces an odd function.)

This means our overall integrand is indeed odd. Finally for a domain check, $\displaystyle \left[ \frac{-\pi}{4}, \frac{\pi}{4} \right]$ is well within $\displaystyle \left( \frac{-\pi}{2}, \frac{\pi}{2} \right)$, so $\tan(x)$ and its derivatives will all be defined and continuous. Hence our positive and negative areas cancel out to give $0$.
