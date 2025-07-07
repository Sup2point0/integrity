---
title: Graphs
topic: prerequisites
dest: scriptures/desmos/gamedev/prerequisites/graphs
next: functions
update: 2025 July 2
---


## // The Graphing Calculator

### _
Desmos, at heart, is a **graphing calculator**. While it can do everything a regular ‘calculator’ can do and more, its core feature is being able to plot 2-dimensional graphs in the $xy$-plane.

### _
A game isn’t much of a game if we can’t see anything, so we’ll need to build a visual interface in the Desmos viewport. The most obvious way to achieve this is through graphs.

Later on, we’ll see that we have a number of ways to render objects, and graphs are actually rarely the easiest. Nevertheless, it’s still good to have an understanding and appreciation for how they work – after all, it’s Desmos’s flagship feature!


## // Plotting Graphs

### _
```desmos
y = x^2
```

Desmos can certainly plot simple graphs like $y = x^2$, but it can also do so much more.

### _
```desmos
f\left(x\right) = -\frac{1}{100}x^{3} + \frac{1}{10}x^{2} + \frac{1}{5}x + \sin{x}
f'(x)
```

Often we see graphs take the form $y = f(x)$, which always maps each value of $x$ to exactly one value of $y$. We use this when visualising functions, as is often the case in calculus – for instance, we might plot:

```math
y = f(x) = -\frac{1}{100}x^{3} + \frac{1}{10}x^{2} + \frac{1}{5}x + \sin{x}
```

Then also plot its derivative:

```math
y = f'(x) = -\frac{3}{100}x^{2} + \frac{1}{5}x + \frac{1}{5} + \cos{x}
```

### _
But graphs don’t have to take that form!

### _
Really, any relationship between $x$ and $y$ can be plotted as a graph. The points plotted on the graph represent the *set of points* $(x, y)$ that satisfy the relationship.

For instance, the graph

```math
x^2 + y^2 = 1
```

produces a circle, which is a locus of points that fulfil the relationship $x^2 + y^2 = 1$. This is an **implicit** graph, because it’s not expressing $x$ or $y$ in terms of the other – it just provides a relationship between them that is plotted.

### _
<aside>
Try plotting an implicit graph by setting up any equation between $x$ and $y$.
</aside>

### _
```desmos
x^{3}+y^{3}=x
```

All we need is an equation that includes $x$ and $y$.

```math
x^3 + y^3 = x
```


## // Plotting Regions

### _
We don’t just have to plot equalities where the sides are equal. We can also plot **inequalities** to sweep out entire regions, and shade them with a single colour.


## // Plotting Multiple Graphs

### _
Desmos also has a perhaps surprising feature of being able to simultaneously plot multiple graphs.

The syntax can be a bit fiddly (we’ll explore this in more depth when looking at lists), but if you get the interaction right, Desmos will take each individual value of the list, and plot a copy of the graph with that value substituted in.

### _
```desmos
y = mx
m = \left[ 1,\ 2,\ 3 \right]
```

Normally we’d assign a numerical value to $m$, but here we’ve set it to a list instead. Now Desmos plots 3 lines:

```math
\begin{align*}
  y &= x \quad (m = 1)
  \\ y &= 2x
  \\ y &= 3x
\end{align*}
```

This can feel a little counter-intuitive, since technically we’d expect multiplying a list by a scalar ($x$ is just a number, after all) to produce another list, not 3 graphs. However, this is just a unique interaction between the plotted variable $x$ (which isn’t always treated like a number) and a list used multiplicatively.
