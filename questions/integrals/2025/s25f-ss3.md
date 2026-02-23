---
topic: integrals
title: norepinephrine
desc:  glhf
date:  2025 June 13
difficulty: chaos
tags:
  - sqrt
  - trig
  - hyp trig
methods:
  - long
  - work
  - parts
---


## Question
```math
\int \sin\sqrt{x}\sinh\sqrt{x}\ dx
```


## Hints

### 1
Start with $\sqrt{x} = t$.

### 2
Only one way forward.

Yup, parts.

### 3
Well, it’s just more parts, innit?

### 4
Yes, MORE PARTS.

### 5
ALL THE PARTS.

### 6
I ended up solving 4 distinct integrals in my solution, so that’s a rough ballpark of how much you might need to do.

### 7
Yeah, this *is* LONG.

### 8
Put it all together!

### 9
If your answer has a lot of $\operatorname{trig}{\sqrt{x}}$ and $\operatorname{trigh}{\sqrt{x}}$, you’re probably doing fine.

### 10
Did you have fun? I did ;)


## Answer
```math
\sqrt{x}\left(\sin\sqrt{x}\cosh\sqrt{x}-\cos\sqrt{x}\sinh\sqrt{x}\right)+\cos\sqrt{x}\cosh\sqrt{x}-c
```


## Solution

### Substitute
```math
\begin{align*}
  \sqrt{x} &= t
  \\ x &= t^{2}
  \\ dx &= 2t\ dt
\end{align*}
```

### Reshape
```math
\begin{align*}
  &\ \int \sin\sqrt{x}\sinh\sqrt{x}\ dx
  \\ =&\ \int \sin\left(t\right)\sinh\left(t\right)\cdot2t\ dt
  \\ =&\ 2\int t\sin\left(t\right)\sinh\left(t\right)\ dt
\end{align*}
```

### Parts
```math
\begin{align*}
      f &= t\sin\left(t\right) \quad&\quad g' &= \sinh\left(t\right)
  \\ f' &= \sin\left(t\right)+t\cos\left(t\right) \quad&\quad g &= \cosh\left(t\right)
\end{align*}
```

### $I_1$
```math
\begin{align*}
  I_{1} &= fg-\int f'g\ dt
  \\ &= t\sin\left(t\right)\cosh\left(t\right)-\int \left(\sin\left(t\right)+t\cos\left(t\right)\right)\cosh\left(t\right)\ dt
  \\ &= t\sin\left(t\right)\cosh\left(t\right)-\int \sin\left(t\right)\cosh\left(t\right)\ dt-\int t\cos\left(t\right)\cosh\left(t\right)\ dt
  \\ &= t\sin\left(t\right)\cosh\left(t\right)-I_{2}-I_{3}
\end{align*}
```

### $I_2$
```math
\begin{align*}
  I_{2} &= \int \sin\left(t\right)\cosh\left(t\right)\ dt
  \\ &= \sin\left(t\right)\sinh\left(t\right)-\int \cos\left(t\right)\sinh\left(t\right)\ dt
  \\ &= \sin\left(t\right)\sinh\left(t\right)-\left(\cos\left(t\right)\cosh\left(t\right)-\int -\sin\left(t\right)\cosh\left(t\right)\ dt\right)
  \\ &= \sin\left(t\right)\sinh\left(t\right)-\cos\left(t\right)\cosh\left(t\right)-\int \sin\left(t\right)\cosh\left(t\right)\ dt
  \\ 2I_{2} &= \sin\left(t\right)\sinh\left(t\right)-\cos\left(t\right)\cosh\left(t\right)
  \\ I_{2} &= \frac{1}{2}\left[\sin\left(t\right)\sinh\left(t\right)-\cos\left(t\right)\cosh\left(t\right)\right]
\end{align*}
```

### $I_3$
```math
I_{3}=\int t\cos\left(t\right)\cosh\left(t\right)\ dt
```

```math
\begin{align*}
      p &= t\cos\left(t\right) \quad&\quad q' &= \cosh\left(t\right)
  \\ p' &= \cos\left(t\right)-t\sin\left(t\right) \quad&\quad q &= \sinh\left(t\right)
\end{align*}
```

