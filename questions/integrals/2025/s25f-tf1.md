---
topic: integrals
title: ascension
desc: 
date: 2025 January 11
difficulty: incline
tags:
  - horror
  - trig
  - exp
  - ln
methods:
  - work
---


## Question
```math
\int
  \frac
    {\left(\cot{x}\right) \ln\left( \left(1/e\right)^{\sin{x}} \right)}
    {\log_{(1/e)}\left (e^{-\cos{x}} \right)}
\ dx
```


## Hints

### 1
1 step at a time.

### 2
A lotta stuff can cancel out.

### 3
How do we make it cancel out?


## Answer
```math
-x-c
```


## Solution

### Solve
```math
\begin{align*}
  &\ \int\frac{\left(\cot{x}\right) \ln\left( \left(1/e\right)^{\sin{x}} \right)}{\log_{(1/e)}\left (e^{-\cos{x}} \right)}\ dx
  \\ =&\ \int \cot x\cdot\frac{\ln\left(\left(1/e\right)^{\sin x}\right)}{\log_{\left(1/e\right)}\left(\left(1/e\right)^{\cos x}\right)}\ dx
  \\ =&\ \int \frac{\cos x}{\sin x}\cdot\frac{\sin x\ln\left(1/e\right)}{\cos x\log_{\left(1/e\right)}\left(1/e\right)}\ dx
  \\ =&\ \int \frac{\ln\left(1/e\right)}{\log_{\left(1/e\right)}\left(1/e\right)}\ dx
  \\ =&\ \int \frac{\ln\left(e^{-1}\right)}{1}\ dx
  \\ =&\ \int -1\ dx
  \\ =&\ -x-c
\end{align*}
```
