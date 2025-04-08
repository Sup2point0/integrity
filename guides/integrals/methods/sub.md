# General Substitution
<!-- #SQUARK live! feat! dev!
| dest = guides/integrals/methods/sub
| capt = Reducing an integral
| index = guides / integrals / methods
-->

At the heart of integration is **substitution**. It is our most powerful and versatile weapon for tackling almost any kind of integral. Pretty much every integral you solve will almost certainly involve some form of substitution. In fact, you’ll come to see that most methods of integration are actually just abstractions upon substitution. Just as chain rule governs the forces of nature, substitution gives rise to the echelons of integration. It truly is the most vital skill for an integrator to nurture.

There are many, many kinds of substitution. Spotting which kind of substitution to use, and what exact substitution to make, is often nontrivial. It takes much practice to build up the intuition for spotting what works in a particular scenario, but with enough experience, it can become almost second nature.


## What is Substitution?

A substitution rewrites an integral in terms of a different variable. For instance, if we have the integral

```math
\int 3(3x+1)^2 \ dx
```

This is an integral with respect to the variable $x$. We can choose to let a new variable $t$ denote the expression $3x + 1$.

```math
3x+1 = t
```

Then we go through our expression, replacing each $x$ with the equivalent expression in terms of $t$.

```math
\begin{align*}
  \int 3(\textcolor{#4d9dcd}{3x+1})^2 \ dx &= \int 3\textcolor{#4d9dcd}{t}^2 \ dx
\end{align*}
```

What this has done is made the integral so much nicer to deal with. More importantly, it’s in a form we can now easily integrate. So substitution is a way of simplifying integrals that lets us tackle them in steps.

However, we cannot integrate this quite yet, as we can only integrate with respect to $t$, not $x$. So we also need to replace $dx$ with the corresponding $dt$.


## Substituting with Respect

There are many ways to think about this, but the end results are the same. To get our integral in terms of $dt$ instead of $dx$, we’ll find a way to relate $dt$ to $dx$.

Let’s take our substitution, and differentiate both sides with respect to $x$:

```math
\begin{align*}
  t &= 3x+1
  \\ \frac{d}{dx} \left( t \right) &= \frac{d}{dx} \left( 3x+1 \right)
  \\ \frac{dt}{dx} &= 3
\end{align*}
```

Now we can move $dx$ over to the other side and divide by $3$ to obtain our relationship between $dt$ and $dx$:

```math
\begin{align*}
  dt &= 3 \ dx
  \\ dx &= \frac{1}{3} \ dt
\end{align*}
```

$dx$ and $dt$ here represent **differentials**, so writing the relationship between them in this way is known as **differential** form.

And algebraically, everything will work out fine if we simply replace $dx$ in our integral with this expression of $dt$. We end up with an integral only in terms of $t$, which we can then evaluate.

```math
\begin{align*}
  \int 3t^2 \ \textcolor{#4d9dcd}{dx} &= \int 3t^2 \cdot \textcolor{#4d9dcd}{\frac{1}{3} \ dt}
  \\ &= \int t^2 \ dt
  \\ &= \frac{1}{3} t^3 + c
\end{align*}
```

After carrying out the integration, remember to ‘undo’ your substitution by putting $x$ back in:

```math
\frac{1}{3} \textcolor{#4d9dcd}{t}^3 + c = \frac{1}{3} \left( 3x+1 \right) + c
```


## Deriving Substitution

So why exactly does substitution work? It’s perhaps easy to see when the substitution is just a translation ($t = x + a$), but things can quickly become unintuitive once we start scaling ($t = ax$) or nesting functions ($t = g(x)$).

Fundamentally, substitution in integration is just the equivalent of chain rule from differentiation (except in reverse of course). When we differentiate nested functions, the derivative ‘pops out’:

```math
\frac{d}{dx} f(g(x)) = f'(g(x)) \cdot \textcolor{#4d9dcd}{g'(x)}
```

The way to prove this is to consider the ’chain’ of variables. Let $t = g(x)$ to denote the nested function, then $y = f(g(x)) = f(t)$. We ‘split’ the derivative to incorporate the intermediate variable $t$:

```math
\begin{align*}
  \frac{dy}{dx} &= \frac{dy}{dt} \cdot \frac{dt}{dx}
  \\ &= f'(t) \, g'(x)
  \\ &= f'(g(x))\,  g'(x)
\end{align*}
```

Well, shouldn’t be too hard to go back the other way.

If we find $\frac{dt}{dx}$, multiplying the integral by it will cancel $dx$, leaving just $dt$.

```math
\int dx \cdot \frac{dx}{dt} = \int dt
```

Or, more simply, we can find an expression for $dx$ in terms of $dt$, and replace it directly.


## Residual Derivative


## Multiple Substitution
