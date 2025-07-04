---
topic: integrals
title: Elite Varkolyn Vanguard Special Combat Assault Rifle
desc: 
date: 2025 April 3
difficulty: manifold
tags:
  - horror
  - trig
  - exp
methods:
  - fun
  - sub
  - parts
---


## Question
```math
\int
  \frac{1}
    { \sin{2x} \tan{2x} }
  2580^{
    \sqrt{
      (\tan{x}+1)^2 + (\cot{x}+1)^2 -
      (\sec^2{x} + \csc^2{x})
    }
  }
\ dx
```


## Hints

### 1
You can simplify the expression inside the $\sqrt{}$.

### 2
You can expand the expression outside.

### 3
What’s the relationship between the 2 expressions?


## Answer
```math
\frac{2580^{\sqrt{2\tan x+2\cot x}}}{4\left(\ln2580\right)^{2}}\left(1-\ln\left(2580\right)\sqrt{2\tan x+2\cot x}\right)-c
```


## Solution

### Simplify (1)
```math
\begin{align*}
  &\ \left(\tan x+1\right)^{2}+\left(\cot x+1\right)^{2}-\left(\sec^{2}x+\csc^{2}x\right)
  \\ =&\ \left(\tan^{2}x+2\tan x+1\right)+\left(\cot^{2}x+2\cot x+1\right)-\left(\sec^{2}x+\csc^{2}x\right)
  \\ =&\ \left(\tan^{2}x+1\right)+2\tan x+\left(\cot^{2}x+1\right)+2\cot x-\sec^{2}x-\csc^{2}x
  \\ =&\ \sec^{2}x+2\tan x+\csc^{2}x+2\cot x-\sec^{2}x-\csc^{2}x
  \\ =&\ 2\tan x+2\cot x
\end{align*}
```

### Simplify (2)
```math
\begin{align*}
  &\ \int \left(\frac{1}{\sin2x\tan2x}\right)2580^{\sqrt{\left(\tan x+1\right)^{2}+\left(\cot x+1\right)^{2}-\left(\sec^{2}x+\csc^{2}x\right)}}\ dx
  \\ =&\ \int \left(\frac{1}{\sin2x\tan2x}\right)2580^{\sqrt{2\tan x+2\cot x}}\ dx
\end{align*}
```

### Simplify (3)
```math
\begin{align*}
  &\ \frac{1}{\sin2x\tan2x}
  \\ =&\ \frac{\cos2x}{\left(\sin2x\right)^{2}}
  \\ =&\ \frac{\cos^{2}x-\sin^{2}x}{\left(2\sin x\cos x\right)^{2}}
  \\ =&\ \frac{\cos^{2}x-\sin^{2}x}{4\sin^{2}x\cos^{2}x}
  \\ =&\ \frac{1}{4}\left(\frac{1}{\sin^{2}x}-\frac{1}{\cos^{2}x}\right)
  \\ =&\ \frac{1}{4}\left(\csc^{2}x-\sec^{2}x\right)
\end{align*}
```

### Simplify (4)
```math
\begin{align*}
  &\ \int \left(\frac{1}{\sin2x\tan2x}\right)2580^{\sqrt{2\tan x+2\cot x}}\ dx
  \\ =&\ \int \frac{1}{4}\left(\csc^{2}x-\sec^{2}x\right)2580^{\sqrt{2\tan x+2\cot x}}\ dx
  \\ =&\ \frac{1}{4}\int \left(\csc^{2}x-\sec^{2}x\right)2580^{\sqrt{2\tan x+2\cot x}}\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \sqrt{2\tan x+2\cot x}=t
  \\ 2\tan x+2\cot x=t^{2}
  \\ \tan x+\cot x=\frac{1}{2}t^{2}
  \\ \left(\sec^{2}x-\csc^{2}x\right)\ dx=t\ dt
  \\ \left(\csc^{2}x-\sec^{2}x\right)\ dx=-t\ dt
\end{align*}
```

### Solve (1)
```math
\begin{align*}
  &\ \frac{1}{4}\int 2580^{\sqrt{2\tan x+2\cot x}}\left(\csc^{2}x-\sec^{2}x\right)\ dx
  \\ =&\ \frac{1}{4}\int 2580^{t}\cdot-t\ dt
  \\ =&\ -\frac{1}{4}\int te^{\left(\ln2580\right)t}\ dt
\end{align*}
```

### Parts
```math
\begin{align*}
      f &= t \quad&\quad g' &= e^{\left(\ln2580\right)t}
  \\ f' &= 1 \quad&\quad g &= \frac{1}{\ln2580}e^{\left(\ln2580\right)t}
\end{align*}
```

### Solve (2)
```math
\begin{align*}
  &\ -\frac{1}{4}\left(fg-\int f'g\ dt\right)
  \\ =&\ -\frac{1}{4}\left(t\cdot\frac{1}{\ln2580}e^{\left(\ln2580\right)t}-\int \frac{1}{\ln2580}e^{\left(\ln2580\right)t}\ dt\right)
  \\ =&\ -\frac{1}{4}\left(\frac{t}{\ln2580}e^{\left(\ln2580\right)t}-\frac{1}{\left(\ln2580\right)^{2}}e^{\left(\ln2580\right)t}\right)
  \\ =&\ -\frac{t}{4\ln2580}2580^{t}+\frac{1}{4\left(\ln2580\right)^{2}}2580^{t}
  \\ =&\ \frac{2580^{t}}{4\left(\ln2580\right)^{2}}\left(1-t\ln2580\right)
  \\ =&\ \frac{2580^{\sqrt{2\tan x+2\cot x}}}{4\left(\ln2580\right)^{2}}\left(1-\ln\left(2580\right)\sqrt{2\tan x+2\cot x}\right)-c
\end{align*}
```
