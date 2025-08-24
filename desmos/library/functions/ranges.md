# Range Functions
<!-- #SQUARK live!
| dest = desmos/library/functions/ranges
| title = Range
| index = desmos / library / functions
| update = 2025 August 22
-->

> Base: $f$

This page documents library functions related to generating sequences.


## Linearly Spaced Range

```math
f_\text{nrange} \left(\,
  s_\text{start},
  s_\text{stop},
  n
\,\right)
```

> 

### Arguments
| Argument | Description | Type | Constraints | Notes |
| :------- | :---------- | :--- | :---------- | :---- |
| $s_\text{start}$ | lower bound of the range | $\mathbb{R}$ | | |
| $s_\text{stop}$ | upper bound of the range | $\mathbb{R}$ | | |
| $n$ | number of numbers in the range | $\mathbb{Z}^{+}$ | $0 < n$ | |

### Return
| Description | Type | Constraints | Notes |
| :---------- | :--- | :---------- | :---- |
| range | $[\mathbb{R}, ...]$ | | |

### Usage
```desmos
f_{nrange}\left(s_{start},\ s_{stop},\ n\right)=\left[\left(s_{start}+i\left(\frac{s_{stop}-s_{start}}{n-1}\right)\right)\operatorname{for}i=\left[0...\left(n-1\right)\right]\right]
f_{nrange}\left(1,\ 10,\ 10\right)
f_{nrange}\left(0,\ 1,\ 5\right)
```

### Implementation
```math
f_\text{nrange} \left(\,
  s_\text{start},
  s_\text{stop},
  n
\,\right)
=
\left[
  \left(s_{start}+i\left(\frac{s_{stop}-s_{start}}{n-1}\right)\right)\operatorname{for}i=\left[0...\left(n-1\right)\right]
\right]
```

### Dependencies
None


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
