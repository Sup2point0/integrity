# Integrating the Logarithm
<!-- #SQUARK live!
| dest = guides/integrals/antiderivatives/ln
| capt = (It’s not actually that difficult.)
| index = guides / integrals / antiderivatives
| date = 2025 February 11
-->

So far, our antiderivatives of standard functions have been relatively straightforward to figure out. All we’ve had to do is think about what would *differentiate* to give our integrand. $x^2$ gives $2x$, $\sin(x)$ gives $\cos(x)$, $e^x$ gives $e^x$. But now comes a bridge that can’t be crossed while seeing what’s on the other side.

```math
\int \ln{x} \ dx
```

Simple, but devastating. Where do we start?

A surprisingly common mistake is to say it’s $\frac{1}{x}$ – but remember this is the *derivative* of $\ln(x)$. What we want to find is its *antiderivative*. That being said, the derivative of $\ln(x)$ will be very handy to know, so keep it in mind.

It may not be immediately apparent how you might go about this. Before we try integrating the bare log, let’s explore some other integrals involving $\ln(x)$ to get a feel for it.


## Dojo Training

If you’re not familiar with integrals involving $\ln(x)$, some of these may look scary to you. Take it easy, see how you can rewrite things to make it easier for to spot things, and above all remember the derivative of $\ln(x) = \frac{1}{x}$.

### Divided by $x$
```math
\int \frac{\ln{x}}{x} \ dx
```

Dividing a function by $x$? Why would this be any easier than $\ln(x)$? Upon seeing this integral, your mind could jump to many different thoughts. Substitution? [Layer cake](../methods/layer-cake.md)? Maybe we can use parts, somehow?

Indeed, most functions divided by $x$ can’t be integrated to give an answer in terms of elementary functions, but $\ln(x)$ is one the few that can. It’s all down to its derivative.

When dividing terms, it can sometimes be helpful to write them separately to help you see what’s going on. In this case, let’s pull out the $x$ as $\frac{1}{x}$:

```math
\int \frac{1}{x} \ln{x} \ dx
```

Now, what’s the relationship between $\frac{1}{x}$ and $\ln(x)$? Why of course, $\frac{1}{x}$ is the derivative of $\ln(x)$! This means we can use [inverse chain rule](../methods/inverse-chain.md), or, carrying out the full solution with substitution:

```math
\begin{align*}
  \ln{x} &= t
  \\ \frac{1}{x} \ dx &= dt
\end{align*}
\\
\begin{align*}
  \Rightarrow \int \frac{1}{x} \ln{x} \ dx &= \int t \ dt
  \\ &= \frac{1}{2} t^2
  \\ &= \frac{1}{2} \ln(x)^2 + c
\end{align*}
```

So, there the trick was to spot the $\frac{1}{x}$ derivative on the outside.

### Full Division
```math
\int \frac{1}{x \ln{x}} \ dx
```

After the previous integral, this one should be a lot more obvious. Notice once again we can split the fraction:

```math
\int \frac{1}{x \ln{x}} \ dx = \int \frac{1}{x} \cdot \frac{1}{\ln{x}} \ dx
```

And we have $\frac{1}{x}$, the derivative of $\ln(x)$, on the outside. This sets us up for another $\ln(x) = t$ substitution, giving

```math
= \int \frac{1}{t} \ dt
```

And hey, we know this integrates to $\ln(t)$ – so our answer is

```math
\begin{align*}
  &= \ln{t}
  \\ &= \ln(\ln{x}) + c
\end{align*}
```

Looking back, a way to jump straight to this with straight-up layer cake is to elevate the $\frac{1}{x}$ into the numerator:

```math
\int \frac{1}{x \ln{x}} \ dx = \int \frac{\frac{1}{x}}{\ln{x}} \ dx
```

A little more fiddly, but still a nice way to think about it.

### Multiplying by $x$
```math
\int x \ln{x} \ dx
```

