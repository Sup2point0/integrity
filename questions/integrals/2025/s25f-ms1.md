---
topic: integrals
title: mushroom soup
desc: It’s possible, trust.
date: 2025 May 9
tags:
  - horror
  - dread
  - sqrt
  - ln
methods:
  - tough
  - sub
  - spot
flags:
  - feat
---


## Question
```math
\int \frac{1+\sqrt{\ln x}\left(x+1\right)^{2}+x\left(2\ln x+x\sqrt{\ln x}+1\right)}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}\ dx
```


## Hints

### 1
Sometimes a factorised form is giving you hints, but here it’s really not helping. Soooo... expand out ;)

### 2
Hypothesis a substitution, then look for the derivative of the substitution.

### 3
Don’t combine the denominators. But substitute 1 of them.

### 4
What’s the derivative of $\sqrt{\ln{x}}$?

### 5
The substitution you’re looking for is $\left(x + \sqrt{\ln{x}} \right) = t$.

### 6
Starts with “f” and rhymes with <em>tractorise</em>.


## Answer
```math
2\ln\left(x+\sqrt{\ln x}\right)+2\left(x+\sqrt{\ln x}\right)-c
```


## Solution

### Reshape
Start by expanding:

```math
\begin{align*}
  &\ \int \frac{1+\sqrt{\ln x}\left(x+1\right)^{2}+x\left(2\ln x+x\sqrt{\ln x}+1\right)}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}\ dx
  \\ =&\ \int \frac{1+\sqrt{\ln x}\left(x^{2}+2x+1\right)+\left(2x\ln x+x^{2}\sqrt{\ln x}+x\right)}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}\ dx
  \\ =&\ \int \frac{1+\textcolor{#4d9dcd}{x^{2}\sqrt{\ln x}}+2x\sqrt{\ln x}+\sqrt{\ln x}+2x\ln x+\textcolor{#4d9dcd}{x^{2}\sqrt{\ln x}}+x}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}\ dx
  \\ =&\ \int \frac{\textcolor{#4d9dcd}{2x^{2}\sqrt{\ln x}}+2x\sqrt{\ln x}+\sqrt{\ln x}+2x\ln x+x+1}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}\ dx
\end{align*}
```

Then split strategically:

```math
\begin{align*}
  &\ \int \frac{2x^{2}\sqrt{\ln x}+\textcolor{#4d9dcd}{2x\sqrt{\ln x}}+\textcolor{#f07d1c}{\sqrt{\ln x}}+2x\ln x+\textcolor{#f07d1c}{x}+\textcolor{#4d9dcd}{1}}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}\ dx
  \\ =&\ \int \frac{\textcolor{#4d9dcd}{2x\sqrt{\ln x}+1}}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}+\frac{2x^{2}\sqrt{\ln x}+2x\ln x}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}+\frac{\textcolor{#f07d1c}{x+\sqrt{\ln x}}}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}\ dx
  \\ =&\ \int \frac{2x\sqrt{\ln x}+1}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}+\frac{2x\sqrt{\ln x}\left(x+\sqrt{\ln x}\right)}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}+\frac{x+\sqrt{\ln x}}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}\ dx
  \\ =&\ \int \frac{2x\sqrt{\ln x}+1}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}dx+2\int dx+\int \frac{1}{x\sqrt{\ln x}}\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  \textcolor{#4d9dcd}{x+\sqrt{\ln x}} &= t
  \\ \left(1+\frac{1}{2x\sqrt{\ln x}}\right)\ dx &= dt
  \\ \left(\frac{2x\sqrt{\ln x}}{2x\sqrt{\ln x}}+\frac{1}{2x\sqrt{\ln x}}\right)\ dx &= dt
  \\ \frac{2x\sqrt{\ln x}+1}{2x\sqrt{\ln x}}\ dx &= dt
  \\ \textcolor{#f07d1c}{\frac{2x\sqrt{\ln x}+1}{x\sqrt{\ln x}}}\ dx &= 2\ dt
\end{align*}
```

