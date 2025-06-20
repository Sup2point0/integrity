---
topic: integrals
title: deadlock
desc: 
date: 2025 January 12
tags:
  - horror
  - arctrig
methods:
  - spot
  - tough
---


## Question
```math
\int \frac{x-2x^{2}\tan^{-1}{x}}{\left(x^{2}+1\right)^{2}}\ dx
```


## Hints

### 1
Does the denominator look familiar?

### 2
What might a squared denominator indicate?

### 3
Starts with “f” and rhymes with <em>tractorise</em>.


## Answer
```math
\frac{x\tan^{-1}{x}}{x^{2}+1}-\frac{1}{2}\left(\tan^{-1}{x}\right)^{2}-c
```


## Solution

This is quite a lot to take in.

We can guess the $(x^2 + 1)^2$ in the denominator isn’t related to substituting $tan^{-1}{x}$, since it’s been squared. But squaring a term in the denominator is reminiscent of quotient rule – and we happen to have 2 terms subtracted in the numerator too – so let’s see whether we can spot if there’s something that’s been differentiated via quotient rule.

Recall that the quotient rule is

```math
\frac{d}{dx}\left(\frac{f}{g}\right)=\frac{gf'-fg'}{g^{2}}
```

We can pretty easily spot $g$ would be $x^2 + 1$. Differentiating this would give $2x$. We have $2x^2$ in the numerator, but we can factor out $x$ to give $2x$:

```math
=\int x\cdot\frac{1-2x\tan^{-1}x}{\left(x^{2}+1\right)^{2}}\ dx
```

Looking at this, we can now guess that $f$ is $\tan^{-1}{x}$. Let’s confirm how we would get the $1$, though. If we differentiate $f$ we obtain $\frac{1}{x^2 + 1}$ – and what’d’y’know, this perfectly cancels with $g$ to give $1$.

```math
=\int x\cdot\frac{\frac{x^{2}+1}{x^{2}+1}-2x\tan^{-1}x}{\left(x^{2}+1\right)^{2}}\ dx
```

So we can now apply inverse quotient rule:

```math
=\int x\left(\frac{d}{dx}\left(\frac{\tan^{-1}x}{x^{2}+1}\right)\right)\ dx
```

And now, it’s gotta be parts of course!

```math
=x\cdot\frac{\tan^{-1}x}{x^{2}+1}-\int \frac{\tan^{-1}x}{x^{2}+1}\ dx
```

Finally, we have inverse chain rule on the right, since $\frac{1}{x^2 + 1}$ is the derivative of $\tan^{-1}{x}$.

```math
=\frac{x\tan^{-1}x}{x^{2}+1}-\frac{1}{2}\left(\tan^{-1}x\right)^{2}-c
```
