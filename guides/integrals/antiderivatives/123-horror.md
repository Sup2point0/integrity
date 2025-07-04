# 1, 2, 3, Horror
<!-- #SQUARK live!
| dest = guides/integrals/antiderivatives/123-horror
| index = guides / integrals / antiderivatives
| date = 2025 June 5
| update = 2025 July 4
-->

This is an easy integral, just [straight-up layer cake](../methods/layer-cake.md):

```math
\begin{align*}
  &\ \int \frac{1}{x+1} \ dx
  \\ =&\  \ln\left(x+1\right) + c
\end{align*}
```

Add an exponent of $2$, and we get a very different integral:

```math
\begin{align*}
  &\ \int \frac{1}{x^2+1} \ dx
  \\ =&\  \tan^{-1}{x} + c
\end{align*}
```

Change it to a $3$, and now the integral is... very horrible indeed.

```math
\int \frac{1}{x^3+1} \ dx
```

<div class="bigblock">

> <span>Try It Yourself</span>
> 
> If you haven’t solved this integral before, why not try solving it yourself before reading this page?

</div>

I would not call this a fun integral to solve, purely due to how unergonomic the constants involved are. Questions can be complex and ‘messy’, but still nice – this is not one of them.


## Factorise

First notice that the polynomial $x^3 + 1$ can be factorised. Letting $x = -1$ makes the polynomial $0$, so by the factor theorem $(x + 1)$ must be a factor of $x^3 + 1$. Performing the factorisation gives

```math
\begin{align*}
  x^3 + 1 &= 0
  \\ (x+1)(x^2 - x + 1) &= 0
\end{align*}
```

Unfortunately, the quadratic quotient of $x^2 - x + 1$ is not factorisable – in fact its discriminant ($-2$) is negative, so its roots are complex.[^complex-roots]

[^complex-roots]: Rearranging the polynomial equation $x^3 + 1 = 0$ gives $x^3 = -1$, so the roots are the negatives of the 3 roots of unity (solutions to $x^3 = 1$): $-e^{0i} (= -1), -e^{\frac{2\pi}{3}i} (= e^{-\frac{\pi}{3}i}), -e^{\frac{4\pi}{3}i} (= e^{\frac{\pi}{3}i})$.

So our integral becomes

```math
\int \frac{1}{(x+1)(x^2-x+1)} \ dx
```


## Partial Fractions

We’ll need to perform partial fractions with an irredudicible quadratic factor:

```math
\begin{align*}
  \frac{1}{(x+1)(x^2-x+1)} &= \frac{p}{x+1} + \frac{qx+r}{x^2-x+1}
  \\ 1 &= p(x^2-x+1) + qx(x+1) + r(x+1)
\end{align*}
```

Let $x = -1$:

```math
\begin{align*}
  1 &= p(1-(-1)+1) + 0 + 0
  \\ 3p &= 1
  \\ p &= \frac{1}{3}
\end{align*}
```

Let $x = 0$:

```math
\begin{align*}
  1 &= p(0-0+1) + 0 + r(0 + 1)
  \\ 1 &= p + r
  \\ r &= 1 - p
  \\ r &= 1 - \frac{1}{3}
  \\   &= \frac{2}{3}
\end{align*}
```

Equate coefficients of $x^2$:

```math
\begin{align*}
  0 &= p + q
  \\ q &= -p
  \\   &= -\frac{1}{3}
\end{align*}
```

Hence

```math
\begin{align*}
  \frac{1}{(x+1)(x^2-x+1)} &= \frac{1}{3(x+1)} + \frac{-x+2}{3(x^2-x+1)}
  \\ &= \frac{1}{3(x+1)} - \frac{x-2}{3(x^2-x+1)}
\end{align*}
```


## Rational

The rest is just work. We’ll continually split our integral into components we can integrate.

```math
\begin{align*}
  &\ \int \frac{1}{(x+1)(x^2-x+1)} \ dx
  \\ =&\ \int \frac{1}{3(x+1)} - \frac{x-2}{3(x^2-x+1)} \ dx
  \\ =&\ \frac{1}{3}\int \frac{1}{x+1} \ dx - \frac{1}{6}\int \frac{2x-4}{x^2-x+1} \ dx
  \\ =&\ \frac{1}{3}\ln(x+1) - \frac{1}{6}\int \frac{2x-1}{x^2-x+1} - \frac{3}{x^2-x+1} \ dx
\end{align*}
```

For the right, complete the square for [arctan](arctan.md) integration.

```math
\begin{align*}
  =&\ \frac{1}{3}\ln(x+1) - \frac{1}{6}\ln(x^2-x+1) + \frac{3}{6}\int \frac{1}{(x-1/2)^2-1/4+1} \ dx
  \\ =&\ \frac{1}{3}\ln\left(\frac{x+1}{\sqrt{x^2-x+1}}\right) + \frac{1}{2}\int \frac{1}{(x-1/2)^2+3/4} \ dx
  \\ =&\ \frac{1}{3}\ln\left(\frac{x+1}{\sqrt{x^2-x+1}}\right) + \frac{1}{2}\sqrt{\frac{4}{3}}\tan^{-1}\left(\sqrt{\frac{4}{3}}\left(x-\frac{1}{2}\right)\right)
  \\ =&\ \frac{1}{3}\ln\left(\frac{x+1}{\sqrt{x^2-x+1}}\right) + \frac{\sqrt{3}}{3}\tan^{-1}\left(\frac{2\sqrt{3}}{3}\left(x-\frac{1}{2}\right)\right) - c
\end{align*}
```
