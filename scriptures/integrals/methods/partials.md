# Partial Fractions
<!-- #SQUARK live!
| dest = scriptures/integrals/methods/partials
| title = Partial Fractions
| index = scriptures / integrals / methods
-->

Rational functions – functions that only involve polynomials – are often ‘safe’ to integrate because we have a whole host of methods that can allow us to integrate pretty much any rational function. Now, this can often end up being quite long because of all the splitting and reshaping we have to do, but we can often look at an integral like

```math
\int \frac{x+1}{x(x+2)(x^2+1)} \ dx
```

and go, “yep, we can do this no problem.” It might just be a bit long. This is more likely to happen with arbitrary polynomials, but of course in recreational integration, we mathematicians love nice numbers. So there’s a good chance your polynomial(s) will factorise nicely in some way.

```math
\int \frac{1}{x^2+4x-12} \ dx = \int \frac{1}{(x-2)(x+4)} \ dx
```

When the denominator does factorise, we can use ***partial fractions*** to split the entire expression like so:

```math
\int \frac{1}{(x-2)(x+4)} \ dx
= \frac{1}{8} \left(
  \frac{1}{x-2} - \frac{1}{x+6}
\right)
```

This reduces a large, messy fraction of polynomials into several smaller terms which are much easier to integrate.

Partial fractions is not technically an integration technique (it’s an algebraic manipulation that stands perfectly well on its own, and finds use outside of integration), but it’s essential for integrating fractions like this.


## Splitting the Mind

We’ll start with the simplest case, where we have a constant numerator and factorised quadratic denominator:

```math
\int \frac{1}{x^2 - 5x + 6} \ dx
= \int \frac{1}{(x-2)(x-3)} \ dx
```

We know we can write the above expression using partial fractions as

```math
\frac{1}{(x-2)(x-3)}
= \frac{p}{x-2} + \frac{q}{x-3}
```

The challenge now is to find the values of $p$ and $q$.

If you’ve never done this before, it can be a bit mindblowing that you can solve 2 unknowns (or even more than 2, for cubics, quartics, etc.) from just a single equation! The reason we’re able to do so is that this equation hides a lot of *very specific* information, which we’ll see very soon.

Even if we might have no idea of where we’re going, we don’t like fractions when solving an equation. So let’s multiply through by each of the factors:

```math
\begin{align*}
  \frac{1}{(x-2)(x-3)} &= \frac{p}{x-2} + \frac{q}{x-3}
  \\ 1 &= p(x-3) + q(x-2)
\end{align*}
```

This removes the fraction on the left, and multiplies each of $p$ and $q$ by some $x$ terms. We can now expand and re-factorise:

```math
\begin{align*}
  1 &= px - 3p + qx - 2q
  \\ 1 &= (p+q)x + (-3p - 2q)
\end{align*}
```

This looks like a polynomial equation, but we’re not actually solving for $x$ here! We’re trying to solve for the *coefficients* that guarantee the equation holds *for all values* of $x$.

It’s not an equation for $x$, but a relationship between 2 polynomials.

This is the crux here. It means the 2 sides of the equation must represent the *same* polynomial. That means we can compare the coefficients of each power of $x$.

In this case, the left is a constant polynomial, which makes things very simple. The coefficients of $x^2$ and $x$ must both be $0$, while the constant is $1$. So we obtain a system of equations:

```math
\begin{align}
  \text{Equate powers of }x^2: && 0 &= 0
  \\ \text{Equate powers of }x^1: && p + q &= 0
  \\ \text{Equate powers of }x^0: && -3p - 2q &= 1
\end{align}
```

Which solves to give $p = -1$ and $q = 1$.

Cool stuff, eh? That 1 polynomial relation really encapsulated 3 individual equations.

We’ve found the values of our coefficients, so going back to our integral, we can now rewrite the fraction as

```math
\int \frac{1}{(x-2)(x-3)} \ dx
= \int \frac{-1}{x-2} + \frac{1}{x-3} \ dx
```

These fractions have constant numerators and linear denominators, so they just become [straight-up layer cake](layer-cake.md).

```math
-\ln(x-2) + \ln(x-3) + c
```

So, if we have any integral like

```math
\int \frac{1}{ax^2 + bx + c} \ dx
```

and we can factorise the denominator, then we can use partial fractions to split it into individual fractions which we can easily integrate.

In fact, we can integrate the reciprocal of any polynomial with partial fractions, as long as we can factorise it. Equating coefficients gives us a general framework for solving any partial fraction decomposition. Even if we have a higher degree polynomial:

```math
\begin{align*}
  \frac{1}{x^3 + 5x^2 + 2x - 8}
    &= \frac{1}{(x-1)(x+2)(x+4)}
  \\ &= \frac{p}{x-1} + \frac{q}{x+2} + \frac{r}{x+4}
\end{align*}
```

