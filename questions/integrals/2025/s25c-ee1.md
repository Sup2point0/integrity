---
topic: integrals
title: akaka
desc: I’m quite proud of coming up with this one in a vacuum, even if it is actually a well-known integral.
date: 2025 March 17
difficulty: chaos
tags:
  - definite
  - dread
  - exp
methods:
  - tough
  - parts
---


## Question
```math
\int_{-\infin}^{\infin}
  x^4 e^{-x^2}
\ dx
```


## Hints

### 1
Gaussian integral.

### 2
What’s the area under the normal distribution?

### 3
Evaluating the integral indefinitely is hard.

### 5
How would you integrate $x^2 e^{-x^2}$?

### 6
Use integration by parts.

### 7
For $\int x^2 e^{-x^2} \ dx$, write it as $\int x \cdot xe^{-x^2} \ dx$.


## Answer
```math
\frac{3}{4}\sqrt{\pi}
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int_{-\infty}^{\infty}x^{4}e^{-x^{2}}\ dx
  \\ =&\ \int_{-\infty}^{\infty}x^{3}\cdot xe^{-x^{2}}\ dx
\end{align*}
```

### Parts (1)
```math
\begin{align*}
  f &= x^3 & g' &= xe^{-x^{2}}
  \\ f' &= 3x^2 & g &= \int xe^{-x^{2}}\ dx
  \\ && &= \frac{1}{2}\int 2xe^{-x^{2}}\ dx
  \\ && &= -\frac{1}{2}e^{-x^{2}}
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ fg-\int_{-\infty}^{\infty}f'g\ dx
  \\ =&\ \left[x^{3}\cdot-\frac{1}{2}e^{-x^{2}}\right]_{-\infty}^{\infty}-\int_{-\infty}^{\infty}\left(3x^{2}\right)\left(-\frac{1}{2}e^{-x^{2}}\right)\ dx
  \\ =&\ \left[-\frac{1}{2}x^{3}e^{-x^{2}}\right]_{-\infty}^{\infty}+\frac{3}{2}\int_{-\infty}^{\infty}x^{2}e^{-x^{2}}\ dx
  \\ =&\ \left[-\frac{1}{2}x^{3}e^{-x^{2}}\right]_{-\infty}^{\infty}+\frac{3}{2}\int_{-\infty}^{\infty}x\cdot xe^{-x^{2}}\ dx
\end{align*}
```

### Parts (2)
```math
\begin{align*}
  p &= x \quad&\quad q' &= q'=xe^{-x^{2}}
  \\ p' &= 1 \quad&\quad q &= \int xe^{-x^{2}}\ dx
  \\ && &= \frac{1}{2}\int 2xe^{-x^{2}}\ dx
  \\ && &= -\frac{1}{2}e^{-x^{2}}
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &= \left[-\frac{1}{2}x^{3}e^{-x^{2}}\right]_{-\infty}^{\infty}+\frac{3}{2}\left(pq-\int_{-\infin}^{\infin}p'q\ dx\right)
  \\ &= \left[-\frac{1}{2}x^{3}e^{-x^{2}}\right]_{-\infty}^{\infty}+\frac{3}{2}\left(\left[x\cdot-\frac{1}{2}e^{-x^{2}}\right]_{-\infty}^{\infty}-\int_{-\infty}^{\infty}\left(-\frac{1}{2}e^{-x^{2}}\right)\ dx\right)
  \\ &= \left[-\frac{1}{2}x^{3}e^{-x^{2}}\right]_{-\infty}^{\infty}+\frac{3}{2}\left(\left[x\cdot-\frac{1}{2}e^{-x^{2}}\right]_{-\infty}^{\infty}+\frac{1}{2}\int_{-\infty}^{\infty}e^{-x^{2}}\ dx\right)
  \\ &= \left[-\frac{1}{2}x^{3}e^{-x^{2}}\right]_{-\infty}^{\infty}+\frac{3}{2}\left[x\cdot-\frac{1}{2}e^{-x^{2}}\right]_{-\infty}^{\infty}+\frac{3}{4}\int_{-\infty}^{\infty}e^{-x^{2}}\ dx
\end{align*}
```

### Evaluate

As $x \to \pm \infin$, $x^k e^{-x^2} \to 0$. We know this intuitively since

```math
x^k e^{-x^2} = \frac{x^k}{e^{x^2}}
```

Exponentials always grow faster than polynomials, so the ratio tends to $0$ as $x$ grows. Since the exponential has an $x^2$, this also applies for negative $x$.

More rigorously, we can derive this with L’Hôpital’s rule:

```math
\begin{align*}
  \lim_{x \to \pm\infin} {\frac{f(x)}{g(x)}}
    &= \lim_{x \to \pm\infin} {\frac{f'(x)}{g'(x)}}
  \\ \lim_{x \to \pm\infin} {\frac{x^k}{e^{x^2}}}
    &= \lim_{x \to \pm\infin} {\frac{kx^{k-1}}{2xe^{x^2}}}
  \\ &= \lim_{x \to \pm\infin} {\frac{k(k-1)x^{k-2}}{4x^2e^{x^2}}}
  \\ &= ...
  \\ &= C \lim_{x \to \pm\infin} {\frac{1}{x^n e^{x^2}}}
  \\ &= 0
\end{align*}
```

Eventually all terms in $x$ vanish from the numerator, leaving just a constant, and the entire limit collapses to $0$. The sign of $x$ makes no difference.

Therefore

```math
\begin{align*}
  &\ \left[-\frac{1}{2}x^{3}e^{-x^{2}}\right]_{-\infty}^{\infty}+\frac{3}{2}\left[x\cdot-\frac{1}{2}e^{-x^{2}}\right]_{-\infty}^{\infty}+\frac{3}{4}\int_{-\infty}^{\infty}e^{-x^{2}}\ dx
  \\ =&\ \left[0-0\right]+\frac{3}{2}\left[0-0\right]+\frac{3}{4}\int_{-\infty}^{\infty}e^{-x^{2}}\ dx
  \\ =&\ \frac{3}{4}\int_{-\infty}^{\infty}e^{-x^{2}}\ dx
\end{align*}
```

And this is a gaussian (normal distribution), which the area under is quotable as $\sqrt{\pi}$. Hence the overall integral evaluates to

```math
\frac{3}{4} \sqrt{\pi}
```
