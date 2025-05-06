---
topic: integrals
title: sayonara
desc: This is a wild ride.
date: 2025 February 9
tags:
  - dread
  - sqrt
  - trig
methods:
  - long
  - tough
flags:
  - feat
---


## Question
```math
\int
  \sqrt{\frac
    { \tan{x} }
    { 1+\tan{x }
  }}
\ dx
```


## Hints

### 1
Before you substitute the entire integrand, I’d recommend simplifying the expression inside the $\sqrt{}$ a bit so that it’s easier to differentiate.

### 2
Now substitute the integrand.

### 3
Ah, a rational function, just what we like to see...

### 4
You can write all of the powers in terms of a lower power of another variable.

### 5
Find the complex solutions to the denominator.

### 6
Partial fractions works with complex roots too!

### 7
Write your integrands in terms of

```math
\frac{k}{ax^2 + b}
```

### 8
Just 2 arctans now.


## Answer
```math
\frac{1-i}{\sqrt{-2i-2}}\tan^{-1}\left(\sqrt{\frac{\tan x}{1+\tan x}}\sqrt{\frac{2}{-i-1}}\right)+\frac{1+i}{\sqrt{2i-2}}\tan^{-1}\left(\sqrt{\frac{\tan x}{1+\tan x}}\sqrt{\frac{2}{i-1}}\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \sqrt{\frac{\tan x}{1+\tan x}}\ dx
  \\ =&\ \int \sqrt{\frac{1+\tan x-1}{1+\tan x}}\ dx
  \\ =&\ \int \sqrt{1-\frac{1}{1+\tan x}}\ dx
\end{align*}
```

### Substitute (1)
```math
\begin{align*}
  1-\frac{1}{1+\tan x} &= t
  \\ \frac{1}{1+\tan x} &= 1-t
  \\ 1+\tan x &= \frac{1}{1-t}
  \\ \tan x &= \frac{1}{1-t}-1
  \\ &= \frac{1}{1-t}-\frac{1-t}{1-t}
  \\ &= \frac{1-\left(1-t\right)}{1-t}
  \\ &= \frac{t}{1-t}
  \\ x &= \tan^{-1}\left(\frac{t}{1-t}\right)
  \\ \Rightarrow\quad dx &= \frac{1}{1+\left(\frac{t}{1-t}\right)^{2}}\cdot\frac{\left(1-t\right)-t\left(-1\right)}{\left(1-t\right)^{2}}\ dt
  \\ &= \frac{1}{1+\frac{t^{2}}{\left(1-t\right)^{2}}}\cdot\frac{1-t+t}{\left(1-t\right)^{2}}\ dt
  \\ &= \frac{1}{1+\frac{t^{2}}{\left(1-t\right)^{2}}}\cdot\frac{1}{\left(1-t\right)^{2}}\ dt
  \\ &= \frac{1}{\left(1-t\right)^{2}+t^{2}}\ dt
  \\ &= \frac{1}{t^{2}-2t+1+t^{2}}\ dt
  \\ &= \frac{1}{2t^{2}-2t+1}\ dt
\end{align*}
```

### Simplify (1)
```math
\begin{align*}
  &\ \int \sqrt{1-\frac{1}{1+\tan x}}\ dx
  \\ =&\ \int \sqrt{t}\cdot\frac{1}{2t^{2}-2t+1}\ dt
  \\ =&\ \int \frac{\sqrt{t}}{2t^{2}-2t+1}\ dt
\end{align*}
```

### Substitute (2)
```math
\begin{align*}
  \sqrt{t} &= v
  \\ t &= v^{2}
  \\ dt &= 2v\ dv
\end{align*}
```

### Simplify (2)
```math
\begin{align*}
  &= \int \frac{v}{2v^{4}-2v^{2}+1}\cdot2v\ dv
  \\ &= \int \frac{v^{2}}{v^{4}-v^{2}+1/2}\ dv
\end{align*}
```

### Factorise
Write $v^2 = w$:

```math
\frac{v^{2}}{v^{4}-v^{2}+1/2}=\frac{w}{w^{2}-w+1/2}
```

Using quadratic formula:

```math
\begin{align*}
  w^{2}-w+\frac{1}{2} &= 0
  \\ w &= \frac{-b\pm\sqrt{b^{2}-4ac}}{2a}
  \\ &= \frac{1\pm\sqrt{1-2}}{2}
  \\ &= \frac{1\pm i}{2}
\end{align*}
```

```math
w=\frac{1+i}{2},\ w'=\frac{1-i}{2}
```

Therefore:

```math
\begin{align*}
  w^{2}-w+\frac{1}{2} &= \left(w-\frac{1+i}{2}\right)\left(w-\frac{1-i}{2}\right)
  \\ \frac{w}{w^{2}-w+1/2} &= \frac{w}{\left(w-\frac{1+i}{2}\right)\left(w-\frac{1-i}{2}\right)}
  \\ &= \frac{w}{\left(w-\frac{1+i}{2}\right)\left(w-\frac{1-i}{2}\right)}\cdot\frac{4}{4}
  \\ &= \frac{4w}{\left(2w-\left(1+i\right)\right)\left(2w-\left(1-i\right)\right)}
\end{align*}
```

