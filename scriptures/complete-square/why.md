# Why Complete the Square?
<!-- #SQUARK live! dev!
| dest = scriptures/complete-square/why
| index = scriptures / complete-square
-->

If you’ve never heard of *completing the square*, it’s a way to rewrite a quadratic of the form

```math
ax^2 + bx + c
```

into a different form

```math
a(x - p)^2 + q
```

where $a, b, c, p, q$ are any real numbers with $a \neq 0$ (since then the expression would not be a quadratic).

> [!Note]
> For a walkthrough on how to actually carry out completing the square, see [How Do We Complete the Square?](how.md)

Now this could seem like an entirely arbitrary thing to do, but it’s actually a really useful technique (as anyone who has trained for the [TMUA<sup>↗</sup>](https://en.wikipedia.org/wiki/Test_of_Mathematics_for_University_Admission) would be more than familiar with). Completing the square reveals a lot of useful information about the quadratic that the expanded form doesn’t.


## Extrema

When we have a quadratic in completed square form $a(x - p)^2 + q$, we can easily deduce its minimum (for a positive quadratic) or maximum (for a negative quadratic) value.

Let’s consider $a > 0$, so we’d like to find the minimum of a positive quadratic.

```math
\min( a(x - p)^2 + q )
```

Any real number squared is non-negative, so we know $a(x - p)^2$ can only increase the value of the expression. Therefore to minimise its value, we want $a(x - p)^2$ to be 0. When does this happen? Well, when $x = p$.

```math
= q
```

So the minimum value is $q$, and it occurs when $x = p$. In other words, the coordinates of our minimum are $(p, q)$.


## Shape

If we draw any quadratic, they all have the same fundamental shape – the graph of $y = x^2$.

How do we prove this? Well, if we complete the square on any quadratic, we obtain $y = a(x - p) + q$, and we can see that, algebraically, this is just a series of transformations on $y = x^2$:

```math
\begin{alignat*}{2}
  &\quad y = x^2
  \\ \rightarrow &\quad y = (x - p)^2
    &\qquad& (\text{translate horizontally by } p)
  \\ \rightarrow &\quad y = a(x - p)^2
    &\qquad& (\text{scale vertically by } a)
  \\ \rightarrow &\quad y = a(x - p)^2 + q
    &\qquad& (\text{translate vertically by } q)
\end{alignat*}
```

This is pretty remarkable. It means we can take $y = x^2$, and turn it into *any* quadratic through only translations and scaling. (To obtain negative quadratics, we just let $a < 0$)

This is a property only quadratic and linear polynomials have. For higher degree polynomials, the different coefficients of $x$ can lead to all sorts of wacky shapes.


## Drawing

Now that we know a quadratic in completed square form is just a transformation of $y = x^2$, this makes drawing its graph super simple.

If we set $a = 1, p = 0, q = 0$, then we have

```math
\begin{align*}
     y &= 1(x - 0)^2 + 0
  \\ y &= x^2
\end{align*}
```

Which is just a quadratic centred at $(0, 0)$.

![y = x^2](~)

It follows pretty intuitively that if we now change $p$ or $q$, then we’re shifting the graph from that origin by $p$ or $q$ – meaning its centre is now at $(p, q)$.

![y = (x - p)^2 + q](~)

The absolute value of $a$ doesn’t matter so much here, since it’s just a stretch on the curve’s shape. We only really care about its sign – if it’s negative, our positive quadratic is flipped to a negative one (famously known as a sad parabola).

Why would we ever want to draw graphs, you ask? See [Why Draw Graphs?](../graph-drawing/why.md).


## Deriving the Quadratic Formula

If we follow the process of completing the square on a generic quadratic $ax^2 + bx + c$, it’s pretty intuitive why the $a$ in $a(x - p)^2 + q$ is the same as the original. What are the other terms then?

`...`

Well well, don’t these look familiar. Oh yes, completing the square is how the infamous [quadratic formula<sup>↗</sup>](https://wikipedia.org/wiki/Quadratic_formula) is derived:

`...`

Next time you use your calculator to solve a quadratic equation, remember it is completing the square that made it possible.

From the quadratic formula we know the discriminant $b^2 - 4ac$ tells us the number of real solutions for $x$. If it’s positive here are 2 solutions, if it’s zero there’s 1 repeated solution, and if it’s negative this means there are no real solutions since we’re taking the swuare root of a negative number.

With the context of completing the square we know have a very graphic way to interpret this. $b^2 - 4ac$ is how much we shift our quadratic down (or up) by:

`.`

And if we draw a quadratic lying on the x axis, we can intuitively tell that shifting it down ($b^2 - 4ac > 0$) means we’d have 2 solutions, while shifting it up would leave us no intersections with the x axis.


## Closing Remarks

Perhaps completing the square is nought but an algebraic trick to be memorised for exams. But it is so much more than that. It’s the basis for so many of the truths we derive about quadratics, and encapsulates their essence in a miraculously compact form. It’s an incredibly useful tool that can catalyse solutions to many problems by unlocking a more intuitive or visual route.

Completing the square is an exercise in algebraic accuracy – a really good one, at that. Simple but devastating, quick to check with a graph plot, and actually useful

The strategy of completing the square is by no means confined to quadratic equations; in fact, it can often come in helpful with gleaning information about higher order polynomials. It is a vital weapon for enabling many substitutions in [integration](../integration/strats/complete-square.md). And of course, there is its alternative universe alter ego [completing the rectangle<sup>↗</sup>](https://brilliant.org/wiki/diophantine-equations-solve-by-factoring/) (also known as *Simon’s Favourite Factorising Trick*) often used in solving diophantine equations.
