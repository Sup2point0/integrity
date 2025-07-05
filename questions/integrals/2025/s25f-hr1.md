---
topic: integrals
title: machina
desc: 
date: 2025 January
difficulty: chaos
tags:
  - horror
  - sqrt
  - arctrig
  - complex
methods:
  - long
  - work
  - spot
flags:
  - feat
  - guide
---


## Question
```math
\int
  \frac
    {2\, \operatorname{sign}(x)}
    {\sqrt{2-x^2}}
  \sqrt{\frac
    { \sin^{-1}\left(-x^2 - i^2 \right) - i^2 }
    { \sin^{-1}\left(x^2 - i^2 \right) - i^2 }
  }
\ dx
```


## Hints

### 1
What does $\sqrt{x^2}$ give?

### 2
What does $|x| \operatorname{sign}(x)$ give?

### 3
What does $\sin^{-1}{t}$ differentiate to give?


## Answer
```math
\sin^{-1}\left(\sin^{-1}\left(x^{2}-1\right)\right)+\sqrt{1-\left(\sin^{-1}\left(x^{2}-1\right)\right)^{2}}-c
```


## Solution

### Preamble
Okayyy, one step at a time. When faced with something like this, always start with what you know. $i^2 = -1$, so we’ll start by getting rid of those:

```math
\begin{align*}
  &\ \int \frac{2\operatorname{sign}\left(x\right)}{\sqrt{2-x^{2}}}\sqrt{\frac{\sin^{-1}\left(-x^{2}-i^{2}\right)-i^{2}}{\sin^{-1}\left(x^{2}+i^{2}\right)-i^{2}}}\ dx
  \\ =&\ \int \frac{2\operatorname{sign}\left(x\right)}{\sqrt{2-x^{2}}}\sqrt{\frac{\sin^{-1}\left(-x^{2}-\left(-1\right)\right)-\left(-1\right)}{\sin^{-1}\left(x^{2}+\left(-1\right)\right)-\left(-1\right)}}\ dx
  \\ =&\ \int \frac{2\operatorname{sign}\left(x\right)}{\sqrt{2-x^{2}}}\sqrt{\frac{\sin^{-1}\left(-x^{2}+1\right)+1}{\sin^{-1}\left(x^{2}-1\right)+1}}\ dx
  \\ =&\ \int \frac{2\operatorname{sign}\left(x\right)}{\sqrt{2-x^{2}}}\sqrt{\frac{1+\sin^{-1}\left(-\left(x^{2}-1\right)\right)}{1+\sin^{-1}\left(x^{2}-1\right)}}\ dx
\end{align*}
```

$\sin^{-1}(x)$ is odd, meaning we can pull out the $-$ sign:

```math
= \int \frac{2\operatorname{sign}\left(x\right)}{\sqrt{2-x^{2}}}\sqrt{\frac{1-\sin^{-1}\left(x^{2}-1\right)}{1+\sin^{-1}\left(x^{2}-1\right)}}\ dx
```

Now the inside looks pretty neat.

### Reshape
At this point, we might hypothesise $x^2 - 1$ could be a good first substitution to make. Let’s think, then, how we could get a suitable derivative on the outside.

We know

```math
\frac{d}{dx}\left(x^{2}-1\right) = 2x
```

so we want $2x$ in the numerator. Currently we have $\operatorname{sign}(x)$, which is a bit weird. We’ll definitely want to get rid of it, but how?

The next step requires a bit of mathematical wizardry.

We’ll first need to be familiar with what effect $\sqrt{}$ has. A key property is that $\sqrt{x}$ only gives the positive root. Hence we can determine that $\sqrt{x^2} = |x|$. Squaring $x$ removes the sign, and then square rooting it gives back the positive value.

So if we have a $\sqrt{}$ containing a factor of $x^2$, we can pull it out like so:

```math
\sqrt{x^{2}f\left(x\right)} = \left|x\right|\sqrt{f\left(x\right)}
```

The other thing to know is how $\operatorname{sign}(x)$ can be computed. It’s intuitively defined as a piecewise function which returns $1$ if $x$ is positive, $-1$ if it’s negative, and $0$ if $x = 0$. But we can express it with a single expression as

```math
\operatorname{sign}(x) = \frac{\left|x\right|}{x}
```

Or equivalently,

```math
\operatorname{sign}(x) = \frac{x}{\left|x\right|}
```

Hopefully it shouldn’t be too hard to convince yourself this is true. Now, rearranging the latter equation we obtain

```math
\left|x\right|\operatorname{sign}(x) = x
```

Combining these 2 relationships, we can now get rid of that $\operatorname{sign}(x)$.

