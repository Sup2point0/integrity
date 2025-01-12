---
topic: integrals
title: neurotic
desc: This might be my favourite integral I’ve created (yet).
date: 2025 January 9
tags:
  - horror
  - trig
  - ln
  - frac
method:
  - spot
  - sub
---


## Question
```math
\int
  \frac
    {e \sec^2{x}\sin{x}}
    {\cos{x} - 2\sec{x}}
  \ln \left(
    \frac
      {\sec^4{x} + \tan^4{x} + 2\sec^2{x}\tan^2{x}}
      {\text{sech}^2\,{x} + \text{tanh}^2\,{x}}
  \right)
\ dx
```


## Hint

### 1
Even if you’ve never encountered hyperbolics ($\text{sech}$, $\text{tanh}$), you can use the hyperbolic identity $\cosh^2{x} - \sinh^2{x} = 1$.

### 2
Does the form of the numerator in the $\ln$ look familiar?

### 3
There’s a lot of factorisation here!

### 4
We probably want all the trigonometric functions in the same form – either $\sin$ and $\cos$ primitives, or $\sec$ and $\tan$ evolutions.

### 5
Since we have a nicely factorised expression in $\sec$ and $\tan$ inside the $\ln$, we’d probably want to do the same for the outside coefficient.

### 6
Try multiplying through by something!

### 7
How could you get rid of $\cos{x}$ in the denominator?


## Answer
```math
-\frac{e}{4} \ln\left(
  \sec^2{x} + \tan^2{x}
\right)^2 - c
```


## Solution

### Cleanup
```math
\begin{align*}
  &\ \int \frac{e \sec^2{x}\sin{x}}{\cos{x} - 2\sec{x}}\ln \left(\frac{\sec^4{x} + \tan^4{x} + 2\sec^2{x}\tan^2{x}}{\text{sech}^2\,{x} + \text{tanh}^2\,{x}}\right)\ dx
  \\ =&\ \int \frac{e\sec^{2}x\sin x}{\cos x-2\sec x}\ln\left(\frac{\left(\sec^{2}x\right)^{2}+\left(\tan^{2}x\right)^{2}+2\sec\left(x\right)^{2}\tan\left(x\right)^{2}}{1}\right)\ dx
  \\ =&\ \int \frac{e\sec^{2}x\sin x}{\cos x-2\sec x}\ln\left(\left(\sec^{2}x+\tan^{2}x\right)^{2}\right)\ dx
  \\ =&\ \int \frac{e\sec^{2}x\sin x}{\cos x-2\sec x}\cdot2\ln\left(\sec^{2}x+\tan^{2}x\right)\ dx
  \\ =&\ 2e\int \frac{\sec^{2}x\sin x}{\cos x-2\sec x}\ln\left(\sec^{2}x+\tan^{2}x\right)\ dx
\end{align*}
```

### Reform
```math
\begin{align*}
  &= 2e\int \frac{\sec^{2}x\sin x}{\cos x-2\sec x}\ln\left(\sec^{2}x+\tan^{2}x\right)\cdot\frac{\sec x}{\sec x}\ dx
  \\ &= 2e\int \frac{\sec x\tan x}{1-2\sec^{2}x}\ln\left(\sec^{2}x+\tan^{2}x\right)\ dx
  \\ &= -2e\int \frac{\sec x\tan x}{2\sec^{2}-1}\ln\left(\sec^{2}x+\tan^{2}x\right)\ dx
  \\ &= -2e\int \frac{\sec x\tan x}{\sec^{2}x+\sec^{2}-1}\ln\left(\sec^{2}x+\tan^{2}x\right)\ dx
  \\ &= -2e\int \frac{\sec x\tan x}{\tan^{2}x+1+\sec^{2}-1}\ln\left(\sec^{2}x+\tan^{2}x\right)\ dx
  \\ &= -2e\int \frac{\sec x\tan x}{\tan^{2}x+\sec^{2}}\ln\left(\sec^{2}x+\tan^{2}x\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \sec^{2}x+\tan^{2}x &= t
  \\ \left(2\sec x\cdot\sec x\tan x+2\tan x\cdot\sec^{2}x\right)\ dx &= dt
  \\ \left(2\tan x\sec^{2}x+2\tan x\sec^{2}x\right)\ dx &= dt
  \\ 4\tan x\sec^{2}x\ dx &= dt
  \\ dx &= \frac{1}{4\tan x\sec^{2}x}\ dt
  \\ 
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ -2e\int \frac{\sec x\tan x}{\tan^{2}x+\sec^{2}}\ln\left(\sec^{2}x+\tan^{2}x\right)\ dx
  \\ =&\ -2e\int \frac{\tan x\sec^{2}x}{t}\ln t\cdot\frac{1}{4\tan x\sec^{2}x}\ dt
  \\ =&\ -\frac{2e}{4}\int \frac{1}{t}\ln t\ dt
  \\ =&\ -\frac{e}{2}\cdot\frac{1}{2}\left(\ln t\right)^{2}
  \\ =&\ -\frac{e}{4}\left(\ln t\right)^{2}
  \\ =&\ -\frac{e}{4}\ln\left(\sec^{2}x+\tan^{2}x\right)^{2}-c
\end{align*}
```
