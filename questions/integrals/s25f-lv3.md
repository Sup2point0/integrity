---
topic: integrals
title: what do you mean you don’t want to integrate
desc: Happy Valentine’s day!
date: 2025 February 14
tags:
  - horror
  - frac
  - poly
  - exp
  - trig
methods:
  - sub
flags:
  - feat
---


## Question
```math
\int
  \left[
    \frac
      { 1 + x \sin{x} }
      { \cos{x} }
  \right]
  \left[

  \frac
    { x^5 \sec(x)^2 }
    { 2 \pi }
  \exp\left(
    \frac{4}{3} \pi x^3 \int_{0}^{\infin}
      \frac
        { \ln{y} }
        { 1 + y^2 }
    \ dy
  \right)
  +
  \frac
    { x^3 \sec(x)^2 }
    { \pi }
  \exp\left(
    4 \pi x^2 \int_{\infin}^{0}
      \frac
        { \ln{y} }
        { 1 + y^2 }
    \ dy
  \right)

  \right]
\ dx
```


## Hints

### 1
Take a breath.

### 2
You look beautiful today.

### 3
Start by evaluating the inner integral?


## Answer
```math
\frac{1}{12\pi}x^{4}\sec^{4}x\left(3+x^{2}\sec^{2}x\right)-c
```


## Solution

### _
Hehehehehehehehehe.

Yes.

Before we dive in, let’s analyse the structure of the integral a bit. There’s a lot of junk here, especially suspicious junk like $\pi x^3$ and $\pi x ^ 2$. There also seems to be a lot of factorising we could do with all the $x$ terms and trig functions.

The thing that probably jumps out most is the nested integral. Notice that this is a definite integral, so it’ll just collapse to a constant. Let’s start by evaluating that integral. 

### Inner Integral
```math
\int_{0}^{\infty}\frac{\ln y}{1+y^{2}}\ dy
```

Trying to evaluate this integral indefinitely doesn’t work (you can try exp or trig sub, but they won’t lead anywhere), so there must be a trick for evaluating it definitely. A common trick with definite integrals involving $\ln{x}$ is to substitute $x = 1/t$:

```math
\begin{align*}
  x &= \frac{1}{t}\ \to\ t=\frac{1}{x}
  \\ dx &= -\frac{1}{t^{2}}\ dt
\end{align*}
```

When we substitute this in (remember to change our limits), something interesting happens:

```math
\begin{align*}
  &= \int_{\infty}^{0}\frac{\ln\left(\frac{1}{t}\right)}{1+\left(\frac{1}{t}\right)^{2}}\cdot-\frac{1}{t^{2}}\ dt
  \\ &= -\int_{\infty}^{0}\frac{\ln\left(t^{-1}\right)}{1+\frac{1}{t^{2}}}\cdot\frac{1}{t^{2}}\ dt
  \\ &= -\int_{\infty}^{0}\frac{-\ln t}{t^{2}+1}\ dt
  \\ &= \int_{\infty}^{0}\frac{\ln t}{1+t^{2}}\ dt
  \\ &= -\int_{0}^{\infty}\frac{\ln t}{1+t^{2}}\ dt
\end{align*}
```

Note that the integrating variable in an integral can be anything – it doesn’t matter if it’s $x$ or $t$. So this is identical to our original integral, but negative:

```math
\begin{align*}
  \int_{0}^{\infty}\frac{\ln x}{1+x^{2}}\ dx &= -\int_{0}^{\infty}\frac{\ln t}{1+t^{2}}\ dx
  \\ I &= -I
\end{align*}
```

What does this tell us? Well, the only real number which equals itself is $0$ – hence the integral must evaluate to $0$.

```math
\int_{0}^{\infty}\frac{\ln x}{1+x^{2}}\ dx=0
```

### Product Rule
Well, this certainly simplifies things a lot. Both exponents of $e$ just collapse to $0$, giving:

```math
\int \left[\frac{\cos x+x\sin x}{\cos x}\right]\left[\frac{x^{5}\sec\left(x\right)^{6}}{2\pi}+\frac{x^{3}\sec\left(x\right)^{4}}{\pi}\right]\ dx
```

Let’s simplify the left bracket, and pull out the $\pi$ coefficients:

```math
\begin{align*}
  &= \int \left[\frac{\cos x}{\cos x}+\frac{x\sin x}{\cos x}\right]\left[\frac{x^{5}\sec\left(x\right)^{6}}{2\pi}+\frac{x^{3}\sec\left(x\right)^{4}}{\pi}\right]\ dx
  \\ &= \int \left[1+x\tan x\right]\left[\frac{x^{5}\sec\left(x\right)^{6}}{2\pi}+\frac{x^{3}\sec\left(x\right)^{4}}{\pi}\right]\ dx
  \\ &= \frac{1}{2\pi}\int \left[1+x\tan x\right]\left[x^{5}\sec\left(x\right)^{6}+2x^{3}\sec\left(x\right)^{4}\right]\ dx
\end{align*}
```

Given the prevalence of $x$ and $\sec(x)$-s, there’s a good chance we can try a substitution $x \sec{x} = t$.

```math
\begin{align*}
  x\sec x &= t
  \\ \left(\sec x+x\sec x\tan x\right)\ dx &= dt
\end{align*}
```

We can make the expression for $dt$ in our integrand by pulling out a factor of $\sec{x}$ from the right bracket:

```math
\begin{align*}
  &= \frac{1}{2\pi}\int \left[1+x\tan x\right]\left[\sec x\right]\left[x^{5}\sec\left(x\right)^{5}+2x^{3}\sec\left(x\right)^{3}\right]\ dx
  \\ &= \frac{1}{2\pi}\int \left[\sec x+x\sec x\tan x\right]\left[x^{5}\sec\left(x\right)^{5}+2x^{3}\sec\left(x\right)^{3}\right]\ dx
\end{align*}
```

And would you look at that, the powers of $x$ and $\sec{x}$ match up perfectly. So, making our substitution:

```math
\begin{align*}
  &= \frac{1}{2\pi}\int \left[x^{5}\sec\left(x\right)^{5}+2x^{3}\sec\left(x\right)^{3}\right]\ dt
  \\ &= \frac{1}{2\pi}\int \left[\left(x\sec x\right)^{5}+2\left(x\sec x\right)^{3}\right]\ dt
  \\ &= \frac{1}{2\pi}\int t^{5}+2t^{3}\ dt
\end{align*}
```

Home straight from here.

### Solve
```math
\begin{align*}
  &\ \frac{1}{2\pi}\int t^{5}+2t^{3}\ dt
  \\ =&\ \frac{1}{2\pi}\left(\frac{1}{6}t^{6}+\frac{1}{2}t^{4}\right)
  \\ =&\ \frac{1}{12\pi}t^{4}\left(t^{2}+3\right)
  \\ =&\ \frac{1}{12\pi}\left(x\sec x\right)^{4}\left(\left(x\sec x\right)^{2}+3\right)
  \\ =&\ \frac{1}{12\pi}x^{4}\sec^{4}x\left(3+x^{2}\sec^{2}x\right)-c
\end{align*}
```
