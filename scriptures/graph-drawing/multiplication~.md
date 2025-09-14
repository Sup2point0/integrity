---
title: Multiplication as Scaling
topic: graph-drawing
update: 2025 September 14
---


## Description

In this scripture, we look at an approach for drawing graphs that involve multiplying expressions: viewing one as a base function and the other as a scalar to shape it.


## // Static Scaling

### _
So, let’s start with the simple transformation of **scaling** graphs which I’m sure you’re familiar with. It’s simple, but it’s actually the fundamental idea that multiplying expressions draws from.

### _
```desmos
y = \sin{x}
```

Take the graph $y = \sin(x)$.

What does $y = 2\sin(x)$ look like?

### _
```desmos
\base :: y = \sin{x}

y = 2 \sin{x}
```

We’re *scaling* $\sin(x)$ by $2$, which means for every point on the line, its $y$-value is doubled.

The visual result is that the whole graph is ‘stretched’ vertically (parallel to the $y$ axis), such that it doubles in height. It’s just like stretching an image in PowerPoint.

### _
```desmos
\base :: y = \sin{x}

y = k \sin{x}
\slider{ min: 0 } :: k = 2
```

Ok great, now let’s replace that $2$ with a constant, $k$. We’ll restrict $k$ to be positive for now. Try dragging the slider and watch the graph stretch and compress.

### _
<aside class="note"></aside>
It’s important to clarify here that $k$ is a **constant**, not a **variable**. As far as the graph $y = k\sin{x}$ is concerned, $k$ is just some number.

We give Desmos a $k$, and then it renders the graph for that $k$. We can change $k$, and it’ll then render a different $k$.

### _
When $k = 1$ we get our original graph.

When $k$ is small ($0 < k < 1$), the $\sin(x)$ wave becomes flatter – because we’re multiplying it by a number smaller than $1$, which scales the $y$-values to be smaller.

When $k$ is large ($k > 1$), the $\sin(x)$ wave becomes expanded – multiplying by anything larger than $1$ causes our original $y$-value to increase.

And when $k$ is $0$, the graph of course becomes a straight line, because we just get $y = 0$.

### _
This should all be intuitive. But it encapsulates some pretty key concepts!

Firstly, points of interest. Those 2 special values, $k = 1$ and $k = 0$, will be crucial for drawing graphs. Can you think why?

### _
```desmos
f\left( x \right) = 3 \sin{x}

p = \frac{\pi}{2}
q = f\left( p \right)
q_1 = f\left( p \right) \cdot 1
q_0 = f\left( p \right) \cdot 0

\asympt :: x = p
\label{ text: "Identical to base!", pos: "ABOVE_RIGHT" } :: \left( \frac{\pi}{2}, q_1 \right)
\label{ text: "Touches `x`-axis!", pos: "BELOW_RIGHT" } :: \left( \frac{\pi}{2}, q_0 \right)
```

Say we have a function $f(x)$, and we evaluate it at a particular point $x = p$ to give $q = f(p)$, our $y$-value.

If we multiply that $y$-value by $1$, we just get $q_1 = f(p) \cdot 1 = f(p)$. In other words, the graph remains unchanged.

If we multiply it by $0$, we get $q_0 = f(p) \cdot 0 = 0$. Anything multiplied by $0$ is $0$. This means we get a $y$-value of $0$, so the graph touches the $x$-axis.

### _
This makes these great ‘anchor’ points! We can immediately deduce what $y$-value they should take.

### _
Secondly, and even though this is obvious, it’s the thing to remember – $k > 1$ scales up, and $0 < k < 1$ scales down.

The asymmetry is interesting – for scaling up, $k > 1$ can take on so, so many values, all the way up to $\infin$, and yet $k$ for scaling down only has between $0$ and $1$.

But that’s just how reciprocals work, and plus, there are the same number of numbers in $(0, 1)$ as there are in $(1, \infin)$ ;)

### _
```desmos
\base :: y = \sin{x}

y = k \sin{x}
\slider{ max: 0 } :: k = -3
```

What about negative $k$, then?

Don’t overthink it! Scaling by $-3$ is the same as multiplying by $3$ followed by $-1$. In other words,

```math
-3 \sin{x}
= (3 \sin{x}) \cdot (-1)
```

Multiplying by $-1$ inverts all our $y$-values, which reflects the graph in the $x$-axis. Simple as that.

### _
I imagine this was all stuff you‘re already familiar with, but the aim here was to really make you think about what scaling means. Because with that appreciation there, it makes it a lot easier to understand how to multiply expressions by thinking of them as scaling.


## // Dynamic Scaling