### Simplify
```math
\begin{align*}
  &\ \int \frac{\textcolor{#f07d1c}{2x\sqrt{\ln x}+1}}{\left(\textcolor{#f07d1c}{x\sqrt{\ln x}}\right)\left(\textcolor{#4d9dcd}{x+\sqrt{\ln x}}\right)}dx+2\int dx+\int \frac{1}{x\sqrt{\ln x}}\ dx
  \\ =&\ \int \frac{1}{t}\cdot2\ dt+2\int dx+\int \frac{1}{x\sqrt{\ln x}}\ dx
  \\ =&\ 2\ln t+2x+\int \frac{1}{x\sqrt{\ln x}}\ dx
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  \ln x &= u
  \\ \frac{1}{x}\ dx &= du
\end{align*}
```

### Solve
```math
\begin{align*}
  &= 2\ln t+2x+\int \frac{1}{\sqrt{u}}\ du
  \\ &= 2\ln t+2x+2\sqrt{u}
  \\ &= 2\ln\left(x+\sqrt{\ln x}\right)+2\left(x+\sqrt{\ln x}\right)-c
\end{align*}
```


## Alternates

This is the original engineered solution, which consists of 1 cancel and 1 layer cake.

```math
\begin{align*}
  &\ \int \frac{1+\sqrt{\ln x}\left(x+1\right)^{2}+x\left(2\ln x+x\sqrt{\ln x}+1\right)}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}\ dx
  \\ =&\ \int \frac{1+\sqrt{\ln x}\left(x^{2}+2x+1\right)+2x\ln x+x^{2}\sqrt{\ln x}+x}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}\ dx
  \\ =&\ \int \frac{\textcolor{#4d9dcd}{1}+x^{2}\sqrt{\ln x}+\textcolor{#4d9dcd}{2x\sqrt{\ln x}}+\textcolor{#f07d1c}{\sqrt{\ln x}+2x\ln x}+x^{2}\sqrt{\ln x}+x}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}\ dx
  \\ =&\ \int \frac{\left(\textcolor{#4d9dcd}{2x\sqrt{\ln x}+1}\right)+\left(2x^{2}\sqrt{\ln x}+x\right)+\left(\textcolor{#f07d1c}{2x\ln x+\sqrt{\ln x}}\right)}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}\ dx
  \\ =&\ \int \frac{\left(2x\sqrt{\ln x}+1\right)}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}+\frac{x\left(2x\sqrt{\ln x}+1\right)+\sqrt{\ln x}\left(2x\sqrt{\ln x}+1\right)}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}\ dx
  \\ =&\ \int \frac{2x\sqrt{\ln x}+1}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}+\frac{\left(2x\sqrt{\ln x}+1\right)\left(x+\sqrt{\ln x}\right)}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}\ dx
  \\ =&\ \int \frac{2x\sqrt{\ln x}+1}{\left(x\sqrt{\ln x}\right)\left(x+\sqrt{\ln x}\right)}+\frac{\left(2x\sqrt{\ln x}+1\right)}{\left(x\sqrt{\ln x}\right)}\ dx
\end{align*}
```

Then we have

```math
\begin{align*}
  x+\sqrt{\ln x} &= t
  \\ \left(1+\frac{1}{2x\sqrt{\ln x}}\right)\ dx &= dt
  \\ \frac{2x\sqrt{\ln x}+1}{2x\sqrt{\ln x}}\ dx &= dt
  \\ \frac{2x\sqrt{\ln x}+1}{x\sqrt{\ln x}}\ dx &= 2\ dt
\end{align*}
```

Giving

```math
\begin{align*}
  &= 2\int \frac{1}{t}+1\ dt
  \\ &= 2\ln t+2t
  \\ &= 2\ln\left(x+\sqrt{\ln x}\right)+2\left(x+\sqrt{\ln x}\right)-c
\end{align*}
```
