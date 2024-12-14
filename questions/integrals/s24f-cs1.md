---
topic: integrals
title: 
desc: 
date: 2024 December 8
tags:
  - horror
  - spot
  - trig
  - work
---


## Question
```math
\left(\int_{\pi-1}^{2\pi-1}\frac{1}{2}\left(1-\cos\left(\frac{\pi}{2}\right)\right)\sin\left(\frac{x+1}{2}\right)\ dx\right)^{2}-\frac{1}{2}\int_{\pi-1}^{-\pi-1}\cos\left(\frac{x+1}{2}\right)\ dx
```


## Hint

### 1

### 2


## Answer
$3$


## Solution

### Preamble
Well this just looks horrific, doesn’t it? As usual, we surmise this means there must be some nice trick, secret or simplification we can find.

At a surface glance, there appear to be many symmetries and perhaps obvious substitutions; these will certainly come in helpful later on.

We might be tempted to expand things out or use various double angle formulae, but these would probably get out of hand pretty quickly.

Let’s start by cleaning up the terms a bit, so that the question is a little easier to work with. We can pull out a constant coefficient from the first integral:

```math
\left[\frac{1}{2}\left(1-\cos\left(\frac{\pi}{2}\right)\right)\right]^{2}\cdot\left[\int_{\pi-1}^{2\pi-1}\sin\left(\frac{x+1}{2}\right)\ dx\right]^{2}-\frac{1}{2}\left[\int_{\pi-1}^{-\pi-1}\cos\left(\frac{x+1}{2}\right)\ dx\right]
```

Now expanding it out, we find we can evaluate that coefficient quite easily:

```math
\begin{align*}
  &= \left(\frac{1}{2}\left(1-0\right)\right)^{2}\cdot\left[\int_{\pi-1}^{2\pi-1}\sin\left(\frac{x+1}{2}\right)\ dx\right]^{2}-\frac{1}{2}\left[\int_{\pi-1}^{-\pi-1}\cos\left(\frac{x+1}{2}\right)\ dx\right]
  \\ &= \frac{1}{4}\left[\int_{\pi-1}^{2\pi-1}\sin\left(\frac{x+1}{2}\right)\ dx\right]^{2}-\frac{1}{2}\left[\int_{\pi-1}^{-\pi-1}\cos\left(\frac{x+1}{2}\right)\ dx\right]
\end{align*}
```

### Substitute
There really isn’t anything else to do here, so let’s go ahead and make the substitution screaming at us.

```math
\begin{align*}
  t &= \frac{x+1}{2}
  \\ dt &= \frac{1}{2}dx\ \to\ dx=2\ dt
\end{align*}
```

We’ll need to adjust our limits, and it turns out this actually makes the question quite a lot nicer!

```math
\begin{align*}
  &= \frac{1}{4}\left(\int_{\pi/2}^{\pi}\sin t\cdot2\ dt\right)^{2}-\frac{1}{2}\left(\int_{\pi/2}^{-\pi/2}\cos t\cdot2\ dt\right)
  \\ &= \left(\int_{\pi/2}^{\pi}\sin t\ dt\right)^{2}-\int_{\pi/2}^{-\pi/2}\cos t\ dt
\end{align*}
```

### Reshape
At this point both integrals are almost quotable, but as maths-loving adventurers let’s have some fun.

Those limits on $\int cos t \, dt$ look a little wack, so we’ll flip them and change the sign on the outside.

```math
\begin{align*}
  &= \left(\int_{\pi/2}^{\pi}\sin t\ dt\right)^{2}+\int_{-\pi/2}^{\pi/2}\cos t\ dt
\end{align*}
```

And since $cos t$ is an even function, we can halve its integral like so:

```math
\begin{align*}
  &= \left(\int_{\pi/2}^{\pi}\sin t\ dt\right)^{2}+2\int_{0}^{\pi/2}\cos t\ dt
\end{align*}
```

Now wait, $sin t$ is just a translation of $cos t$ by $\pi/2$ in the positive x direction. So we can make a substitution (left as an exercise to the reader) and rewrite its integral like so:

```math
\begin{align*}
  &= \left(\int_{0}^{\pi/2}\cos t\ dt\right)^{2}+2\int_{0}^{\pi/2}\cos t\ dt
\end{align*}
```

Woah, what’s this? Disguised quadratic?!

Both of our terms are the same integral, so if we let that integral be $T$, then we have

```math
\begin{align*}
  &= T^{2}+2T
  \\ &= \left(T+1\right)^{2}-1
\end{align*}
```
(This was originally intended to be a completing the square question, lmao.)

### Solve
Anyway, we can evaluate our integral now. Well, we could have a long time ago, and doing this hasn’t even made it that much easier, but hey – it’s about the journey ^v^

```math
\begin{align*}
  &= \left(\sin\left(\frac{\pi}{2}\right)+1\right)^{2}-1
  \\ &= \left(1+1\right)^{2}-1
  \\ &= 3
\end{align*}
```
