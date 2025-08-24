# Interpolation Functions
<!-- #SQUARK live!
| dest = desmos/library/functions/interpolation
| title = Interpolation Functions
| index = desmos / library / functions
| update = 2025 August 24
-->

This page documents library functions related to interpolation.


## Linear Interpolation

```math
f_\text{lerp} \left(\,
  s_\text{start},
  s_\text{stop},
  t
\,\right)
```

Interpolate between $s_\text{start}$ and $s_\text{stop}$.

### Arguments
| Argument | Description | Domain | Constraints | Notes |
| :------- | :---------- | :----- | :---------- | :---- |
| $s_\text{start}$ | lower bound | $\mathbb{R}$ | | |
| $s_\text{stop}$ | upper bound | $\mathbb{R}$ | | |
| $t$ | progression | $\mathbb{R}$ | $0 \leq t \leq 1$ | |

### Return
| Value | Description | Codomain | Constraints | Notes |
| :---- | :---------- | :------- | :---------- | :---- |
| $\omega$ | interpolated value | $\mathbb{R}$ | $\omega \in [s_\text{start}, s_\text{stop}]$ | Can go outside range if $t$ is not in $[0, 1]$.

### Usage
```desmos
f_{lerp}\left(s_{start},\ s_{stop},\ t\right)=s_{start}+t\left(s_{stop}-s_{start}\right)
f_{lerp}\left(0,\ 100,\ 0.37\right)
```

### Implementation
```math
f_\text{lerp} \left(\,
  s_\text{start},
  s_\text{stop},
  t
\,\right)
=
s_{start}+t\left(s_{stop}-s_{start}\right)
```

### Dependencies
None