```math
\begin{align*}
  I_{3} &= pq-\int p'q\ dt
  \\ &= t\cos\left(t\right)\sinh\left(t\right)-\int \left(\cos\left(t\right)-t\sin\left(t\right)\right)\sinh\left(t\right)\ dt
  \\ &= t\cos\left(t\right)\sinh\left(t\right)-\int \cos\left(t\right)\sinh\left(t\right)\ dt+\int t\sin\left(t\right)\sinh\left(t\right)\ dt
  \\ &= t\cos\left(t\right)\sinh\left(t\right)-I_{4}+I_{1}
\end{align*}
```

### $I_4$
```math
\begin{align*}
  I_{4}=\int \cos\left(t\right)\sinh\left(t\right)\ dt
  \\ =\cos\left(t\right)\cosh\left(t\right)-\int -\sin\left(t\right)\cosh\left(t\right)\ dt
  \\ =\cos\left(t\right)\cosh\left(t\right)+\int \sin\left(t\right)\cosh\left(t\right)\ dt
  \\ =\cos\left(t\right)\cosh\left(t\right)+\sin\left(t\right)\sinh\left(t\right)-\int \cos\left(t\right)\sinh\left(t\right)\ dt
  \\ 2I_{4}=\cos\left(t\right)\cosh\left(t\right)+\sin\left(t\right)\sinh\left(t\right)
  \\ I_{4}=\frac{1}{2}\left[\cos\left(t\right)\cosh\left(t\right)+\sin\left(t\right)\sinh\left(t\right)\right]
\end{align*}
```

### $I_3$ (again)
```math
\begin{align*}
  I_{3} &= t\cos\left(t\right)\sinh\left(t\right)-I_{4}+I_{1}
  \\ &= t\cos\left(t\right)\sinh\left(t\right)-\frac{1}{2}\left[\cos\left(t\right)\cosh\left(t\right)+\sin\left(t\right)\sinh\left(t\right)\right]+I_{1}
\end{align*}
```

### Solve
```math
\begin{align*}
  I_{1} &= t\sin\left(t\right)\cosh\left(t\right)-I_{2}-I_{3}
  \\ &= t\sin\left(t\right)\cosh\left(t\right)-\left[\frac{1}{2}\left[\sin\left(t\right)\sinh\left(t\right)-\cos\left(t\right)\cosh\left(t\right)\right]\right]-\left[t\cos\left(t\right)\sinh\left(t\right)-\frac{1}{2}\left[\cos\left(t\right)\cosh\left(t\right)+\sin\left(t\right)\sinh\left(t\right)\right]+I_{1}\right]
  \\ &= t\sin\left(t\right)\cosh\left(t\right)-\frac{1}{2}\left[\sin\left(t\right)\sinh\left(t\right)-\cos\left(t\right)\cosh\left(t\right)\right]-t\cos\left(t\right)\sinh\left(t\right)+\frac{1}{2}\left[\cos\left(t\right)\cosh\left(t\right)+\sin\left(t\right)\sinh\left(t\right)\right]-I_{1}
  \\ 2I_{1} &= t\sin\left(t\right)\cosh\left(t\right)-\frac{1}{2}\sin\left(t\right)\sinh\left(t\right)+\frac{1}{2}\cos\left(t\right)\cosh\left(t\right)-t\cos\left(t\right)\sinh\left(t\right)+\frac{1}{2}\cos\left(t\right)\cosh\left(t\right)+\frac{1}{2}\sin\left(t\right)\sinh\left(t\right)
  \\ &= t\sin\left(t\right)\cosh\left(t\right)+\cos\left(t\right)\cosh\left(t\right)-t\cos\left(t\right)\sinh\left(t\right)
  \\ 2\int t\sin\left(t\right)\sinh\left(t\right)\ dt
    &= t\sin\left(t\right)\cosh\left(t\right)+\cos\left(t\right)\cosh\left(t\right)-t\cos\left(t\right)\sinh\left(t\right)
  \\ &= t\left(\sin t\cosh t-\cos t\sinh t\right)+\cos t\cosh t
  \\ \int \sin\sqrt{x}\sinh\sqrt{x}\ dx
    &= \sqrt{x}\left(\sin\sqrt{x}\cosh\sqrt{x}-\cos\sqrt{x}\sinh\sqrt{x}\right)+\cos\sqrt{x}\cosh\sqrt{x}-c
\end{align*}
```
