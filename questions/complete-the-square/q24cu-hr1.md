---
topic: complete-square
title: 'no'
desc: Ok, so you know how to complete the square, but do you <em>know</em> how to complete the square?
date: 2024 November
tags:
  - horror
---


## Question
```math
e^2 + 2(x - 2) - \frac{7 \pi}{3} (2 - x)^2
```


## Hints

### 1
If you square a term, it does not matter what its sign is.

### 2
Rewrite the expression:

```math
e^2 + 2(x - 2) - \frac{7 \pi}{3} (x - 2)^2
```

### 3
Try making a substitution!


## Answer
```math
\frac{7 \pi}{3} \left(
  (x - 2)^2 + \frac{6}{7 \pi}
\right)
```


## Solution

### Rewrite
```math
\begin{align}
&= e^{2}+2\left(x-2\right)-\frac{7\pi}{3}\left(2-x\right)^{2}  \\
&= e^{2}+2\left(x-2\right)-\frac{7\pi}{3}\left(x-2\right)^{2}
\end{align}
```

### Substitute
```math
x - 2 = t
```

### Complete the Square
```math
\begin{align}
&= e^{2}+2t-\frac{7\pi}{3}t^{2}  \\
&= -\frac{7\pi}{3}\left(t^{2}-\frac{6}{7\pi}t\right)+e^{2}  \\
&= -\frac{7\pi}{3}\left(\left(t-\frac{3}{7\pi}\right)^{2}-\left(\frac{3}{7\pi}\right)^{2}\right)+e^{2}  \\
&= -\frac{7\pi}{3}\left(t-\frac{3}{7\pi}\right)^{2}+\frac{7\pi}{3}\cdot\frac{3^{2}}{7^{2}\cdot\pi^{2}}+e^{2}  \\
&= -\frac{7\pi}{3}\left(t-\frac{3}{7\pi}\right)^{2}+\frac{3}{7\pi}+e^{2}  \\
\end{align}
```

### Solve
```math
\begin{align}
&= -\frac{7\pi}{3}\left(x-\frac{3+14\pi}{7\pi}\right)^{2}+\frac{3}{7\pi}+e^{2}
\end{align}
```
