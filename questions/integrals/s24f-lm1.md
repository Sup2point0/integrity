---
topic: integrals
title: pathological
desc: 
date: 2024 December 10
tags:
  - frac
  - trig
  - ln
  - horror
methods:
  - spot
---


## Question
```math
\int \frac{\ln\left(\sec x\right)-\ln\left(\csc x\right)}{\csc x\cos^{3}x}\ dx
```


## Answer
```math
\frac{1}{4}\left(\tan^{2}x\right)\left(2\ln\left(\tan x\right)-1\right)-c
```


## Solution

### Reshape
```math
\begin{align*}
  &\ \int \frac{\ln\left(\sec x\right)-\ln\left(\csc x\right)}{\csc x\cos^{3}x}\ dx
  \\ =&\ \int \frac{\ln\left(\sec x\right)-\ln\left(\csc x\right)}{\left(\csc x\right)\left(\cos x\right)^{3}}\ dx
  \\ =&\ \int \frac{\ln\left(\frac{1}{\cos x}\right)-\ln\left(\frac{1}{\sin x}\right)}{\left(\cos x\right)^{3}}\cdot\sin x\ dx
  \\ =&\ \int \frac{-\ln\left(\cos x\right)+\ln\left(\sin x\right)}{\left(\cos x\right)^{3}}\cdot\sin x\ dx
  \\ =&\ \int \frac{\ln\left(\sin x\right)-\ln\left(\cos x\right)}{\left(\cos x\right)^{3}}\cdot\sin x\ dx
  \\ =&\ \int \ln\left(\frac{\sin x}{\cos x}\right)\cdot\frac{1}{\left(\cos x\right)^{3}}\cdot\sin x\ dx
  \\ =&\ \int \ln\left(\tan x\right)\cdot\frac{1}{\cos^{2}x}\cdot\frac{\sin x}{\cos x}\ dx
  \\ =&\ \int \ln\left(\tan x\right)\left(\sec^{2}x\tan x\right)\ dx
  \\ =&\ \frac{1}{4}\int 2\ln\left(\tan x\right)\left(2\sec^{2}x\tan x\right)\ dx
  \\ =&\ \frac{1}{4}\int \ln\left(\tan^{2}x\right)\left(2\tan x\sec^{2}x\right)\ dx
\end{align*}
```

### Substitute
```math
\begin{align*}
  \tan^{2}x &= t
  \\ 2\tan x\sec^{2}x\ dx &= dt
\end{align*}
```

### Solve
```math
\begin{align*}
  &= \frac{1}{4}\int \ln t\ dt
  \\ &= \frac{1}{4}t\left(\ln t-1\right)
  \\ &= \frac{1}{4}\left(\tan^{2}x\right)\left(2\ln\left(\tan x\right)-1\right)-c
\end{align*}
```
