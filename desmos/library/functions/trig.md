# Trigonometric Functions
<!-- #SQUARK live!
| dest = desmos/library/functions/trig
| title = Trigonometry
| index = desmos / library / functions
| update = 2025 August 22
-->


## Corrected Arctangent

```math
f_\text{atan2} \left(\,
  x,
  y
\,\right)
```

Compute the corrected arctangent of $x, y$.

### Arguments
| Argument | Description | Type | Constraints | Notes |
| :------- | :---------- | :--- | :---------- | :---- |
| $x$ |  | $\mathbb{R}$ | | |
| $y$ |  | $\mathbb{R}$ | | |

### Return
| Value | Description | Type | Constraints | Notes |
| :---- | :---------- | :--- | :---------- | :---- |
| $\theta$ | direction angle | $\mathbb{R}$ | $-\pi < \theta \leq \pi$ | |

### Usage
```desmos
f_{atan2}\left(x,\ y\right)=\left\{x>0:\tan^{-1}\left(\frac{y}{x}\right),\ x<0:\ \left\{y<0:\tan^{-1}\left(\frac{y}{x}\right)-\pi,\tan^{-1}\left(\frac{y}{x}\right)+\pi\right\},\ x=0:\ \left\{y>0:\ \frac{\pi}{2},\ y<0:\ -\frac{\pi}{2},\ 0\right\},\ 0\right\}
\phi=f_{atan2}\left(P.x,\ P.y\right)
\left(t\cos\phi,\ t\sin\phi\right)
P=\left(0.2,\ 0.2\right)
```

### Implementation
```math
f_\text{atan2} \left(\,
  x,
  y
\,\right)
=
\left\{
  x>0:\tan^{-1}\left(\frac{y}{x}\right),\ x<0:\ \left\{y<0:\tan^{-1}\left(\frac{y}{x}\right)-\pi,\tan^{-1}\left(\frac{y}{x}\right)+\pi\right\},\ x=0:\ \left\{y>0:\ \frac{\pi}{2},\ y<0:\ -\frac{\pi}{2},\ 0\right\},\ 0
\right\}
```

### Dependencies
None
