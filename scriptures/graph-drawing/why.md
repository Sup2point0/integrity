# Why Draw Graphs?
<!-- #SQUARK live! dev!
| dest = scriptures/graph-drawing/why
| capt = Desmos in the mind
| index = scriptures / graph-drawing
| date = 2025 July 1
| update = 2025 September 14
-->

I am not a maths major, nor a maths olympian – I am but a humble maths fan. However, I am confident in saying that graph-drawing is a remarkably useful skill, with real utility and applications outside of recreational mathematics and puzzling.

I think you’ll agree that graphs – specifically 2-dimensional graphs in the $xy$-plane – are one of the most fundamental ways to reason about maths. So much insight into functions, and the relationships between them, is unlocked through visualising them as graphs.

Here’s a great example – we wish to find how many solutions exist for the following equation.

```math
\sin{x} = x + \frac{1}{2}
```

Analytically? I’m not even sure there’s any way to do it, short of exhaustively solving for every value of $x$ (which I’m also not even sure there’s a way to do exactly).

But draw the 2 expressions as graphs, and the answer reveals itself immediately:

```desmos
y = \sin{x}
y = x + \frac{1}{2}
```

Each point where these graphs intersect is a solution to the original equation – because $y = \sin{x} = x + 1/2$. When the graphs have the same $y$-coordinate, that means they’ve evaluated to the same value.

Of course, it is easy to draw the graphs in an inaccurate way that results in more or fewer intersections, but with a little care and sanity checking, this is easily avoided.

Now, we haven’t calculated any numerical answer for the solution. However, this is far from the point of graph drawing.[^answer] Its true power lies in its potential to provide *insight* into a problem. Visualising the problem is often far more intuitive than algebra and symbols, and can sometimes even reveal unseen properties of a problem.

[^answer]: Lines we can draw accurately, and this may (although rarely) be easier than an algebraic solution. For the overwhelming majority of *interesting* cases – i.e. curves – the purpose of graph drawing is not to solve for numerical solutions.

Consider a physical example. An object’s velocity $v$ described by some differential equation that yields a solution

```math
\begin{align*}
  \frac{1}{t}\frac{dv}{dt}-\frac{1}{t^{2}}v &= \cos t
  \\ [1em] \Rightarrow v &= -t\sin t
\end{align*}
```

How horrific. We could ascertain what this means by considering how it changes with $t$, but why keep that all in your head? The perfect way to visualise it is to draw the graph, which makes reasoning about it far quicker.

```desmos
v=-t\sin t

-x\sin x<y<0\ \ \left\{0\le x\le\pi\right\}
0<y<-x\sin x\ \ \left\{\pi\le x\le4.49341\right\}
```

Now we can easily see how its velocity changes over time. We can deduce its acceleration from the gradient. We can see when it’s returned to the origin when the positive and negative areas cancel. Wins for intuition all round.

Of course an obvious question is: “why draw graphs when we can just plot it with software?” (i.e. Desmos)

=.

Yeah that’s a hard one, and to be honest I don’t know if I have a satisfactory answer. One could say you won’t always have access to the aid of technology, but that feels a bit ...arbitrary. It’s different to algebra, where even with calculators, understanding it is still vital for solving many problems that calculators can’t. The goal of graph drawing *is* just to get the final answer, and graph plotting software is an instantaneous means to that end. Also, the ability of humans to plot graphs tapers off pretty quickly compared to machines...

Again, I suppose I’ll have to go with the good old “the journey matters more than the destination”. It’s another endeavour for building your problem-solving and visualisation skills, which are relevant and useful anywhere.

Regardless of how you go about it, graph drawing acts as a starting point for developing a rigorous, exact solution to a problem.

<!-- I should clarify throughout these scriptures “graph drawing” refers to the *skill* of sketching rough imitations of graphs by hand, without graphing software. By “rough imitation” I mean drawing a graph that has approximately the same shape as the exact graph, and preserves all of its important properties relevant to the context. -->
