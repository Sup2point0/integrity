---
topic: integrals
title: blossom
desc: 
date: 2025 February 6
tags:
  - frac
  - poly
methods:
  - spot
---


## Question
```math
\int
  \left(
    \frac{1}{x} + \frac{1}{x^3}
  \right)^3
\ dx
```


## Hints

### 1
Can you factorise anything out?

### 2
Can you factorise anything out further?

### 3
What pops out on the outside?


## Answer
```math
-\frac{1}{8}\left(1+\frac{1}{x^{2}}\right)^{4}-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \left(\frac{1}{x}+\frac{1}{x^{3}}\right)^{3}\ dx
  \\ =&\ \int \left(\frac{1}{x}\left(1+\frac{1}{x^{2}}\right)\right)^{3}\ dx
  \\ =&\ \int \frac{1}{x^{3}}\left(1+\frac{1}{x^{2}}\right)^{3}\ dx
  \\ =&\ -\frac{1}{2}\int -\frac{2}{x^{3}}\left(1+\frac{1}{x^{2}}\right)^{3}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  1+\frac{1}{x^{2}} & =t
  \\ -\frac{2}{x^{3}}\ dx & =dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -\frac{1}{2}\int t^{3}\ dt
  \\ &= -\frac{1}{8}t^{4}
  \\ &= -\frac{1}{8}\left(1+\frac{1}{x^{2}}\right)^{4}-c
\end{align*}
```


## Alternates

### Trigonometric Substitution

```math
\begin{align*}
  &\ \int \left(\frac{1}{x}+\frac{1}{x^{3}}\right)^{3}\ dx
  \\ =&\ \int \left(\frac{x^{2}+1}{x^{3}}\right)^{3}\ dx
\end{align*}
```

Sometimes, this can be less hassle.

```math
\begin{align*}
  x &= \tan{t}
  \\ dx &= \sec^2{t} \ dt
\end{align*}
```

Here, not so much.

```math
\begin{align*}
  &= \int \left(\frac{\tan^{2}t+1}{\tan^{3}t}\right)^{3}\cdot\sec^{2}t\ dt
  \\ &= \int \left(\frac{\sec^{2}t}{\tan^{3}t}\right)^{3}\cdot\sec^{2}t\ dt
  \\ &= \int \left(\frac{1}{\cos^{2}t}\cdot\frac{\cos^{3}t}{\sin^{3}t}\right)^{3}\cdot\frac{1}{\cos^{2}t}\ dt
  \\ &= \int \frac{\cos^{3}t}{\sin^{9}t}\cdot\frac{1}{\cos^{2}t}dt
  \\ &= \int \frac{\cos t}{\sin^{9}t}\ dt
  \\ &= \int \cot t\csc^{8}t\ dt
  \\ &= -\int \left(-\csc t\cot t\right)\left(\csc t\right)^{7}\ dt
\end{align*}
```

Inverse chain rule:

```math
\begin{align*}
  \csc{t} &= v
  \\ -\csc{t} \cot{t} \ dt &= dv
\end{align*}
```

Finally:

```math
\begin{align*}
  &= -\int v^{7}\ dv
  \\ &= -\frac{1}{8}v^{8}
  \\ &= -\frac{1}{8}\left(\csc t\right)^{8}
  \\ &= -\frac{1}{8}\left(\frac{\sqrt{x^{2}+1}}{x}\right)^{8}
  \\ &= -\frac{1}{8}\left(\frac{x^{2}+1}{x^{2}}\right)^{4}
  \\ &= -\frac{1}{8}\left(1+\frac{1}{x^{2}}\right)^{4}-c
\end{align*}
```
