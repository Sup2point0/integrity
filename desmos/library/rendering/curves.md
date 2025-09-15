# Curve Renderers
<!-- #SQUARK live!
| dest = desmos/library/rendering/curves
| title = Curves
| index = desmos / library / rendering
| update = 2025 August 25
-->

This page documents library functions that render curves, such as circles and ellipses.


## Circle

```math
d_\text{circle} \left(\,
  p_\text{centre},
  r,
  x,
  y
\,\right)
```

Generate a circle at centre $p_\text{centre}$ with radius $r$.

### Arguments
| Argument | Description | Domain | Constraints | Notes |
| :------- | :---------- | :----- | :---------- | :---- |
| $p_\text{centre}$ | centre | $(\mathbb{R}, \mathbb{R})$ | | |
| $r$ | radius | $\mathbb{R}^{+}$ | | |
| $x$ | calculator $x$ | | | |
| $y$ | calculator $y$ | | | |

### Return
| Value | Description | Codomain | Constraints | Notes |
| :---- | :---------- | :------- | :---------- | :---- |
| $\omega$ | projection | $\mathbb{R}$ | | |

### Usage
Circles cannot be rendered by a function – an expression is needed. Compare the output of the renderer to $0$ using an inequality to render the circle.

```desmos
d_{circle}\left(p_{centre},\ r,\ x,\ y\right)=\left(x-p_{centre}.x\right)^{2}+\left(y-p_{centre}.y\right)^{2}-r^{2}
d_{circle}\left(\left(2,\ 2\right),\ 1,\ x,\ y\right)\le0
d_{circle}\left(\left(5,\ 5\right),\ 10,\ x,\ y\right)\ge0
```

### Implementation
```math
d_\text{circle} \left(\,
  p_\text{centre},
  r,
  x,
  y
\,\right)
=
\left(x-p_{centre}.x\right)^{2}+\left(y-p_{centre}.y\right)^{2}-r^{2}
```

For all points $(x, y)$ in the 2D plane, the renderer evaluates the formula of a circle with $(x, y)$ substituted in. Using an inequality renders the locus of points that form the circle.

### Dependencies
None


## Ellipse

```math
d_\text{ellipse} \left(\,
  p_\text{centre},
  p_\text{radii},
  x,
  y
\,\right)
```

Generate an ellipse at centre centre $p_\text{centre}$ with radii $p_\text{radii}$.

### Arguments
| Argument | Description | Domain | Constraints | Notes |
| :------- | :---------- | :----- | :---------- | :---- |
| $p_\text{centre}$ |  | $(\mathbb{R}, \mathbb{R})$ |
| $p_\text{radii}$ |  | $(\mathbb{R}^{+}, \mathbb{R}^{+})$ |
| $x$ | calculator $x$ | | | |
| $y$ | calculator $y$ | | | |

### Return
| Value | Description | Codomain | Constraints | Notes |
| :---- | :---------- | :------- | :---------- | :---- |
| $\omega$ | projection | $\mathbb{R}$ | | |

### Usage
Circles cannot be rendered by a function – an expression is needed. Compare the output of the renderer to $0$ using an inequality to render the circle.

```desmos
d_{ellipse}\left(p_{centre},\ p_{radii},\ x,\ y\right)=\left(\frac{x-p_{centre}.x}{p_{radii}.x/p_{radii}.y}\right)^{2}+\left(y-p_{centre}.y\right)^{2}-p_{radii}.y^{2}
d_{ellipse}\left(\left(0,\ 0\right),\ R,\ x,\ y\right)\le0
R=\left(X,\ Y\right)
X=3
Y=2
```

### Implementation
```math
d_\text{ellipse} \left(\,
  p_\text{centre},
  p_\text{radii},
  x,
  y
\,\right)
=
\left(\frac{x-p_{centre}.x}{p_{radii}.x/p_{radii}.y}\right)^{2}+\left(y-p_{centre}.y\right)^{2}-p_{radii}.y^{2}
```

Essentially, we’re drawing a circle with radius $p_\text{radii}.y$, then scaling it by the ratio $p_\text{radii}.x / p_\text{radii}.y$ to form the ellipse.

### Dependencies
None
