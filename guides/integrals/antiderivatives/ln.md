# Integrating the Logarithm
<!-- #SQUARK live! dev!
| dest = guides/integrals/antiderivatives/ln
| capt = (It’s not actually that difficult.)
| index = guides / integrals / antiderivatives
| date = 2025 January 30
-->

So far, our antiderivatives of standard functions have been relatively straightforward to figure out. All we’ve had to do is think about what would *differentiate* to give our integrand. $x^2$ gives $2x$, $\sin(x)$ gives $\cos(x)$, $e^x$ gives $e^x$. But now comes a bridge that can’t be crossed while seeing what’s on the other side.

```math
\int \ln{x} \ dx
```

Simple, but devastating. Where do we start?

A surprisingly common mistake is to say it’s $\frac{1}{x}$ – but remember this is the *derivative* of $\ln(x)$. What we want to find is its *antiderivative*. That being said, the derivative of $\ln(x)$ will be very handy to know, so keep it in mind.

It may not be immediately apparent how you might go about this. Before we try integrating the bare log, let’s explore some other integrals involving $\ln(x)$ to get a feel for it.


## Dojo Training

[ TODO ]


## Entering the Battlefield

What these previous examples have done is help us build up an intuition for how $\ln(x)$ works. In particular, you may have noticed its derivative is really quite nice to work with, because it just turns into a vanilla $x$ (division).

So when we differentiate $\ln(x)$, we get rid of the $\ln$ entirely and don’t have to worry about it all.

Looking at our original integral

```math
\int \ln{x} \ dx
```

Is there any way for us to differentiate the $\ln(x)$?

The only way to differentiate an expression in integration is through [integration by parts]. Now that requires having a product of 2 terms, but we only have 1 term here.

[ TODO ]


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

No trick, just plain substitution. Not actually that difficult to spot, right?
