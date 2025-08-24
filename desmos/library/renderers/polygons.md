# Polygon Renderers
<!-- #SQUARK live!
| dest = desmos/library/rendering/polygons
| title = Polygons
| index = desmos / library / rendering
| update = 2025 August 21
-->

This page documents library functions that render polygons.


## $n$-Sided Regular Polygon

```math
d_\text{polygon} \left(\,
  n,
  p_\text{centre},
  r,
  d
\,\right)
```

Generate vertices of an $n$-sided regular polygon.

### Arguments
| Argument | Description | Type | Constraints | Notes |
| :------- | :---------- | :--- | :---------- | :---- |
| $n$ | number of sides | $\mathbb{Z}^{+}$ | $3 \leq n$ (required) |
| $p_\text{centre}$ | centre | $(\mathbb{R}, \mathbb{R})$ |
| $r$ | radius of the polygon | $\mathbb{R}$ | $r \neq 0$ (required) <br> $0 < r$ | "Radius" refers to the distance from the centre of the polygon to any vertex. |
| $d$ | direction (rotation) | $\mathbb{R}$ | $0 \leq d < 2\pi$ |  |

### Return
| Value | Description | Type | Constraints | Notes |
| :---- | :---------- | :--- | :---------- | :---- |
| $\omega$ | polygon vertices | $[(\mathbb{R}, \mathbb{R}), ...]$ | | Use $\operatorname{polygon}(\omega)$ to render the polygon. |

### Usage
```desmos
f_{nrange}\left(s_{start},\ s_{stop},\ n\right)=\left[\left(s_{start}+i\left(\frac{s_{stop}-s_{start}}{n-1}\right)\right)\operatorname{for}i=\left[0...\left(n-1\right)\right]\right]
d_{polygon}\left(n,\ p_{centre},\ r,\ d\right)=\left[\left(p_{centre}.x+r\cos\theta,\ p_{centre}.y+r\sin\theta\right)\operatorname{for}\theta=f_{nrange}\left(d,\ d+2\pi,\ n+1\right)\right]
\operatorname{polygon}\left(d_{polygon}\left(6,\ \left(0,\ 0\right),\ 4,\ \frac{\pi}{6}\right)\right)
```

### Implementation
```math
d_\text{polygon} \left(\,
  n,
  p_\text{centre},
  r,
  d
\,\right)
=
\left[\,
  \left(p_{centre}.x+r\cos\theta,\ p_{centre}.y+r\sin\theta\right)\operatorname{for}\theta=f_{nrange}\left(d,\ d+2\pi,\ n+1\right)
\,\right]
```

### Dependencies
- $f_\text{nrange}()$


## Rectangle

```math
d_\text{rect} \left(\,
  p_\text{centre},
  s_\text{width},
  s_\text{height}
\,\right)
```

Draw a rectangle at centre $p_\text{centre}$ with dimensions $s_\text{width} \times s_\text{height}$.

### Arguments
| Argument | Description | Type | Constraints | Notes |
| :------- | :---------- | :--- | :---------- | :---- |
| $p_\text{centre}$ | rectangle centre | $(\mathbb{R}, \mathbb{R})$ | | |
| $s_\text{width}$ | rectangle width | $\mathbb{R}^{+}$ | | $x$ dimension |
| $s_\text{height}$ | rectangle height | $\mathbb{R}^{+}$ | | $y$ dimension |

### Return
None

### Usage
```desmos
d_{rect}\left(p_{centre},\ s_{width},\ s_{height}\right)=\operatorname{polygon}\left(p_{centre}+\left(-\frac{s_{width}}{2},\ -\frac{s_{height}}{2}\right),\ p_{centre}+\left(\frac{s_{width}}{2},\ -\frac{s_{height}}{2}\right),\ p_{centre}+\left(\frac{s_{width}}{2},\ \frac{s_{height}}{2}\right),\ p_{centre}+\left(-\frac{s_{width}}{2},\ \frac{s_{height}}{2}\right)\right)
d_{rect}\left(\left(3,\ 2\right),\ 4,\ 1\right)
```

### Implementation
```math
d_\text{rect} \left(\,
  p_\text{centre},
  s_\text{width},
  s_\text{height}
\,\right)
=
\operatorname{polygon}\left(p_{centre}+\left(-\frac{s_{width}}{2},\ -\frac{s_{height}}{2}\right),\ p_{centre}+\left(\frac{s_{width}}{2},\ -\frac{s_{height}}{2}\right),\ p_{centre}+\left(\frac{s_{width}}{2},\ \frac{s_{height}}{2}\right),\ p_{centre}+\left(-\frac{s_{width}}{2},\ \frac{s_{height}}{2}\right)\right)
```

### Dependencies
None
