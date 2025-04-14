---
topic: integrals
title: luck of the draw
desc: 
date: 2025 March 27
tags:
  - scare
  - frac
  - trig
methods:
  - spot
---


## Question
```math
\int
  \frac
    { \cot^2{x} + \csc{x} \cot{x} - \csc^2{x} + 1 }
    { \cot^2{x} - \tan^2{x} + \sec^2{x} + 1 }
\ dx
```


## Hints

### 1
You’ll need to selectively simplify here.

### 2
You’ll also need a substitution later on.

### 3
What looks the most like a derivative here?

### 4
Even if multiple things look like a derivative, one of them might be more difficult to simplify.

### 5
$\csc(x)\cot(x)$ is the one you’re looking for.


## Answer
```math
-\tan^{-1}\left(\csc x\right)-c
```


## Solution

### Trig Identities
```math
\begin{align*}
  &\ \int \frac{\cot^{2}x+\csc x\cot x-\csc^{2}x+1}{\cot^{2}x-\tan^{2}x+\sec^{2}x+1}\ dx
  \\ =&\ \int \frac{\left(\cot^{2}x-\csc^{2}x\right)+\csc x\cot x+1}{\left(\sec^{2}x-\tan^{2}x\right)+\left(\cot^{2}x+1\right)}\ dx
  \\ =&\ \int \frac{\left(-1\right)+\csc x\cot x+1}{1+\csc^{2}x}\ dx
  \\ =&\ \int \frac{\csc x\cot x}{\csc^{2}x+1}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \csc x &= t
  \\ -\csc x\cot x\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -\int \frac{1}{t^{2}+1}\ dt
  \\ &= -\tan^{-1}t
  \\ &= -\tan^{-1}\left(\csc x\right)-c
\end{align*}
```
