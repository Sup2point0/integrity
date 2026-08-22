---
domain: graph-drawing
topic:  graph-drawing
title:  Multiplication as Scaling
update: 2025 September 14
---


## Description

In this scripture, we look at an approach for drawing graphs that involve multiplying expressions: viewing one as a base function and the other as a scalar to shape it.


## // Static Scaling

### _
You might be surprised why multiplication is the first operation we look at. Surely addition is simpler?

### _
Funnily enough, it rarely is. We’ll see why this is later on, but essentially, in graph drawing we care about *relative* magnitudes much more than *absolute* magnitudes.

Multiplication deals with the former, but addition deals with the latter, and that can make determining the shape of a graph a whole lot more painful.

### _
So, let’s start with the simple transformation of **scaling** graphs which I’m sure you’re familiar with. It’s simple, but it’s actually the fundamental idea that multiplying expressions draws from (pun intended).

### _
```desmos
y = \sin{x}
```

Take the graph $y = \sin(x)$.

What does $y = 2\sin(x)$ look like?

### _
```desmos
/line{ opacity: 0.3 } :: y = \sin{x}

y = 2 \sin{x}
```

We’re multiplying $\sin(x)$ by $2$, which means for every point on the line, its $y$-value is doubled.

The visual result is that the whole graph is ‘stretched’ vertically (parallel to the $y$ axis), such that it doubles in height. It’s just like stretching an image in PowerPoint.

### _
So, think of multiplying a graph as *scaling* it in the $y$-direction. Remember, all of graph drawing is just transformations.

### _
We’re going to refer to the original, unscaled graph of $y = \sin(x)$ as our “base” graph – it’s our starting point.

We’ll then call the scaled graph we get our “final” graph – it’s the final ‘answer’ we obtain.

### _
```desmos
/line{ opacity: 0.3 } :: y = \sin{x}

y = k \sin{x}
/slider{ min: 0 } :: k = 2
```

Ok great, now let’s replace that $2$ with a constant, $k$. We’ll restrict $k$ to be positive for now. Try dragging the slider and watch the graph stretch and compress.

### _
<aside class="note"></aside>
It’s important to clarify here that $k$ is a **constant**, not a **variable**. As far as the graph $y = k\sin{x}$ is concerned, $k$ is just some number.

We give Desmos a $k$, and then it renders the graph for that $k$. We can change $k$, and it’ll then render the graph for a different $k$.

### _
When $k = 1$ we get our original graph.

When $k$ is small ($0 < k < 1$), the $\sin(x)$ wave becomes flatter – because we’re multiplying it by a number smaller than $1$, which scales the $y$-values to be smaller.

When $k$ is large ($k > 1$), the $\sin(x)$ wave becomes expanded – multiplying by anything larger than $1$ causes our original $y$-value to increase.

And when $k$ is $0$, the graph of course becomes a straight line, because we just get $y = 0$.

### _
This should all be intuitive, maybe obvious even. But it encapsulates some pretty key concepts!

Firstly, points of interest. Those 2 special values, $k = 1$ and $k = 0$, will be crucial for drawing scaled graphs. Can you think why?

### _
```desmos
f(x) = 3 \sin{x}

p = \frac{\pi}{2}
q = f(p)
q_1 = f(p) \cdot 1
q_0 = f(p) \cdot 0

/line{ style: dotted, opacity: 0.2 } :: x = p
/label{ text: "Identical to base!", pos: ABOVE_RIGHT } :: (\frac{\pi}{2}, q_1)
/label{ text: "Touches `x`-axis!", pos: BELOW_RIGHT } :: (\frac{\pi}{2}, q_0)
```

Say we have a function $f(x)$, and we evaluate it at a particular point $x = p$ to give $q = f(p)$, our $y$-value.

If we multiply that $y$-value by $1$, we just get $q_1 = f(p) \cdot 1 = f(p)$. In other words, the graph remains unchanged.

If we multiply it by $0$, we get $q_0 = f(p) \cdot 0 = 0$. Anything multiplied by $0$ is $0$. This means we get a $y$-value of $0$, so the graph touches the $x$-axis.

### _
This makes these great ‘anchor’ points! We can immediately deduce what $y$-value they should take – it’s the same as on the base graph.

### _
Secondly, and even though this is obvious, it’s the key thing to remember. $k > 1$ scales up, and $0 < k < 1$ scales down.

When we multiply values for graph drawing, we’ll *constantly* be thinking, “Is this scale factor greater than $1$?”. If so, scale up, otherwise scale down.

### _
<aside class="note"></aside>
The asymmetry is interesting – for scaling up, $k > 1$ can take on so, so many values, all the way up to $\infin$, and yet $k$ for scaling down only has between $0$ and $1$.

