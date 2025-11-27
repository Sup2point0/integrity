# Sequence Functions
<!-- #SQUARK live!
| dest = desmos/library/functions/sequences
| title = Sequences
| index = desmos / library / functions
| update = 2025 November 27
-->

This page documents library functions related to sequences.


<br>


## Fibonacci

```math
g_\text{fib} \left(\,
  n
\,\right)
```

> Generate the Fibonacci sequence up to its $n$-th term.

### Arguments
| Argument | Description | Domain | Constraints | Notes |
| :------- | :---------- | :----- | :---------- | :---- |
| $n$ | terms count | $\mathbb{Z}$ | $0 < n$ |

### Return
| Value | Description | Codomain | Constraints | Notes |
| :---- | :---------- | :------- | :---------- | :---- |
| $\omega$ | terms | $[\mathbb{N}, ...]$ | | Produces an empty list for invalid $n$. |

### Instances
```desmos
g_\text{fib}\left(0\right)-\left[\right]
g_\text{fib}\left(1\right)-\left[0\right]
g_\text{fib}\left(2\right)-\left[0,\ 1\right]
g_\text{fib}\left(3\right)-\left[0,\ 1,\ 1\right]
g_\text{fib}\left(7\right)-\left[0,\ 1,\ 1,\ 2,\ 3,\ 5,\ 8\right]
g_\text{fib}\left(13\right)-\left[0,\ 1,\ 1,\ 2,\ 3,\ 5,\ 8,\ 13,\ 21,\ 34,\ 55,\ 89,\ 144\right]
```

### Implementation
```math
\begin{align*}
  g_\text{fib}\left(n\right) &=
    \{ \ 
      n\le0:\ \left[\right],
      \\ &\quad\quad\ n=1:\ \left[0\right],
      \\ &\quad\quad\ n=2:\ \left[0,\ 1\right],
      \\ &\quad\quad\ \operatorname{join}\left(\left[0,\ 1\right],\ g_\text{fibo}\left(1,\ n-2\right)\right)
    \\
    &\quad\ \ \}
  \\[1em]
  g_\text{fibs}\left(n,\ n_\text{max}\right) &= \operatorname{join}\left(\left[0,\ 1\right],\ g_\text{fibo}\left(n+1,\ n_\text{max}\right)\right)
  \\ g_\text{fibo}\left(n,\ n_\text{max}\right) &= \left\{n>n_\text{max}:\ \left[\right],\ g_\text{fibs}\left(n,\ n_\text{max}\right)+f_\text{tail}\left(g_\text{fibs}\left(n,\ n_\text{max}\right)\right)\right\}
\end{align*}
```

This uses a mutually recursive implementation with 2 helper functions. It could probably be optimised?

### Dependencies
- $f_\text{tail}$ (from [Lists](lists.md))