This means we have another power of $x$ to compare coefficients for, giving us another equation. 4 equations is more than enough to solve for 3 unknowns. So we will always have enough equations to solve for all the coefficients.


## Cleansing the Mind

Solving the equations is great, and it’s wonderfully formulaic, but sometimes it’s just a bit long. Especially when you have many factors.

```math
\begin{align*}
  \frac{1}{(x-1)(x+2)(x+4)}
    &= \frac{p}{x-1} + \frac{q}{x+2} + \frac{r}{x+4}
  \\ 1 &= p(x+2)(x+4) + q(x-1)(x+4) + r(x-1)(x+2)
\end{align*}
```

I mean, expanding that isn’t exactly that fun.

But remember that this equation holds true for *all* values of $x$. So, we could just straight-up substitute in any value of $x$ that we want. Looking here, what values of $x$ would help us most in determining the values of $p$, $q$, $r$?

Well, to solve for $p$ we’d want to get rid of $q$ and $r$. And notice both of those variables have an $(x-1)$ term attached. So if we let $x=1$, those terms become $1-1=0$, which erases $q$ and $r$. This isn’t the case for $p$, which stays behind, giving us a simple number-crunching equation to solve.

```math
\begin{align*}
  1 &= p(1+2)(1+4) + q(1-1)(1+4) + r(1-1)(1+2)
  \\ 1 &= 15p + 0q + 0r
  \\ 1 &= 15p
  \\ p &= 1/15
\end{align*}
```

Woah, isn’t that so much faster?

Now you get the gist of it. How would we get rid of $p$ and $r$, leaving $q$? $p$ and $r$ have been multiplied by $(x+2)$, so let $x=-2$ to make those become $0$:

```math
\begin{align*}
  1 &= p(-2+2)(-2+4) + q(-2-1)(-2+4) + r(-2-1)(-2+2)
  \\ 1 &= 0p + -6q + 0r
  \\ 1 &= -6q
  \\ q &= -1/6
\end{align*}
```

And finally, isolate $r$ by letting $x=-4$:

```math
\begin{align*}
  1 &= p(-4+2)(-4+4) + q(-4-1)(-4+4) + r(-4-1)(-4+2)
  \\ 1 &= 0p + 0q + 10r
  \\ 1 &= 10r
  \\ r &= 1/10
\end{align*}
```

There we go, 3 variables done and dusted. Hence:

```math
\frac{1}{(x-1)(x+2)(x+4)} = \frac{1}{15(x-1)} - \frac{1}{6(x+2)} + \frac{1}{10(x+4)}
```

This is definitely my preferred way of solving partial fractions, although it won’t always carry you to the end. This is especially true for partial fractions with repeated roots, where things get a little spicier. Let’s take a look at those next.


## Shattering the Mind

There are, broadly speaking, 3 types of partial fraction terms:

| type | examples | notes |
| :--- | :------- | :---- |
| **unique root** | $x$, $(x-2)$, $(1-5x)$ |
| **repeated root** | $x^2$, $x^3$, $(x+1)^2$ | The same factor of $x$ more than once. |
| **irreducible quadratic** | $(x^2 + 1)$, $(x^2 + 2x + 3)$ | A degree 2 polynomial that can’t be factorised (has complex roots). |

For instance, this full-flavour fraction:

```math
\frac{1}{x^3(x-1)(x^2+3)}
```

Has in the denominator a unique root of $(x-1)$, a repeated root of $x^3$, and an irreducible quadratic of $x^2 + 3$.

These 3 types of terms decompose differently.

### Unique Root
Unique roots split as we’ve seen above, nothing special there.

```math
\frac{1}{(x-2)(x-4)} = \frac{p}{x-2} + \frac{q}{x-4}
```

### Repeated Roots
When we have the same expression raised to a power, we have to ‘count up’ the lower powers when expanding to partial fractions. So for a double repeated root:

```math
\frac{1}{x^3(x-9)} = \frac{p}{x} + \frac{q}{x^2} + \frac{r}{x^3} + \frac{s}{x-9}
```

Here we have terms over $x^1$, $x^2$ up to $x^3$, and along with the unique root.

Yes, this does mean extra variables to solve. It’s not very nice.

### Irreducible Quadratic
But that’s nowhere near as not nice as having a quadratic you can’t factorise. We account for this by having a linear (degree 1 polynomial) numerator, which has 2 constants to solve for...

```math
\frac{1}{x(x^2+5)} = \frac{p}{x} + \frac{qx+r}{x^2+5}
```

The worst part is, even after solving for them, you might have to further manipulate that term to integrate it. If you’re lucky and the question’s been engineered nicely, it’ll already be [arctan](arctan.md) or layer cake, but if not, you’ll usually split it into 1 layer cake and 1 arctan. The arctan will probably have coefficients too, lol.