Ok, this time there’s no $\frac{1}{x}$ on the outside for us to leverage. So what do we do here?

When we have $x$ multiplied by a function, we usually go for parts, since the $x$ vanishes to $1$ when differentiated. But in this case, we would then have to integrate $\ln(x)$ – which we don’t know how to do yet – and we’d also have to integrate *that* again after.

But, we do know the derivative of $\ln(x)$, and as it happens, it just gives us another polynomial in $x$. In other words, we’d just be left with powers of $x$, which is no problem at all.

So let’s do integration by parts, integrating $x$ and differentiating $\ln(x)$.

```math
\begin{align*}
  f &= \ln{x}  &  g &= \frac{1}{2} x^2
  \\ f' &= \frac{1}{x}  &  g' &= x
\end{align*}
```

Then

```math
\begin{align*}
  fg - \int f'g \ dx
    &= \ln(x) \cdot \frac{1}{2} x^2 - \int \frac{1}{x} \cdot \frac{1}{2} x^2 \ dx
  \\ &= \frac{1}{2} x^2 \ln{x} - \frac{1}{2} \int x \ dx
  \\ &= \frac{1}{2} x^2 \ln{x} - \frac{1}{4} x^2 + c
\end{align*}
```


## Entering the Battlefield

What these previous examples have done is help us build up an intuition for how $\ln(x)$ works. In particular, you may have noticed its derivative is really quite nice to work with, because it just turns into a vanilla $x$. No $\ln(x)$, $e^x$ or other fanciness involved.

So looking at our original integral

```math
\int \ln{x} \ dx
```

How could we manipulate it such that we could differentiate $\ln(x)$?

Well, earlier we differentiated it when using integration by parts. But we only have 1 term here, not a product of 2 terms, so we can’t exactly use parts.

...or can we?

```math
\int \ln{x} \ dx = \int 1 \cdot \ln{x} \ dx
```

We can write anything how we want, so long as they’re still mathematically congruent. And anything multiplied by $1$ is itself.

Now we can carry out parts just fine. Sure, the $1$ will integrate to $x$, which is an increase in complexity, but this is a non-issue since the important thing is *getting rid of* the $\ln(x)$.

```math
\begin{align*}
  f &= \ln{x}  &  g &= x
  \\ f' &= \frac{1}{x}  &  g' &= 1
\end{align*}
\\
  fg - \int f'g \ dx = \ln(x) \cdot x - \int \frac{1}{x} \cdot x \ dx
```

In fact, the division even cancels out nicely to just give us

```math
\begin{align*}
  &= x \ln x - \int \ dx
  \\ &= x \ln x - x + c
\end{align*}
```

There. QED.



## Postmortem

$\int \ln{x} \ dx$ is often quoted as a bit of a ‘magical’ integral since it’s got this trick of multiplying by $1$. But funnily enough, you don’t actually need the trick at all.

The other thing that makes $\ln(x)$ so nice is its intimate relationship with $e^x$ – and $e^x$ is certainly one of the nicest terms to work with in integration. Knowing this, we shouldn’t be afraid to substitute out integral, because here’s what happens...

```math
\begin{align*}
  \ln{x} &= t
  \\ x &= e^t
  \\ dx &= e^t \ dt
\end{align*}
```

```math
\Rightarrow \int \ln{x} \ dx = \int te^t dt
```

And *that* is the archetypical integration by parts. So we end up with

```math
\begin{align*}
  &= te^t - e^t
  \\ &= x\ln{x} - x - c
\end{align*}
```

Which after re-substituting gives us exactly the same as before.

No trick, just plain substitution.[^ln-exp] Not actually that difficult to spot, right?

[^ln-exp]: This helps illustrate why substituting $\ln(x)$ or $e^x$ are common and generally ‘safe’ strategies in integration – both have really nice derivatives, and many terms will just end up turning into one of the 2.
