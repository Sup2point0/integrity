# Identifiable Identifiers
<!-- #SQUARK live!
| dest = desmos/docs/identifiers
| capt = Standardised conventions for identifier naming
| index = desmos / docs
| date = 2024 September
| update = 2025 July 28
-->

When programming in Desmos, I use a set of naming conventions for identifiers. This helps massively when managing increasingly large projects with many identifiers to keep track of.

It’s by no means a perfect convention, but I’ve found it to be quite intuitive and efficient. I document it in depth here for anyone who wishes to use it.[^use]

[^use]: Including me!!


## Overview

Identifiers take the form $b_\text{subscript}$, where $b$ is the *base*. This is hugely preferable to single-letter naming, which quickly drains available variable names and results in clashes.

Global variables use an uppercase base, while functions, actions and their parameters use a lowercase base.

```math
\begin{align*}
  V &= 0 \quad&\quad G_\text{tick} &= 0
  \\ f(x) &= x^2 \quad&\quad v(t_\text{next}) &= G_\text{tick} \to t_\text{next}
\end{align*}
```

The subscript is all in lowercase. Short subscripts are preferable to reduce clutter, but increasing length may become necessary to avoid naming collisions.

Words are not separated with any separator due to Desmos limitations. This clearly has issues, but it’s preferable to `camelCase` and still holds up fine with some extra effort in naming appropriately.

```math
\begin{align*}
  G_\text{lastgamesave} &= 1
  \\ c_\text{save}() &= G_\text{lastgamesave} \to G_\text{tick}
\end{align*}
```


## Variables

| letter | semantics | description | notes | instance |
| :----- | :-------- | :---------- | :---- | :------- |
| $\textcolor{#f07d1c}{C}$ | colour | Stores an RGB colour. | | $\textcolor{#f07d1c}{C}_\text{blue}$ |
| $\textcolor{#f07d1c}{G}$ | global | A global variable, whether dynamic or static. | | $\textcolor{#f07d1c}{G}_\text{live}$ |
| $\textcolor{#f07d1c}{T}$ | tick | A tick variable for timing events. | | $\textcolor{#f07d1c}{T}_\text{spawn}$ |
| $\textcolor{#f07d1c}{W}$ | world | A globally accessible store of game data, often objects. | | $\textcolor{#f07d1c}{W}_\text{objects}$ |
| $\textcolor{#f07d1c}{R}$ | render | The output of a rendering function. | | $\textcolor{#f07d1c}{R}_\text{box}$ |


## Functions / Actions

| letter | semantics | description | notes | instance |
| :----- | :-------- | :---------- | :---- | :------- |
| $\textcolor{#f07d1c}{a}$ | action | A general action. | Specifically those intended to be manually triggered. | $\textcolor{#f07d1c}{a}_\text{reset}(...)$ |
| $\textcolor{#f07d1c}{c}$ | control / core | A core action for running the game. | | $\textcolor{#f07d1c}{c}_\text{tick}(...)$ |
| $\textcolor{#f07d1c}{d}$ | draw | A function for rendering polygons to the viewport. | | $\textcolor{#f07d1c}{d}_\text{rect}(...)$ |
| $\textcolor{#f07d1c}{f}$ | function | A pure function[^pure] that performs computations instead of modifying state. | Intended for commonly used utility functions. | $\textcolor{#f07d1c}{f}_\text{lsrange}(...)$ |
| $\textcolor{#f07d1c}{n}$ | new | An action for creating new objects (internally). | | $\textcolor{#f07d1c}{n}_\text{enemy}(...)$ |
| $\textcolor{#f07d1c}{v}$ | move | An action for moving something forward in time – either literally or by processing its frame updates. | $v$ for velocity in physics, literally changing position. | $\textcolor{#f07d1c}{v}_\text{player}(...)$ |
| $\textcolor{#f07d1c}{w}$ | handle | Abstraction upon $v()$, usually for branching between different $v()$ depending on conditional. | | $\textcolor{#f07d1c}{w}_\text{collision}(...)$ |

[^pure]: In the functional programming sense!


## Parameters

| letter | semantics | description | notes | instance |
| :----- | :-------- | :---------- | :---- | :------- |
| $\textcolor{#f07d1c}{i}$ | index | A number that can be used to index a list. | $i \in \mathbb{Z}, i \geq 1$ |
| $\textcolor{#f07d1c}{l}$ | list | A list of objects. | The type of the objects can be described in the subscript, like $l_p$ for a list of points. | $f_\text{lsrange}(\textcolor{#f07d1c}{l}, s_\text{period}, s_\text{offset})$ |
| $\textcolor{#f07d1c}{n}$ | number | An integer. | $n \in \mathbb{Z}, n \geq 0$ |
| $\textcolor{#f07d1c}{p}$ | point | An $(x, y)$ pair of values. | Must be a point, cannot be a list (will be accessed via $p.x$ or $p.y$). | $f_\text{lclamp}(\textcolor{#f07d1c}{p})$ |
| $\textcolor{#f07d1c}{s}$ | parameter | A generic parameter. | |
| $\textcolor{#f07d1c}{t}$ | time | Progression along a spectrum. | $0 \leq t \leq 1$ | $f_\text{lerp}(s_\text{start}, s_\text{stop}, \textcolor{#f07d1c}{t})$ |
