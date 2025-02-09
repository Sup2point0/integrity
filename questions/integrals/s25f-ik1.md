---
topic: integrals
title: intcore
desc: 
date: 2025 January 30
tags:
  - funny
methods:
  - speed
---


## Question
```math
\int
  \frac{1}{x}
  \int
    \frac{1}{x}
      \int
        \frac{1}{x}
      \ dx
  \ dx
\ dx
```


## Hints

### 1
Remember your constants!


## Answer
```math
\frac{1}{6}\left(\ln x\right)^{3}+cx-C
```


## Solution

### Solve (1)
```math
\int \frac{1}{x}\ dx = \ln x+c
```

### Solve (2)
```math
\begin{align*}
  &\ \int_{\ }^{\ }\frac{1}{x}\int_{\ }^{\ }\frac{1}{x}\ dx\ dx
  \\ =&\ \int_{\ }^{\ }\frac{1}{x}\left(\ln x+c\right)\ dx
  \\ =&\ \frac{1}{2}\left(\ln x\right)^{2}+cx
\end{align*}
```

### Solve (3)
```math
\begin{align*}
  &\ \int_{\ }^{\ }\frac{1}{x}\int_{\ }^{\ }\frac{1}{x}\int_{\ }^{\ }\frac{1}{x}\ dx\ dx\ dx
  \\ =&\ \int_{\ }^{\ }\frac{1}{x}\left(\frac{1}{2}\left(\ln x\right)^{2}+cx\right)\ dx
  \\ =&\ \frac{1}{2}\int_{\ }^{\ }\frac{1}{x}\left(\ln x\right)^{2}+\int_{\ }^{\ }c\ dx
  \\ =&\ \frac{1}{6}\left(\ln x\right)^{3}+cx-C
\end{align*}
```