But that’s just how reciprocals work, and plus, there are the same number of numbers in $(0, 1)$ as there are in $(1, \infin)$, hehe ;)

### _
```desmos
/line{ opacity: 0.3 } :: y = \sin{x}

y = k \sin{x}
/slider{ max: 0 } :: k = -3
```

What about negative $k$, then?

Don’t overthink it! Scaling by $-3$ is the same as multiplying by $3$ followed by $-1$. In other words,

```math
-3 \sin{x}
= (3 \sin{x}) \cdot (-1)
```

Multiplying by $-1$ inverts all our $y$-values, which reflects the graph in the $x$-axis. Simple as that.

### _
For this reason, I wouldn’t even consider negative scale factors when drawing graphs! It just adds unnecessary mental load.

I see $(-3)$ not as a single scale factor, but as first scaling by $3$, followed by a reflection. That’s why when I say “scale factor”, I implicitly mean a non-negative $k$.

### _
I imagine this was all stuff you‘re already familiar with, but the aim here was to really make you think about what scaling means. With that appreciation there, it makes it a lot easier to understand how to multiply expressions by thinking of them as scaling.


## // Dynamic Scaling

### _
So far, we’ve been scaling a graph by a constant $k$. We pick a value for $k$, and then we get one graph scaled by that coefficient.

### _
```desmos
/viewport{ left: -1, right: 12 }

y = \sin{x} \ \ \{ 0 < x < t \}

/anim /slider{ min: 0, max: "3\\pi" } :: t = 0
```

We’re now going to visualise the graph as actually being ‘drawn out’, by a pen on paper that starts on the left and increases in $x$-value. This is how we’d draw it in real life, of course. For simplicity, we’ll only consider positive $x$ for now.

### _
```desmos
/viewport{ left: -1, right: 12 }

/line{ opacity: 0.3 } :: y = \sin{x} \ \ \{ 0 < x < t \}
y = k \sin{x} \ \ \{ 0 < x < t \}

/slider{ min: -10, max: 10 } :: k = 3
/anim /slider{ min: 0, max: "3 \\pi" } :: t = 0
```
Now you can see what I meant earlier by $k$ being constant – when we start drawing the graph, we have a fixed value of $k$ that determines what the graph we’re about to draw looks like.

### _
But what if $k$ changed *while* we were drawing the graph?

### _
```desmos
/viewport{ left: -1, right: 12 }

/line{ opacity: 0.3 } :: y = \sin{x} \ \ \{ 0 < x < 4 \}
y = k_l \sin{x} \ \ \{ 0 < x < 4 \}

k_l = 3

/line{ style: DASHED, opacity: 0.3 } :: x = 4
/label{ text: "`k` changes here." } :: (4, k_l \sin(4))
```

For instance, say $k$ is initially $3$. We draw the graph from $x = 0$ to $x = 4$, and at this point, suddenly $k$ doubles to $6$. What happens as we continue to draw the graph?

(This is not how constants behave, I’m just tryna illustrate an idea, bear with me here)

### _
```desmos
/viewport{ left: -1, right: 12 }

/line{ opacity: 0.3 } :: y = \sin{x} \ \ \{ 0 < x < t \}
y = k_l \sin{x} \ \ \{ 0 < x < \min(t, 4) \}
y = k_r \sin{x} \ \ \{ 4 < x < t \}

k_l = 3
k_r = 6
k = \{ t\ge4:\ 6, 3 \}

/anim /slider{ min: 0, max: "3 \\pi" } :: t = 0

/line{ style: DASHED, opacity: 0.3 } :: x = 4
/hide /label{ text: "`k` doubles here.", pos: RIGHT } :: (4, -8)

/hide /label{ text: "`k = ${k}`", pos: RIGHT } :: (4, 6)
```

It looks like this. Our scale factor changes partway through, and now there’s a right side of the graph that’s scaled more than the left.

### _
```desmos
/viewport{ left: -1, right: 12 }

/line{ style: DASHED, opacity: 0.3 } :: k = x \ \ \{ 0 < x < t \}

/label{ text: "`k = ${t}`" } :: (t, t)
x = t \ \ \{ 0 < y < t \}
/label{ text: "`x = ${t}`" } :: (t, 0)

/anim /slider{ min: 0, max: "2 \\pi" } :: t = 0
```

Hmm, so what if we said that, as we draw the graph, we set $k$ to the current value of $x$?

i.e. When we’re at $x = 1$, $k = 1$. When $x$ reaches $5$, $k$ too becomes $5$.

### _
```desmos
/viewport{ left: -1, right: 12 }

/line{ opacity: 0.3 } :: y = \sin{x} \ \ \{ 1 < x < 3\pi \}
/label{ text: "Pen starts here." } :: (1, \sin(1))

/hide :: k = x
```

