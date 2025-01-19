---
topic: integrals
title: frigate
desc: 
date: 2025 January 7
tags:
  - trig
  - ln
method:
  - parts
---


## Question
```math
\int \left(\sin x\right)\ln\left(\sin^{2}x\right)\ dx
```


## Hints

### 1
The $\sin{x}$ squared is a bit icky.

### 2
How else could we write $\sin^2{x}$?

### 3
Log laws are always great!


## Answer
```math
\left(1-\cos x\right)\left(\ln\left(1-\cos x\right)-1\right)-\left(1+\cos x\right)\left(\ln\left(1+\cos x\right)-1\right)-c
```


## Solution

### Reform
```math
\begin{align*}
  &\ \int \left(\sin x\right)\ln\left(\sin^{2}x\right)\ dx
  \\ =&\ \int \left(\sin x\right)\ln\left(1-\cos^{2}x\right)\ dx
  \\ =&\ -\int \left(-\sin x\right)\left(\ln\left(1-\cos^{2}x\right)\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \cos x &= t
  \\ -\sin x\ dx &= dt
\end{align*}
```

### Log Laws
```math
\begin{align*}
  &\ -\int \left(-\sin x\right)\left(\ln\left(1-\cos^{2}x\right)\right)\ dx
  \\ =&\ -\int \ln\left(1-t^{2}\right)\ dt
  \\ =&\ -\int \ln\left(\left(1-t\right)\left(1+t\right)\right)\ dt
  \\ =&\ -\int \ln\left(1-t\right)+\ln\left(1+t\right)\ dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= -\int \ln\left(1-t\right)\ dt-\int \ln\left(1+t\right)\ dt
  \\ &= \left(1-t\right)\left(\ln\left(1-t\right)-1\right)-\left(1+t\right)\left(\ln\left(1+t\right)-1\right)
  \\ &= \left(1-\cos x\right)\left(\ln\left(1-\cos x\right)-1\right)-\left(1+\cos x\right)\left(\ln\left(1+\cos x\right)-1\right)-c
\end{align*}
```


## Alternates

### Reform
```math
\begin{align*}
  &\ \int \left(\sin x\right)\ln\left(\sin^{2}x\right)\ dx
  \\ =&\ 2\int \left(\sin x\right)\ln\left(\sin x\right)\ dx
\end{align*}
```

### Parts
```math
\begin{align*}
  &= 2\left(\left(-\cos x\right)\ln\left(\sin x\right)-\int \left(-\cos x\right)\cdot\frac{\cos x}{\sin x}\ dx\right)
  \\ &= -2\left(\cos x\right)\ln\left(\sin x\right)+2\int \frac{\cos^{2}x}{\sin x}\ dx
  \\ &= -2\left(\cos x\right)\ln\left(\sin x\right)+2\int \frac{1-\sin^{2}x}{\sin x}\ dx
  \\ &= -2\left(\cos x\right)\ln\left(\sin x\right)+2\int \csc x-\sin x\ dx
  \\ &= -2\left(\cos x\right)\ln\left(\sin x\right)-2\ln\left(\csc x+\cot x\right)+2\cos x-c
\end{align*}
```