### _
So far, we’ve been scaling a graph by a constant $k$. We pick a value for $k$, and then we get one graph scaled by that coefficient.

### _
```desmos
\viewport{ left: -1, right: 12 }
y = \sin{x} \ \ \left\{ 0 < x < t \right\}

\animate :: \slider{ min: 0, max: "3 \\pi" } :: t = 0
```

We’re now going to visualise the graph as actually being ‘drawn out’, by a pen on paper that starts on the left and increases in $x$-value. This is how we’d draw it in real life, of course. For simplicity, we’ll only consider positive $x$ for now.

### _
```desmos
\viewport{ left: -1, right: 12 }
\base :: y = \sin{x} \ \ \left\{ 0 < x < t \right\}
y = k \sin{x} \ \ \left\{ 0 < x < t \right\}

\slider{ min: -10, max: 10 } :: k = 3
\animate :: \slider{ min: 0, max: "3 \\pi" } :: t = 0
```
Now you can see what I meant earlier by $k$ being constant – when we start drawing the graph, we have a fixed value of $k$ that determines what the graph we’re about to draw looks like.

### _
But what if $k$ changed *while* we were drawing the graph?

### _
```desmos
\viewport{ left: -1, right: 12 }
\base :: y = \sin{x} \ \ \left\{ 0 < x < 4 \right\}
y = k_l \sin{x} \ \ \left\{ 0 < x < 4 \right\}

k_l = 3

\asympt :: x = 4
\label{ text: "`k` changes here." } :: \left( 4,\ k_l \sin\left(4\right) \right)
```

For instance, say $k$ is initially $3$. We draw the graph from $x = 0$ to $x = 4$, and at this point, suddenly $k$ doubles to $6$. What happens as we continue to draw the graph?

(This is not how constants behave, I’m just tryna illustrate an idea, bear with me here)

### _
```desmos
\viewport{ left: -1, right: 12 }
\base :: y = \sin{x} \ \ \left\{ 0 < x < t \right\}
y = k_l \sin{x} \ \ \left\{ 0 < x < \min\left(t,\ 4 \right) \right\}
y = k_r \sin{x} \ \ \left\{ 4 < x < t \right\}

k_l = 3
k_r = 6
k = \left\{ t\ge4:\ 6,\ 3 \right\}

\animate :: \slider{ min: 0, max: "3 \\pi" } :: t = 0

\asympt :: x = 4
\hidden :: \label{ text: "`k` doubles here.", pos: "RIGHT" } :: \left( 4,\ -8 \right)

\hidden :: \label{ text: "`k = ${k}`", pos: "RIGHT" } :: \left( 4,\ 6 \right)
```

It looks like this. Our scale factor changes partway through, and now there’s a right side of the graph that’s scaled more than the left.

### _
```desmos
\viewport{ left: -1, right: 12 }
\asympt :: k = x \ \ \left\{ 0 < x < t \right\}

\label{ text: "`k = ${t}`" } :: \left( t,\ t \right)
x = t \ \ \left\{ 0 < y < t \right\}
\label{ text: "`x = ${t}`" } :: \left( t,\ 0 \right)

\animate :: \slider{ min: 0, max: "2 \\pi" } :: t = 0
```

Hmm, so what if we said that, as we draw the graph, we set $k$ to the current value of $x$?

i.e. When we’re at $x = 1$, $k = 1$. When $x$ reaches $5$, $k$ too becomes $5$.

### _
```desmos
\viewport{ left: -1, right: 12 }
\base :: y = \sin{x} \ \ \left\{ 1 < x < 3\pi \right\}
\label{ text: "Pen starts here." } :: \left( 1, \sin\left( 1 \right) \right)

\hidden :: k = x
```

So, let’s start from $x = 1$, meaning $k = 1$. Note that this means we multiply $\sin(x)$ by $1$, which does nothing. So we start at the same point as our original graph of $y = \sin(x)$.

Now, move our pen to the right, increasing in $x$. As we do so, $k$ increases too. And what happens as $k$ increases?

### _
```desmos
\viewport{ left: -1, right: 12 }
\base :: y = \sin{x} \ \ \left\{ 1 < x < t \right\}
y = k \sin{x} \ \ \left\{ 1 < x < t \right\}
\label{ text: "k = ${t}" } :: \left( t,\ t \sin\left( t \right) \right)

\hidden :: k = x

\text :: Click play!
\slider{ min: 1, max: "3 \\pi" } :: t = 0
```

Well, now we have $k > 1$, so our graph is being scaled up.

At $x = 2$, $k = 2$, so our graph doubles in height; at $x = 3$, $k = 3$, so it triples; and so on. Our graph is steadily getting scaled larger *as we go to the right*. We get a $\sin(x)$ wave that oscillates wider and wider.