### Factorise
The trick here is that we can change $\text{sign}(x)$ in the numerator to $x$, if we multiply it by $|x|$. And we can also ‘absorb’ a $|x|$ in the denominator with the $\sqrt{}$, leaving us with no $|x|$-s to worry about. So, let’s multiply through by $|x|$:

```math
\begin{align*}
  &\ \int \frac{\left|x\right|}{\left|x\right|}\cdot\frac{2\operatorname{sign}\left(x\right)}{\sqrt{2-x^{2}}}\sqrt{\frac{1-\sin^{-1}\left(x^{2}-1\right)}{1+\sin^{-1}\left(x^{2}-1\right)}}\ dx
  \\ =&\ \int \frac{2x}{\sqrt{x^{2}}\sqrt{2-x^{2}}}\sqrt{\frac{1-\sin^{-1}\left(x^{2}-1\right)}{1+\sin^{-1}\left(x^{2}-1\right)}}\ dx
  \\ =&\ \int \frac{2x}{\sqrt{2x^{2}-x^{4}}}\sqrt{\frac{1-\sin^{-1}\left(x^{2}-1\right)}{1+\sin^{-1}\left(x^{2}-1\right)}}\ dx
\end{align*}
```

Now we’re talking. But if we’re going to make our substitution we’ll also need to think about how we handle the $2x^2 - x^4$ in the lower $\sqrt{}$.

At this point, we can consider what we’d do <em>after</em> substituting $x^2 - 1 = t$. We would end up with $\sin^{-1}{t}$, which we’d need to substitute again. So then we’re looking for the derivative of $\sin^{-1}{t}$, which can be quoted:

```math
\frac{d}{dx}\sin^{-1}t=\frac{1}{\sqrt{1-t^{2}}}
```

We can actually factorise the denominator into this form by harnessing one of the power moves in maths – adding zero:

```math
\begin{align*}
  &= \int \frac{2x}{\sqrt{1-1+2x^{2}-x^{4}}}\sqrt{\frac{1-\sin^{-1}\left(x^{2}-1\right)}{1+\sin^{-1}\left(x^{2}-1\right)}}\ dx
  \\ &= \int \frac{2x}{\sqrt{1-\left(1-2x^{2}+x^{4}\right)}}\sqrt{\frac{1-\sin^{-1}\left(x^{2}-1\right)}{1+\sin^{-1}\left(x^{2}-1\right)}}\ dx
  \\ &= \int \frac{2x}{\sqrt{1-\left(x^{2}-1\right)^{2}}}\sqrt{\frac{1-\sin^{-1}\left(x^{2}-1\right)}{1+\sin^{-1}\left(x^{2}-1\right)}}\ dx
\end{align*}
```

And now, we’re all set for our substitutions!

### Substitute (1)
```math
\begin{align*}
  x^{2}-1 &= t
  \\ 2x\ dx &= dt
\end{align*}
```

```math
= \int \frac{1}{\sqrt{1-t^{2}}}\sqrt{\frac{1-\sin^{-1}t}{1+\sin^{-1}t}}\ dt
```

### Substitute (2)
```math
\begin{align*}
  \sin^{-1}t &= v
  \\ \frac{1}{\sqrt{1-t^{2}}}\ dt &= dv
\end{align*}
```

```math
\begin{align*}
  &= \int \sqrt{\frac{1-v}{1+v}}\ dv
  \\ &= \int \frac{\sqrt{1-v}}{\sqrt{1+v}}\cdot\frac{\sqrt{1-v}}{\sqrt{1-v}}\ dv
  \\ &= \int \frac{1-v}{\sqrt{\left(1+v\right)\left(1-v\right)}}\ dv
  \\ &= \int \frac{1-v}{\sqrt{1-v^{2}}}\ dv
\end{align*}
```

### Substitute (3)
```math
\begin{align*}
  v &= \sin w
  \\ dv &= \cos w\ dw
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \int \frac{1-\sin w}{\sqrt{1-\sin^{2}w}}\cdot\cos w\ dw
  \\ &= \int \frac{1-\sin w}{\cos w}\cdot\cos w\ dw
  \\ &= \int 1-\sin w\ dw
  \\ &= w+\cos w
\end{align*}
```

And finally, putting everything back...

```math
\begin{align*}
  &= \sin^{-1}v+\sqrt{1-v^{2}}
  \\ &= \sin^{-1}\left(\sin^{-1}t\right)+\sqrt{1-\left(\sin^{-1}t\right)^{2}}
  \\ &= \sin^{-1}\left(\sin^{-1}\left(x^{2}-1\right)\right)+\sqrt{1-\left(\sin^{-1}\left(x^{2}-1\right)\right)^{2}}-c
\end{align*}
```

Note: you’ll need to enable complex mode in Desmos to check this.
