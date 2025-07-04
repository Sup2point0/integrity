---
topic: integrals
title: silent skyscrapers
desc: 
date: 2025 May 3
difficulty: manifold
tags:
  - scare
  - wack
  - elite
methods:
  - acc
---


## Question
```math
\int
  \begin{bmatrix}
       x^9
    \\ 1
    \\ \pi
  \end{bmatrix}
  \times
  \begin{bmatrix}
       \tau
    \\ x^{11}
    \\ 0
  \end{bmatrix}
\ dx
```


## Hints

### 1
Yep, just take the cross product!

### 2
Integrating a vector is easy – just integrate the components!

### 3
Don’t forget your constants.


## Answer
```math
\begin{bmatrix}
      -\frac{\pi}{12}x^{12}
  \\[1em] 2\pi^2 x
  \\[1em] \ \frac{1}{21}x^{21} - 2\pi x \
\end{bmatrix}
- \begin{bmatrix} c_1 \\ c_2 \\ c_3 \end{bmatrix}
```


## Solution

### Cross Product
```math
\begin{align*}
  &\ {
    \begin{bmatrix}
         x^9
      \\ 1
      \\ \pi
    \end{bmatrix} \times \begin{bmatrix}
         \tau
      \\ x^{11}
      \\ 0
    \end{bmatrix}
  }
  \\[2em] =&\ {
    \left|\begin{matrix}
         \bold{i} & x^9 & 2\pi
      \\ \bold{j} & 1   & x^{11}
      \\ \bold{k} & \pi & 0
    \end{matrix}\right|
  }
  \\[2em] =&\ {
    \bold{i} \left|\begin{matrix}
         1   & x^{11}
      \\ \pi & 0
    \end{matrix}\right|
    -
    \bold{j} \left|\begin{matrix}
         x^9 & 2\pi
      \\ \pi & 0
    \end{matrix}\right|
    +
    \bold{k} \left|\begin{matrix}
         x^9 & 2\pi
      \\ 1 & x^{11}
    \end{matrix}\right|
  }
  \\[2em] =&\ {
    \begin{bmatrix}
         0 - \pi x^{11}
      \\ -\left( 0 - 2\pi^2 \right)
      \\ x^{20} - 2\pi
    \end{bmatrix}
  }
  \\[2em] =&\ {
    \begin{bmatrix}
         - \pi x^{11}
      \\ 2\pi^2
      \\ \ x^{20} - 2\pi \
    \end{bmatrix}
  }
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ {
    \int
      \begin{bmatrix}
        \
          x^9
        \\ 1
        \\ \pi
      \end{bmatrix}
      \times
      \begin{bmatrix}
          \tau
        \\ x^{11}
        \\ 0
      \end{bmatrix}
    \ dx
  }
  \\ =&\ {
    \int
      \begin{bmatrix}
           - \pi x^{11}
        \\ 2\pi^2
        \\ \ x^{20} - 2\pi \
      \end{bmatrix}
    \ dx
  }
  \\ =&\ {
    \begin{bmatrix}
         -\frac{\pi}{12}x^{12}
      \\[1em] 2\pi^2 x
      \\[1em] \ \frac{1}{21}x^{21} - 2\pi x \
    \end{bmatrix}
    - \begin{bmatrix} c_1 \\ c_2 \\ c_3 \end{bmatrix}
  }
\end{align*}
```
