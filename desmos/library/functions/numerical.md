# Numerical Functions
<!-- #SQUARK live!
| dest = desmos/library/functions/numerical
| title = Numerical Functions
| index = desmos / library / functions
| update = 2025 August 21
-->

This page documents library functions that purely process numbers.


## Minmax Clamp

```math
f_\text{clamp} \left(\,
  s,
  s_\text{min},
  s_\text{max}
\,\right)
```

Clamp a number $s$ between $s_\text{min}$ and $s_\text{max}$.

### Arguments
| Argument | Description | Domain | Constraints | Notes |
| :------- | :---------- | :----- | :---------- | :---- |
| $s$ | input | $\mathbb{R}$ | |
| $s_\text{min}$ | lower bound | $\mathbb{R}$ | |
| $s_\text{max}$ | upper bound | $\mathbb{R}$ | |

### Return
| Value | Description | Codomain | Constraints | Notes |
| :---- | :---------- | :------- | :---------- | :---- |
| $\omega$ | clamped value | $\mathbb{R}$ | $s_\text{min} \leq \omega \leq s_\text{max}$ | |

### Usage
```desmos
f_{clamp}\left(s,\ s_{min},\ s_{max}\right)=\left\{s<s_{min}\ :\ s_{min},\ s>s_{max}\ :\ s_{max},\ s\right\}
f_{clamp}\left(42,\ 0,\ 1\right)
f_{clamp}\left(x,\ -10,\ 10\right)
```

### Implementation
```math
f_\text{clamp} \left(\,
  s,
  s_\text{min},
  s_\text{max}
\,\right)
=
\left\{s<s_{min}\ :\ s_{min},\ s>s_{max}\ :\ s_{max},\ s\right\}
```

### Dependencies
None
