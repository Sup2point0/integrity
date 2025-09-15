# Line Renderers
<!-- #SQUARK live!
| dest = desmos/library/rendering/lines
| title = Lines
| index = desmos / library / rendering
| update = 2025 August 21
-->


## Line

```math
d_\text{line} \left(\,
  p_\text{start},
  p_\text{stopt}
\,\right)
```

Draw a line.

### Arguments
| Argument | Description | Type | Constraints | Notes |
| :------- | :---------- | :--- | :---------- | :---- |
| $p_\text{start}$ | start point | $(\mathbb{R}, \mathbb{R})$ | | |
| $p_\text{stop}$ | end point | $(\mathbb{R}, \mathbb{R})$ | $p_\text{start} \neq p_\text{stop}$ | |

### Return
None

### Usage
```desmos
d_{line}\left(p_{start},\ p_{stop}\right)=\operatorname{polygon}\left(p_{start},\ p_{stop},\ p_{start}\right)
d_{line}\left(\left(-1,\ -1\right),\ \left(1,\ 1\right)\right)
```

### Implementation
```math
d_\text{line} \left(\,
  s_\text{start},
  s_\text{stop}
\,\right)
=
\operatorname{polygon}\left(p_{start},\ p_{stop},\ p_{start}\right)
```

### Dependencies
- $$
