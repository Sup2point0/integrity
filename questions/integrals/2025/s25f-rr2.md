---
topic: integrals
title: rubic reference
desc: RUBIC HEXECUTION
date: 2025 April 1
difficulty: chaos
tags:
  - horror
  - wack
methods:
  - acc
---


## Question
```math
\int
  \int
    \int
      \frac
        { \operatorname{hav}( \vartheta-\varphi ) }
        { \operatorname{exsec}^{-1}( 0 ) }
      +
      \frac
        {
          \cos(\vartheta) \cos(\varphi)
          \operatorname{vers}( \lambda )
        }
        {
          \operatorname{crd}( \pi )
          \operatorname{covers}( \tau/2 )
        }
    \ d \vartheta
  \ d\varphi
\ d\lambda
```


## Hints

### 1
$\operatorname{vers}(\theta)$ denotes the <a target="_blank" href="https://wikipedia.org/wiki/Versine"><em>versed sine</em></a>, equivalent to $1 - \cos(\theta)$.

### 2
$\operatorname{covers}(\theta)$ denotes the <a target="_blank" href="https://wikipedia.org/wiki/Versine#cvs">complementary of versine</a>, i.e. $1 - \sin(\theta)$.

### 3
$\operatorname{hav}(\theta)$ denotes the <a target="_blank" href="https://wikipedia.org/wiki/Versine#hav"><em>haversine</em></a>, equivalent to $\displaystyle \frac{1}{2} \operatorname{vers}(\theta)$.

### 4
$\operatorname{exsec}(\theta)$ denotes the <a target="_blank" href="https://wikipedia.org/wiki/Exsecant"><em>exsecant</em></a>, equivalent to $\sec(\theta) - 1$.

### 5
$\operatorname{crd}(\theta)$ denotes the <a target="_blank" href="https://wikipedia.org/wiki/Chord_(geometry)"><em>chord</em></a>, given by $2\sin(\theta/2)$.


## Answer
```math
\frac{1}{2\pi} \left(\vartheta+c_{\text{I}}\right)\left(\varphi+c_{\text{II}}\right)\left(\lambda+c_{\text{III}}\right)
    -\frac{1}{2\pi} \left(\cos(\vartheta-\varphi) + c_{\text{IV}}\varphi\right)(\lambda + c_{\text{V}})
    +\frac{1}{2} (\lambda + c_{\text{VI}}) \left[\sin(\vartheta)\sin(\varphi)-\sin(\vartheta)\sin(\varphi)\cos(\lambda) \right] - c_{\text{VII}}
```


## Solution

### Etho’s Dishwasher
```math
\begin{align*}
  &\ \int \int \int
      \frac{\operatorname{hav}(\vartheta-\varphi)}{\operatorname{exsec}^{-1}(-2)} +
      \frac{\cos(\vartheta)\cos(\varphi)\operatorname{vers}(\lambda)}{\operatorname{crd}(\pi)\operatorname{covers}(\tau/2)}
    \ d\vartheta \ d\varphi \ d\lambda
  \\ =&\ \int \int \int
      \frac{\frac{1}{2}-\frac{1}{2}\cos(\vartheta-\varphi)}{\sec^{-1}(-2+1)} +
      \frac{\cos(\vartheta)\cos(\varphi)\left(1-\cos(\lambda)\right)}{2\sin(\pi/2)\left(1-\sin(\pi)\right)}
    \ d\vartheta \ d\varphi \ d\lambda
  \\ =&\ \frac{1}{2} \int \int \int
      \frac{1-\cos(\vartheta-\varphi)}{\pi} +
      \frac{\cos(\vartheta)\cos(\varphi)\left(1-\cos(\lambda)\right)}{1\cdot\left(1-0\right)}
    \ d\vartheta \ d\varphi \ d\lambda
  \\ =&\ \frac{1}{2} \int \int \int
      \frac{1}{\pi}-\frac{\cos(\vartheta-\varphi)}{\pi} +
      \cos(\vartheta)\cos(\varphi)-\cos(\vartheta)\cos(\varphi)\cos(\lambda)
    \ d\vartheta \ d\varphi \ d\lambda
\end{align*}
```

### Putrid Poultry
```math
\begin{align*}
  &= \frac{1}{2\pi} \int \int \int \ d\vartheta \ d\varphi \ d\lambda
    -\frac{1}{2\pi} \int \int \int \cos(\vartheta-\varphi) \ d\vartheta \ d\varphi \ d\lambda
    +\frac{1}{2} \int \int \int
      \cos(\vartheta)\cos(\varphi)-\cos(\vartheta)\cos(\varphi)\cos(\lambda)
    \ d\vartheta \ d\varphi \ d\lambda
  \\ &= \frac{1}{2\pi} \int \ d\vartheta \int \ d\varphi \int \ d\lambda
    -\frac{1}{2\pi} \int \int \sin(\vartheta-\varphi) +c_{\text{IV}} \ d\varphi \ d\lambda
    +\frac{1}{2} \int \int
      \sin(\vartheta)\cos(\varphi)-\sin(\vartheta)\cos(\varphi)\cos(\lambda)
    \ d\varphi \ d\lambda
  \\ &= \frac{1}{2\pi} \left(\vartheta+c_{\text{I}}\right)\left(\varphi+c_{\text{II}}\right)\left(\lambda+c_{\text{III}}\right)
    -\frac{1}{2\pi} \int \cos(\vartheta-\varphi) + c_{\text{IV}}\varphi \ d\lambda
    +\frac{1}{2} \int
      \sin(\vartheta)\sin(\varphi)-\sin(\vartheta)\sin(\varphi)\cos(\lambda)
    \ d\lambda
  \\ &= \frac{1}{2\pi} \left(\vartheta+c_{\text{I}}\right)\left(\varphi+c_{\text{II}}\right)\left(\lambda+c_{\text{III}}\right)
    -\frac{1}{2\pi} \left(\cos(\vartheta-\varphi) + c_{\text{IV}}\varphi\right)(\lambda + c_{\text{V}})
    +\frac{1}{2} (\lambda + c_{\text{VI}}) \left[\sin(\vartheta)\sin(\varphi)-\sin(\vartheta)\sin(\varphi)\cos(\lambda) \right] - c_{\text{VII}}
\end{align*}
```