### _
```desmos
\viewport{ left: -1, right: 12 }
y = k \sin{x} \ \ \left\{ 1 < x < 3\pi \right\}
\hidden :: k = x

y = x \sin{x} \ \ \left\{ 1 < x < 3\pi \right\}
```

Guess what we’ve just done. We said $k$ is given by $x$, so $k = x$.

That means $k \sin{x}$ is the same as $x \sin{x}$.

We just drew part of the graph of $y = x \sin{x}$. That’s a product of 2 expressions!

### _
That wasn’t hard, was it? In fact, you already knew how to do it, because you know how scaling works.

### _
In essence, it’s the same as scaling $f(x)$ by a constant $k$. The only difference is that $k$ changes depending on your $x$ – <strong>your $x$ *tells you* what your scale factor should be.</strong>

### _
```desmos
\viewport{ left: -1, right: 12 }
y = k \cdot f\left( x \right) \ \ \left\{ 0 < x < 3\pi \right\}

\hidden :: f\left( x \right) = \sin{x}
\hidden :: k = x
```

Look at the function again:

```math
x \sin{x}
```

We took our base graph to be $y = \sin{x}$. We then treated $x$ as a scale factor to scale that base graph by.

So $f(x) = \sin(x)$, and $k = x$.

### _
```desmos
\viewport{ left: -1, right: 6 }
\base :: y = \sin{x} \ \ \left\{ 1 < x < 3\pi \right\}

y = x \sin{x} \ \ \left\{ 1 < x < 3\pi \right\}

\label{ text: "`0 \cdot \sin\left(0\right) = 0`, pos: "BELOW_RIGHT" } :: \left( 0,\ 0 \right)
```

Let’s go ahead and draw out the rest of that graph, then. Between $0 < x < 1$, we’re scaling the $\sin(x)$ wave down.

It’ll be a good idea to make use of our anchor point here at $x = 0$, where $y = 0$ – our graph will go through the origin.

### _
```desmos
\viewport{ left: -1, right: 6 }
\base :: y = \sin{x} \ \ \left\{ 0 < x < 3\pi \right\}

y = x \sin{x} \ \ \left\{ 0 < x < 3\pi \right\}

0 < x < 1
\hidden :: \label{ text: "Final graph is always below original!", pos: "RIGHT" } :: \left( 0,\ -2 \right)
```

Now all that’s left is to interpolate between these points. Because we’re scaling down, we know that the new graph must lie **underneath** our base graph.

### _
```desmos
\viewport{ left: -12, right: 12 }
y = x \sin{x} \ \ \left\{ 0 < x < 3\pi \right\}
```

Looking at the big picture again, what have we got on the right?

Still a $\sin(x)$ wave, just getting progressively stretched out as $x$ increases.

### _
```desmos
\viewport{ left: -12, right: 12 }
y = x \sin{x} \ \ \left\{ 0 < x < 3\pi \right\}

\label{ text: "`y = p`", pos: "ABOVE" } :: \left( 4,\ 4 \sin\left( 4 \right) \right)
\asympt :: y = 4 \sin\left( 4 \right) \ \ \left\{ 0 < x < 4 \right\}
\label{ text: "`y = -p`", pos: "ABOVE" } :: \left( -4,\ 4 \sin\left( -4 \right) \right)
\asympt :: y = 4 \sin\left( -4 \right) \ \ \left\{ -4 < x < 0 \right\}
```

Finally, the left half for $x < 0$.

Remember that scaling by a negative $k$ is as easy as scaling by the positive and reflecting. So notice at, say $x = -4$, we’re doing exactly the same scaling as at $x = 4$, except our final output will be negated.

### _
```desmos
\viewport{ left: -12, right: 12 }
y = x \sin{x} \ \ \left\{ 0 < x < 3\pi \right\}
y = x \sin{x} \ \ \left\{ -t < x < 0 \right\}

\animate :: \slider{ min: 1, max: "3 \\pi" } :: t = 0 
```
So, moving our pen left from $x = 0$, we’re scaling $\sin(x)$ by the same amount as on the right, but now also reflecting it.

The result is an even graph (symmetrical in the $y$-axis). Multiplying odd functions ($x$, $\sin(x)$) gives an even function.

### _
```desmos
\viewport{ left: -12, right: 12 }
y = x \sin{x} \ \ \left\{ -3\pi < x < 3\pi \right\}
```

I hope that wasn’t too difficult to digest. If you’re confused, feel free to take a break and read through it again slowly. Let intuition lead the way.
