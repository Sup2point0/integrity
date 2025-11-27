# List Functions
<!-- #SQUARK live!
| dest = desmos/library/functions/lists
| title = Lists
| index = desmos / library / functions
| update = 2025 November 27
-->

This page documents library functions related to lists.


<br>


## Count Occurrences

```math
f_\text{count} \left(\,
  l,
  s
\,\right)
```

> Count the number of occurrences of a value $s$ in a list $l$.

### Arguments
| Argument | Description | Domain | Constraints | Notes |
| :------- | :---------- | :----- | :---------- | :---- |
| $l$ | source list | $\forall T: [T, ...]$ | | The list can be empty. |
| $s$ | target value | $T$ | | |

### Return
| Value | Description | Codomain | Constraints | Notes |
| :---- | :---------- | :------- | :---------- | :---- |
| $\omega$ | occurrence count | $\mathbb{N}$ | | $\omega = 0$ for an empty list. |

### Instances
```desmos
f_{count}\left(\left[\right],\ 1\right) - 0
f_{count}\left(\left[1\right],\ 1\right) - 1
f_{count}\left(\left[1,\ 1,\ 1\right],\ 1\right) - 3
```

### Implementation
```math
f_\text{count} \left(\,
  l
\,\right)
=
\operatorname{length}\left(l\left[l=s\right]\right)
```

### Dependencies
None


<br>


## Count Occurrences (parallelised)

```math
f_\text{countl} \left(\,
  l,
  l_s
\,\right)
```

> For each value $s$ in $l_s$, count the number of times $s$ appears in $l$.

### Arguments
| Argument | Description | Domain | Constraints | Notes |
| :------- | :---------- | :----- | :---------- | :---- |
| $l$ | source list | $\forall T: [T, ...]$ | | The list can be empty.
| $l_s$ | target values | $[T, ...]$ | | The list can be empty.

### Return
| Value | Description | Codomain | Constraints | Notes |
| :---- | :---------- | :------- | :---------- | :---- |
| $\omega$ | occurrence counts | $[\mathbb{N}, ...]$ | Same lenth as $l_s$ | Counts are in the same order as their corresponding values in $l_s$.

### Instances
```desmos
f_{countl}\left(\left[\right],\ \left[\right]\right)-\left[\right]
f_{countl}\left(\left[0,\ 1\right],\ \left[\right]\right)-\left[\right]
f_{countl}\left(\left[\right],\ \left[1\right]\right)-0
f_{countl}\left(\left[0,\ 1,\ 1,\ 1\right],\ \left[1\right]\right)-3
f_{countl}\left(\left[0,\ 1,\ 1,\ 1,\ 10,\ 10\right],\ \left[1,\ 10\right]\right)-\left[3,\ 2\right]
```

### Implementation
```math
\begin{align*}
  f_\text{countl} \left(\,
    l,
    l_s
  \,\right)
  =&\ 
  \{ \
    \operatorname{length}\left(l_{s}\right) = 0:\ \left[\right]
    \\
    &\ ,\ \left[\operatorname{length}\left(l\left[l=l_{s}\left[i\right]\right]\right)\operatorname{for}i=\left[1...\operatorname{length}\left(l_{s}\right)\right]\right]
  \\
  &\ \}
\end{align*}
```

### Dependencies
None


<br>


## Map Occurrences

```math
f_\text{counts} \left(\,
  l
\,\right)
```

> Map each unique value $s$ in $l$ to a $(s, c)$ point, where $c$ is the number of times $s$ appears in $l$.

### Arguments
| Argument | Description | Domain | Constraints | Notes |
| :------- | :---------- | :----- | :---------- | :---- |
| $l$ | source list | $\forall T \subseteq \mathbb{R}: [T, ...]$ | | List can be empty.

### Return
| Value | Description | Codomain | Constraints | Notes |
| :---- | :---------- | :------- | :---------- | :---- |
| $\omega$ | occurrence counts | $[(T, \mathbb{N}), ...]$ | Same length as $l$. | Points are in the same order as the corresponding values in $l$.

### Instances
```desmos
f_{counts}\left(\left[\right]\right)-\left[\right]
f_{counts}\left(\left[0,\ 10,\ 10\right]\right)-\left[\left(0,\ 1\right),\ \left(10,\ 2\right)\right]
f_{counts}\left(\left[0,\ 10,\ 0,\ 100,\ 10\right]\right)-\left[\left(0,\ 2\right),\ \left(10,\ 2\right),\ \left(100,\ 1\right)\right]
```

### Implementation
```math
\begin{align*}
  f_\text{counts} \left(\,
    l
  \,\right)
  =&\ 
  \{ \ 
    \operatorname{length}\left(l\right)=0:\ \left[\right]
    \\
    &\ \quad,\ \operatorname{unique}([
      \\ &\quad\quad\left(l\left[i\right],\ f_{count}\left(l,\ l\left[i\right]\right)\right)
      \\ &\quad\quad\operatorname{for}i=\left[1...\operatorname{length}\left(l\right)\right]
    \\
    &\ \quad])
  \\
  &\ \}
\end{align*}
```

### Dependencies
None