### Complex Partial Fractions
```math
\begin{align*}
  \frac{4w}{\left(2w-\left(1+i\right)\right)\left(2w-\left(1-i\right)\right)} &= \frac{p}{2w-\left(1+i\right)}+\frac{q}{2w-\left(1-i\right)}
  \\ 4w &= p\left[2w-\left(1-i\right)\right]+q\left[2w-\left(1+i\right)\right]
\end{align*}
```

Let $w = \frac{1+i}{2}$:

```math
\begin{align*}
  4\left(\frac{1+i}{2}\right)
    &= p\left[2\left(\frac{1+i}{2}\right)-\left(1-i\right)\right]+q\left[2\left(\frac{1+i}{2}\right)-\left(1+i\right)\right]
  \\ 2+2i &= p\left[\left(1+i\right)-\left(1-i\right)\right]+q\left[\left(1+i\right)-\left(1+i\right)\right]
  \\ 2+2i &= p\left(2i\right)+0
  \\ p &= \frac{1}{i}+1
  \\ &= 1-i
\end{align*}
```

Let $w = \frac{1-i}{2}$:

```math
\begin{align*}
  4\left(\frac{1-i}{2}\right)
    &= p\left[2\left(\frac{1-i}{2}\right)-\left(1-i\right)\right]+q\left[2\left(\frac{1-i}{2}\right)-\left(1+i\right)\right]
  \\ 2\left(1-i\right) &= p\left[\left(1-i\right)-\left(1-i\right)\right]+q\left[\left(1-i\right)-\left(1+i\right)\right]
  \\ 2-2i &= 0+q\left(-2i\right)
  \\ qi &= i-1
  \\ q &= 1-\frac{1}{i}
  \\ &= 1+i
\end{align*}
```

Hence:

```math
\begin{align*}
  \frac{4w}{\left(2w-\left(1+i\right)\right)\left(2w-\left(1-i\right)\right)}=\frac{1-i}{2w-\left(1+i\right)}+\frac{1+i}{2w-\left(1-i\right)}
\end{align*}
```

### Solve
```math
\begin{align*}
  &\ \int \frac{v^{2}}{v^{4}-v^{2}+1/2}\ dv
  \\ =&\ =\int \frac{1-i}{2w-\left(1+i\right)}+\frac{1+i}{2w-\left(1-i\right)}\ dv
  \\ =&\ \int \frac{1-i}{2v^{2}-\left(1+i\right)}+\frac{1+i}{2v^{2}-\left(1-i\right)}\ dv
  \\ =&\ \frac{1}{2}\int \frac{1-i}{v^{2}-\left(\frac{1+i}{2}\right)}+\frac{1+i}{v^{2}-\frac{1-i}{2}}\ dv
  \\ =&\ \frac{1-i}{2}\int \frac{1}{v^{2}-\left(\frac{1+i}{2}\right)}\ dv+\frac{1+i}{2}\int \frac{1}{v^{2}-\left(\frac{1-i}{2}\right)}\ dv
  \\ =&\ \frac{1-i}{2}\int \frac{1}{v^{2}+\left(\frac{-i-1}{2}\right)}\ dv+\frac{1+i}{2}\int \frac{1}{v^{2}+\left(\frac{i-1}{2}\right)}\ dv
  \\ =&\ \frac{1-i}{2}\sqrt{\frac{2}{-i-1}}\tan^{-1}\left(v\sqrt{\frac{2}{-i-1}}\right)+\frac{1+i}{2}\sqrt{\frac{2}{i-1}}\tan^{-1}\left(v\sqrt{\frac{2}{i-1}}\right)
  \\ =&\ \frac{1-i}{\sqrt{-2i-2}}\tan^{-1}\left(v\sqrt{\frac{2}{-i-1}}\right)+\frac{1+i}{\sqrt{2i-2}}\tan^{-1}\left(v\sqrt{\frac{2}{i-1}}\right)
  \\ =&\ \frac{1-i}{\sqrt{-2i-2}}\tan^{-1}\left(\sqrt{t}\sqrt{\frac{2}{-i-1}}\right)+\frac{1+i}{\sqrt{2i-2}}\tan^{-1}\left(\sqrt{t}\sqrt{\frac{2}{i-1}}\right)
  \\ =&\ \frac{1-i}{\sqrt{-2i-2}}\tan^{-1}\left(\sqrt{1-\frac{1}{1+\tan x}}\sqrt{\frac{2}{-i-1}}\right)+\frac{1+i}{\sqrt{2i-2}}\tan^{-1}\left(\sqrt{1-\frac{1}{1+\tan x}}\sqrt{\frac{2}{i-1}}\right)
  \\ =&\ \frac{1-i}{\sqrt{-2i-2}}\tan^{-1}\left(\sqrt{\frac{\tan x}{1+\tan x}}\sqrt{\frac{2}{-i-1}}\right)+\frac{1+i}{\sqrt{2i-2}}\tan^{-1}\left(\sqrt{\frac{\tan x}{1+\tan x}}\sqrt{\frac{2}{i-1}}\right)-c
\end{align*}
```
