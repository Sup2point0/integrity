# Signing Off Inequalities
<!-- #SQUARK live!
| dest = guides/general/inequalities
| capt = Solving inequalities with twin-signed terms
| date = 2025 June 27
| index = guides / general
-->

Inequalities are quite a bit more finicky than plain equations to solve, and are one of the invisible-class [S-I+G-N error](sign.md)’s favourite breeding grounds. The source of all this pain is their ability to invert when certain operations are applied to both sides.

You can see this very easily. This is true:

```math
6 < 9
```

If this were an equation, like $p = q$, we could multiply both sides by $-1$ and the equation would still hold. Do that with the inequality, and...

```math
-6 < -9
```

Uh oh. That’s not quite right. We need to reverse the relationship here:

```math
-6 \textcolor{#4d9dcd}{>} -9
```


## When Do We Invert?

Ah. That’s the question, isn’t it?

From above we can see multiplying by $-1$ is one such operation that reverses the inequality. More generally, multiplying by any **negative** value will invert an inequality. Doing this with variables, suppose we have a relationship

```math
y > x
```

If want to multiply through by a negative constant $k$, then we’ve got to flip the greater than to a less than.

```math
ky < kx  \quad \left( k < 0, k \in \mathbb{R} \right)
```

Number lines are basic, sure, but they’re actually extremely useful for visualising this intuitively:

<!-- TODO -->
![Reflecting values in 0](...)


## Solving Inequalities Involving Logarithms

> I use $\ln(x)$ here, but this applies to any base of $\log(x)$.

It’s all fun and games until you get to $\ln()$. Here’s a gnarly inequality:

```math
\frac{1}{\ln(0.1)} < \frac{1}{\ln(x)}
```

<div class="bigblock">

> <span>Try It Yourself</span>
>
> Before you read on, try solving this inequality yourself!

</div>

The issue with $\ln(x)$ is that it is decidely [*twin-signed*](../integrals/collections/glossary.md#twin-signed). In fact, it can even be $0$. If you’re not familiar, this is what the graph of $\ln(x)$ looks like:

```desmos
y = \ln\left(x\right)
```

Thus whether $\ln(x)$ is positive or negative depends on the value of $x$. So if we have an inequality

```math
\frac{1}{\ln{x}} < 1
```

We don’t know with certainty the sign of $\ln(x)$ unless we know $x$. But to solve for $x$, we need to know the sign of $\ln(x)$. But we need $x$ for that. Uhh...

Luckily, this isn’t an actual catch 22. The solution is to just separately consider the 2 cases – solve for $x$ if $\ln(x) > 0$, solve $x$ if $\ln(x) < 0$, and then combine the solutions.

So, for the inequality above, consider the case where $\ln(x) < 0$.

```math
\frac{1}{\ln(0.1)} < \frac{1}{\ln(x)} \quad \left\{ \ln(x) < 0 \right\}
```

Then multiplying through by $\ln(x)$ does require flipping the inequality.

```math
\frac{\ln(x)}{\ln(0.1)} > 1
```

$\ln(0.1)$ is also negative, so multiplying through by that flips the inequality again.

```math
\ln(x) < \ln(0.1)
```

Since $\ln(x)$ is increasing, $\ln(p) < \ln(q)$ if and only if $p < q$. Hence we can remove the logs to obtain

```math
x < 0.1
```

But wait! Remember that the input to $\ln(x)$ should be positive.[^log-positive] So we also have the added restriction that $x > 0$. Hence the first half of our solution is

[^log-positive]: JUST IGNORE COMPLEX-VALUED LOGARITHMS OK

```math
0 < x < 0.1
```

Then consider the other case where $\ln(x) > 0$.

```math
\frac{1}{\ln(0.1)} < \frac{1}{\ln(x)} \quad \left\{ \ln(x) > 0 \right\}
```

Now multiplying through by $\ln(x)$ no longer requires flipping the inequality, so the only flip happens from multiplying through by $\ln(0.1)$.

```math
\begin{align*}
  \frac{\ln(x)}{\ln(0.1)} &< 1
  \\ \ln(x) &> \ln(0.1)
  \\ x &> 0.1
\end{align*}
```

$x > 0$ so the input to $\ln(x)$ is certainly positive – no domain issues. But remember this half of the solution assumes $\ln(x) > 0$, which means $x > 1$. Hence we need to further restrict our solution space to $x > 1$, not just $x > 0.1$.

Whew. Overall, merging the 2 solutions we have

```math
0 < x < 0.1 \quad\cup\quad 1 < x
```

Which, plotted on Desmos, certainly looks quite strange.

```desmos
\frac{1}{\ln\left(0.1\right)} < \frac{1}{\ln\left(x\right)}
```


## Continuous Distribution Functions

Where inequalities reach their worst is solving for mappings between continuous random variables. For instance, given a CRV $X$ with probability density function

```math
\text{cdf}_X (x) = \begin{cases}
  \begin{align*}
       &\ x &\ & -1 < x < 1
    \\ &\ 0   &\ & \text{otherwise}
  \end{align*}
\end{cases}
```

If $Y = X^2$, then

```math
\begin{align*}
  \text{cdf}_Y (y)
    &= \mathbb{P} \left( Y \lt y \right)
  \\ &= \mathbb{P} \left( X^2 \lt y \right)
\end{align*}
```

At this step we pause, because we now need to consider what happens to the direction of the inequality if we make any manipulations.


## Closing Remarks

Can I just comment how elegant the name “inequality” is? Like, that’s literally what it is, it’s representing 2 things that are (potentially) *unequal*, because one’s greater than the other. It seems so obvious, but you kinda just accept “inequality” as yet another maths term.[^inequality]

[^inequality]: Maybe the programming languages using `<>` to mean `!=` isn’t so crazy after all... nah who am I kidding, stop that deranged behaviour right now 💀
