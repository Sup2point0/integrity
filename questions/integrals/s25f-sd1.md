---
topic: integrals
title: slice and dice
desc: 
date: 2025 January 9
tags:
  - poly
  - frac
method:
  - poly div
---


## Question
```math
\int_{\ }^{\ }\frac{x^{7}}{x^{2}+1}\ dx
```


## Answer
```math
\frac{1}{6}x^{6}-\frac{1}{4}x^{4}+\frac{1}{2}x^{2}-\frac{1}{2}\ln\left(x^{2}+1\right)
```


## Solution

### Polynomial Division
```math
\begin{align*}
  &\ \int_{\ }^{\ }\frac{x^{7}}{x^{2}+1}\ dx
  \\ =&\ \int_{\ }^{\ }x^{5}-x^{3}+x-\frac{x}{x^{2}+1}\ dx
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{1}{6}x^{6}-\frac{1}{4}x^{4}+\frac{1}{2}x^{2}-\frac{1}{2}\int_{\ }^{\ }\frac{2x}{x^{2}+1}\ dx
  \\ &= \frac{1}{6}x^{6}-\frac{1}{4}x^{4}+\frac{1}{2}x^{2}-\frac{1}{2}\ln\left(x^{2}+1\right)
\end{align*}
```


## Alternate

We could also make a trigonometric substitution!

```math
\begin{align*}
  x &= \tan{t}
  \\ dx &= \sec^2{t}\ dt
\end{align*}
```

Then recursively expand through the identity $\tan^2{t} + 1 = \sec^2{t}$...

```math
\begin{align*}
  &\ \int_{\ }^{\ }\frac{x^{7}}{x^{2}+1}\ dx
  \\ =&\ \int_{\ }^{\ }\frac{\left(\tan t\right)^{7}}{\sec^{2}t}\cdot\sec^{2}t\ dt
  \\ =&\ \int_{\ }^{\ }\left(\tan t\right)^{7}\ dt
  \\ =&\ \int_{\ }^{\ }\left(\tan t\right)^{5}\left(\sec^{2}t-1\right)\ dt
  \\ =&\ \int_{\ }^{\ }\left(\tan t\right)^{5}\sec^{2}t\ dt-\int_{\ }^{\ }\left(\tan t\right)^{5}\ dt
  \\ =&\ \frac{1}{6}\left(\tan t\right)^{6}-\int_{\ }^{\ }\left(\tan t\right)^{3}\left(\sec^{2}t-1\right)\ dt
  \\ =&\ \frac{1}{6}\left(\tan t\right)^{6}-\int_{\ }^{\ }\left(\tan t\right)^{3}\sec^{2}t\ dt+\int_{\ }^{\ }\left(\tan t\right)^{3}\ dt
  \\ =&\ \frac{1}{6}\left(\tan t\right)^{6}-\frac{1}{4}\left(\tan t\right)^{4}+\int_{\ }^{\ }\left(\tan t\right)\left(\sec^{2}t-1\right)\ dt
  \\ =&\ \frac{1}{6}\left(\tan t\right)^{6}-\frac{1}{4}\left(\tan t\right)^{4}+\int_{\ }^{\ }\left(\tan t\right)\sec^{2}t-\int_{\ }^{\ }\tan t\ dt
  \\ =&\ \frac{1}{6}\left(\tan t\right)^{6}-\frac{1}{4}\left(\tan t\right)^{4}+\frac{1}{2}\left(\tan t\right)^{2}+\ln\left(\cos t\right)
  \\ =&\ \frac{1}{6}x^{6}-\frac{1}{4}x^{4}+\frac{1}{2}x^{2}+\ln\left(\frac{1}{\sqrt{x^{2}+1}}\right)
  \\ =&\ \frac{1}{6}x^{6}-\frac{1}{4}x^{4}+\frac{1}{2}x^{2}-\frac{1}{2}\ln\left(x^{2}+1\right)-c
\end{align*}
```

...maybe not quicker, but perhaps more fun!
