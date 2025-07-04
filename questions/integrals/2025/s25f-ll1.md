---
topic: integrals
title: bad reaction
desc: 
date: 2025 April 18
difficulty: incline
tags:
  - scare
  - ln
methods:
  - speed
---


## Question
```math
\int \log_{\left(x+1\right)}\left(\left(x-1\right)^{\ln\left(x+1\right)}\right)\ dx
```


## Hints

### 1
Use your log laws!


## Answer
```math
\left(x-1\right)\ln\left(x-1\right)-x-c
```


## Solution

```math
\begin{align*}
  &\ \int \log_{\left(x+1\right)}\left(\left(x-1\right)^{\ln\left(x+1\right)}\right)\ dx
  \\ =&\ \int \frac{\ln\left(\left(x-1\right)^{\ln\left(x+1\right)}\right)}{\ln\left(x+1\right)}\ dx
  \\ =&\ \int \frac{\ln\left(x+1\right)\ln\left(x-1\right)}{\ln\left(x+1\right)}\ dx
  \\ =&\ \int \ln\left(x-1\right)\ dx
  \\ =&\ \left(x-1\right)\ln\left(x-1\right)-\left(x-1\right)
  \\ =&\ \left(x-1\right)\ln\left(x-1\right)-x-c
\end{align*}
```
