---
topic: integrals
title: tension
desc: 
date: 2024 December 27
tags:
  - dread
  - poly
  - frac
methods:
  - work
---


## Question
```math
\int \frac{1}{1+\frac{1}{x}+\frac{1}{x^{2}}}\ dx
```


## Answer
```math
x-\frac{1}{2}\ln\left|x^{2}+x+1\right|-\frac{\sqrt{3}}{3}\tan^{-1}\left(\frac{\sqrt{3}}{3}\left(2x+1\right)\right)-c
```


## Solution

### Solve
```math
\begin{align*}
  &\ \int \frac{1}{1+\frac{1}{x}+\frac{1}{x^{2}}}\ dx
  \\ =&\ \int \frac{1}{1+\frac{1}{x}+\frac{1}{x^{2}}}\cdot\frac{x^{2}}{x^{2}}\ dx
  \\ =&\ \int \frac{x^{2}}{x^{2}+x+1}\ dx
  \\ =&\ \int \frac{x^{2}+x+1}{x^{2}+x+1}-\frac{x+1}{x^{2}+x+1}\ dx
  \\ =&\ \int dx-\frac{1}{2}\int \frac{2x+2}{x^{2}+x+1}dx
  \\ =&\ x-\frac{1}{2}\int \frac{2x+1}{x^{2}+x+1}+\frac{1}{x^{2}+x+1}\ dx
  \\ =&\ x-\frac{1}{2}\ln\left|x^{2}+x+1\right|-\frac{1}{2}\int \frac{1}{\left(x+\frac{1}{2}\right)^{2}+\frac{3}{4}}\ dx
  \\ =&\ x-\frac{1}{2}\ln\left|x^{2}+x+1\right|-\frac{1}{2}\sqrt{\frac{4}{3}}\tan^{-1}\left(\sqrt{\frac{4}{3}}\left(x+\frac{1}{2}\right)\right)
  \\ =&\ x-\frac{1}{2}\ln\left|x^{2}+x+1\right|-\frac{\sqrt{3}}{3}\tan^{-1}\left(\frac{2\sqrt{3}}{3}\left(x+\frac{1}{2}\right)\right)
  \\ =&\ x-\frac{1}{2}\ln\left|x^{2}+x+1\right|-\frac{\sqrt{3}}{3}\tan^{-1}\left(\frac{\sqrt{3}}{3}\left(2x+1\right)\right)-c
\end{align*}
```
