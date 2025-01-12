---
topic: integrals
title: palisade
desc: 
date: 2025 January 9
tags:
  - trig
method:
  - spot
  - speed
---


## Question
```math
\int_{\ }^{\ }\tan\left(x\right)\sec\left(x\right)\tan\left(\sec x\right)\ dx
```


## Answer
```math
-\ln\left(\cos\left(\sec x\right)\right)-c
```


## Solution

### Solve
```math
\begin{align*}
  &= \int_{\ }^{\ }\left(\sec x\tan x\right)\tan\left(\sec x\right)\ dx
  \\ &= 
\end{align*}
```

### Substitute
```math
\begin{align*}
  \sec x &= t
  \\ \sec x\tan x\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int_{\ }^{\ }\tan t\ dt
  \\ &= -\ln\left(\cos t\right)
  \\ &= -\ln\left(\cos\left(\sec x\right)\right)-c
\end{align*}
```
