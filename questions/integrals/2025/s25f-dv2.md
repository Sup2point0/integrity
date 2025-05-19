---
topic: integrals
title: sentimental showerthoughts
desc: 
date: 2025 May 18
tags:
  - scare
  - exp
methods:
  - spot
  - arcprod
---


## Question
```math
\int
  2e^{x^2} -
  \frac
    { e^{x^2} }
    { x^2 }
\ dx
```


## Hints

### 1
Splitting the integral will make your life more painful.

### 2
That should tell you about what rule to apply here.

### 3
$\displaystyle \frac{x}{x}$ cancels out to $1$.


## Answer
```math
\frac{e^{x^{2}}}{x}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int 2e^{x^{2}}-\frac{e^{x^{2}}}{x^{2}}\ dx
  \\ =&\ \int \frac{2x^{2}e^{x^{2}}-e^{x^{2}}}{x^{2}}\ dx
\end{align*}
```

### Inverse Quotient Rule
```math
\begin{align*}
  \frac{d}{dx}\frac{e^{x^{2}}}{x}
    &= \frac{x\cdot2xe^{x^{2}}-e^{x^{2}}}{x^{2}}
  \\ &= \frac{2xe^{x^{2}}-e^{x^{2}}}{x^{2}}
  \\ \Rightarrow \int \frac{2x^{2}e^{x^{2}}-e^{x^{2}}}{x^{2}}\ dx
    &= \frac{e^{x^{2}}}{x}-c
\end{align*}
```


## Alternates

```math
\begin{align*}
  &\ \int 2e^{x^{2}}-\frac{e^{x^{2}}}{x^{2}}\ dx
  \\ =&\ \int 2xe^{x^{2}}\cdot\frac{1}{x}+e^{x^{2}}\cdot-\frac{1}{x^{2}}\ dx
\end{align*}
```

We could also spot this as inverse product rule.

```math
\frac{d}{dx}\left(e^{x^{2}}\cdot\frac{1}{x}\right)=2xe^{x^{2}}\cdot\frac{1}{x}+e^{x^{2}}\cdot-\frac{1}{x^{2}}
```

Hence

```math
\begin{align*}
  \int 2xe^{x^{2}}\cdot\frac{1}{x}+e^{x^{2}}\cdot-\frac{1}{x^{2}}\ dx
    &= e^{x^{2}}\cdot\frac{1}{x}
  \\ &= \frac{e^{x^{2}}}{x}-c
\end{align*}
```
