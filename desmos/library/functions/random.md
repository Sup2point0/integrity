# Random Functions
<!-- #SQUARK live!
| dest = desmos/library/functions/random
| title = Random
| index = desmos / library / functions
| update = 2025 August 22
-->

This page documents library functions related to randomisation.


## Random Integer

```math
f_\text{randint} \left(\,
  s_\text{start},
  s_\text{stop},
  s_\text{seed}
\,\right)
```

Generate a random integer $x$ such that $s_\text{start} \leq x \leq s_\text{stop}$.

### Arguments
| Argument | Description | Domain | Constraints | Notes |
| :------- | :---------- | :----- | :---------- | :---- |
| $s_\text{start}$ | lower bound | $\mathbb{R}$ | $s_\text{start} < s_\text{stop}$ | |
| $s_\text{stop}$ | upper bound | $\mathbb{R}$ | $s_\text{start} < s_\text{stop}$ | |
| $s_\text{seed}$ | randomiser seed | $\mathbb{R}$ | | |

### Return
| Value | Description | Codomain | Constraints | Notes |
| :---- | :---------- | :------- | :---------- | :---- |
| $x$ | random integer | $\mathbb{Z}$ | $s_\text{start} \leq x \leq s_\text{stop}$ | |

### Usage
```desmos
f_{randint}\left(s_{start},\ s_{stop},\ s_{seed}\right)=\operatorname{floor}\left(s_{start}+\operatorname{random}\left(\right)\cdot\left(\left(s_{stop}+1\right)-s_{start}\right)\right)
f_{randint}\left(1,\ 10,\ 0.1\right)
```

### Implementation
```math
f_\text{randint} \left(\,
  s_\text{start}
  s_\text{stop}
  s_\text{seed}
\,\right)
=
\operatorname{floor}\left(
  s_{start}+\operatorname{random}\left(\right)\cdot\left(\left(s_{stop}+1\right)-s_{start}\right)
\right)
```

### Notes
- $s_\text{stop} < s_\text{start}$ results in unexpected behaviour due to the use of $\operatorname{floor}()$ and $s_\text{stop} + 1$.

### Dependencies
None