So, let’s start from $x = 1$, meaning $k = 1$. Note that this means we multiply $\sin(x)$ by $1$, which does nothing. So we start at the same point as our original graph of $y = \sin(x)$.

Now, move our pen to the right, increasing in $x$. As we do so, $k$ increases too. And what happens as $k$ increases?

### _
```desmos
/viewport{ left: -1, right: 12 }

/line{ opacity: 0.3 } :: y = \sin{x} \ \ \{ 1 < x < t \}
y = k \sin{x} \ \ \{ 1 < x < t \}
/label{ text: "k = ${t}" } :: (t, t \sin(t))

/hide :: k = x

% Click play!
/slider{ min: 1, max: "3 \\pi" } :: t = 0
```

Well, now we have $k > 1$, so our graph is being scaled up.

At $x = 2$, $k = 2$, so our graph doubles in height; at $x = 3$, $k = 3$, so it triples; and so on. Our graph is steadily getting scaled larger *as we go to the right*. We get a $\sin(x)$ wave that oscillates wider and wider.

### _
```desmos
/viewport{ left: -1, right: 12 }

y = k \sin{x} \ \ \{ 1 < x < 3\pi \}
/hide :: k = x

y = x \sin{x} \ \ \{ 1 < x < 3\pi \}
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
/viewport{ left: -1, right: 12 }

y = k \cdot f(x) \ \ \{ 0 < x < 3\pi \}

/hide :: f(x) = \sin{x}
/hide :: k = x
```

Look at the function again:

```math
x \sin{x}
```

We took our base graph to be $y = \sin{x}$. We then treated $x$ as a scale factor to scale that base graph by.

So $f(x) = \sin(x)$, and $k = x$.

### _
```desmos
/viewport{ left: -1, right: 6 }

/line{ opacity: 0.3 } :: y = \sin{x} \ \ \{ 1 < x < 3\pi \}

y = x \sin{x} \ \ \{ 1 < x < 3\pi \}

/label{ text: "`0 \cdot \sin(0) = 0`", pos: BELOW_RIGHT } :: (0, 0)
```

Let’s go ahead and draw out the rest of that graph, then. Between $0 < x < 1$, we’re scaling the $\sin(x)$ wave down.

It’ll be a good idea to make use of our anchor point here at $x = 0$, where $y = 0$ – our graph will go through the origin.

### _
```desmos
/viewport{ left: -1, right: 6 }

/line{ opacity: 0.3 } :: y = \sin{x} \ \ \{ 0 < x < 3\pi \}

y = x \sin{x} \ \ \{ 0 < x < 3\pi \}

0 < x < 1
/hide /label{ text: "Final graph is always below original!", pos: RIGHT } :: (0, -2)
```

Now all that’s left is to interpolate between these points. Because we’re scaling down, we know that the new graph must lie **underneath** our base graph.

### _
```desmos
/viewport{ left: -12, right: 12 }

y = x \sin{x} \ \ \{ 0 < x < 3\pi \}
```

Looking at the big picture again, what have we got on the right?

Still a $\sin(x)$ wave, just getting progressively stretched out as $x$ increases.

### _
```desmos
/viewport{ left: -12, right: 12 }

y = x \sin{x} \ \ \{ 0 < x < 3\pi \}

/label{ text: "`y = p`", pos: "ABOVE" } :: (4, 4 \sin(4))
/line{ style: DASHED, opacity: 0.3 } :: y = 4 \sin(4) \ \ \{ 0 < x < 4 \}
/label{ text: "`y = -p`", pos: "ABOVE" } :: (-4, 4 \sin(-4))
/line{ style: DASHED, opacity: 0.3 } :: y = 4 \sin(-4) \ \ \{ -4 < x < 0 \}
```

Finally, the left half for $x < 0$.

Remember that scaling by a negative $k$ is as easy as scaling by the positive and reflecting. So notice at, say $x = -4$, we’re doing exactly the same scaling as at $x = 4$, except our final output will be negated.

### _
```desmos
/viewport{ left: -12, right: 12 }

y = x \sin{x} \ \ \{ 0 < x < 3\pi \}
y = x \sin{x} \ \ \{ -t < x < 0 \}

/anim /slider{ min: 1, max: "3 \\pi" } :: t = 0 
```
So, moving our pen left from $x = 0$, we’re scaling $\sin(x)$ by the same amount as on the right, but now also reflecting it.

The result is an even graph (symmetrical in the $y$-axis). Multiplying odd functions ($x$, $\sin(x)$) gives an even function.

### _
```desmos
/viewport{ left: -12, right: 12 }

y = x \sin{x} \ \ \{ -3\pi < x < 3\pi \}
```

I hope that wasn’t too difficult to digest. If you’re confused, feel free to take a break and read through it again slowly. Let intuition lead the way.
