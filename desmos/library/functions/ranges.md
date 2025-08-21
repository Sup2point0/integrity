# Range Functions
<!-- #SQUARK live!
| dest = desmos/library/functions/ranges
| index = desmos / library / functions / ranges
| update = 2025 July 28
-->

> Base: $f$

This page documents library functions related to generating sequences.


## List Range

```math
\begin{align*}
  &\ f_\text{lrange} \left(\,
    l
  \,\right)
\\[1em] =&\
  \left[\,
    1 \, \text{...}\,  \text{length}(l)
  \,\right]
\end{align*}
```

> Generate a list of integers corresponding to the indices of a list.


## Step-Wise List Range

```math
\begin{align*}
  &\ f_\text{lsrange} \left(
    l,
    s_\text{period},
    s_\text{offset}
  \right)
\\[1em] =&\
  \left[
    \left(
      s_\text{offset} + (i-1) \cdot s_\text{period}
    \right)
    \space \text{for} \space
    i = \left[
      1 \text{...} \frac
        {\text{length}(l)}
        {s_\text{period}}
    \right]
  \right]
\end{align*}
```

> Generate a list of integers corresponding to indices of chunks of a list.
