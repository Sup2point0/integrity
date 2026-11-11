---
topic: integrals
title: guilty complex
desc:  
date:  2026 November 11
difficulty: manifold
tags:
  - definite
  - floor
  - pi
methods:
  - elite
  - series
  - spot
---


## Question
```math
\int_{1}^{\infin}
  \frac{\sqrt{\pi}^{\lfloor x \rfloor}}{\lfloor x \rfloor!}
\ dx
```


## Hints

### 1
What would the graph of the integrand look like?

### 2
Is this *really* an integral?

### 3
Use the Taylor expansion of $e^x$:

```math
e^x = \sum_{n=0}^{\infin} \frac{x^n}{n!}
```


## Answer
```math
e^{\sqrt{\pi}} - 1
```


## Solution

Because all terms of $x$ are $\lfloor x \rfloor$, we can convert the integral to a summation:

```math
\begin{align*}
  &\ \int_{1}^{\infin} \frac{\sqrt{\pi}^{\lfloor x \rfloor}}{\lfloor x \rfloor!} \ dx
  \\ =&\ \sum_{n=1}^{\infin}\frac{\sqrt{\pi}^{x}}{x!}
\end{align*}
```

Does this look familiar? Let’s expand the summation to start from $n = 0$:

```math
= \left(\sum_{n=0}^{\infin}\frac{\sqrt{\pi}^{x}}{x!}\right)-\left.\frac{\pi^{x}}{x!}\right|_{x=0}
```

Now recall the Taylor expansion of $e^x$:

```math
e^x = \sum_{n=0}^{\infin} \frac{x^n}{n!}
```

Letting $x = \sqrt{pi}$ gives our left term above! Hence:

```math
\begin{align*}
  &= \exp\left(\sqrt{\pi}\right)-\frac{\pi^{0}}{0!}
  \\ &= e^{\sqrt{\pi}}-1
\end{align*}
```
