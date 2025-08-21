# Polygon Renderers
<!-- #SQUARK live!
| dest = desmos/library/rendering/polygons
| index = desmos / library / rendering / polygons
| update = 2025 August 21
-->

> Base: $d$

This page documents library functions that render polygons.


## $n$-Sided Regular Polygon

```math
d_\text{polygon} \left(\,
  n,
  p_c,
  r,
  d
\,\right)
```

> Generate vertices of an $n$-sided regular polygon.

### Arguments
| Argument | Description | Type | Constraints | Notes |
| :------- | :---------- | :--- | :---------- | :---- |
| $n$ | number of sides | $\mathbb{Z}^{+}$ | $3 \leq n$ (required) |
| $p_c$ | centre | $(\mathbb{R}, \mathbb{R})$ |
| $r$ | radius of the polygon | $\mathbb{R}$ | $r \neq 0$ (required) <br> $0 < r$ | "Radius" refers to the distance from the centre of the polygon to any vertex. |
| $d$ | direction (rotation) | $\mathbb{R}$ | $0 \leq d < 2\pi$ |  |

### Return
| Description | Type | Constraints | Notes |
| :---------- | :--- | :---------- | :---- |
| polygon vertices | $[(\mathbb{R}, \mathbb{R}), ...]$ | | |

### Usage
```desmos
f_{nrange}\left(s_{start},\ s_{stop},\ n\right)=\left[\left(s_{start}+i\left(\frac{s_{stop}-s_{start}}{n-1}\right)\right)\operatorname{for}i=\left[0...\left(n-1\right)\right]\right]
d_{polygon}\left(n,\ p_{c},\ r,\ d\right)=\left[\left(p_{c}.x+r\cos\theta,\ p_{c}.y+r\sin\theta\right)\operatorname{for}\theta=f_{nrange}\left(d,\ d+2\pi,\ n+1\right)\right]
\operatorname{polygon}\left(d_{polygon}\left(6,\ \left(0,\ 0\right),\ 4,\ \frac{\pi}{6}\right)\right)
```

### Implementation
```math
d_\text{polygon} \left(\,
  n,
  p_c,
  r,
  d
\,\right)
=
\left[\,
  \left(p_{c}.x+r\cos\theta,\ p_{c}.y+r\sin\theta\right)\operatorname{for}\theta=f_{nrange}\left(d,\ d+2\pi,\ n+1\right)
\,\right]
```

### Dependencies
- $f_\text{nrange}()$
