# Integrating the Secant Cubed
<!-- #SQUARK live! dev!
| dest = guides/integrals/antiderivatives/sec-3
| capt = An unlikely duplication
| index = guides / integrals / antiderivatives
-->

Here’s a particularly nontrivial power-of-a-trig-function integral:

```math
\int \sec^3{x} \ dx
```

So, how are we dealing with this?

If this were any other trigonometric function cubed we’d pull out a trigonometric identity. For instance

```math
\int \cos^3{x} \ dx
= \int (\cos{x})(\cos^2{x}) \ dx
```

Then using $\sin^2{x} = 1 - \cos^2{x}$ we get

```math
\begin{align*}
  &= \int (\cos{x})(1 - \sin^2{x}) \ dx
  \\ &= \int \cos{x} - \sin^2{x} \cos{x} \ dx
\end{align*}
```

and the rest is easy to integrate – inverse chain rule takes care of the right. So the strategy here was to break the product of $\sin{x}$-s up into $\sin{x}$ and $\cos{x}$, giving us an expanded product with parts that we can individually integrate.

Let’s try the same thing for $\sec{x}$. We’ll split it into $\sec{x}$ and $\sec^2{x}$, then use the trigonometric identity $\tan^2{x} + 1 = \sec^2{x}$ (also part of your [standard arsenal](../everything-anything.md)), giving

```math
\begin{align*}
  &\ \int \sec^3{x} \ dx
  \\ =&\ \int (\sec{x})(\sec^2{x}) \ dx
  \\ =&\ \int (\sec{x})(\tan^2{x} + 1) \ dx
  \\ =&\ \int \sec{x} \tan^2{x} + \sec{x} \ dx
\end{align*}
```

Now $\sec{x} \tan^2{x}$ might look like it *should* work perfectly – but actually, there’s no inverse chain rule going on here! $\sec^2{x}$ is the derivative of $\tan{x}$, but here it’s $\tan{x}$ that’s been squared, not $\sec{x}$. Trying to split it up we get

```math
\sec{x} \tan^2{x} = (\sec{x} \tan{x})(\tan{x})
```

But again, we’re left with $\tan{x}$, not the $\sec{x}$ we want.

Okay, but we seem to have a derivative, so maybe some alarm bells in your head are ringing for [integration by parts](../methods/parts). Well, let’s try it.

We’ll integrate $\sec{x} \tan{x}$ to give $\sec{x}$, and differentiate $\tan{x}$ to give $\sec^2{x}$. Hence

```math
\begin{align*}
  &\ \int (\sec{x} \tan{x})(\tan{x}) \ dx
  \\ =&\ (\sec{x})(\tan{x}) - \int (\sec{x})(\sec^2{x}) \ dx
  \\ =&\ \sec{x} \tan{x} - \int \sec^3{x} \ dx
\end{align*}
```

And what’d’y’know, our original integral of $\sec^3{x}$ has popped up again! Sometimes this can be an indication of parts gone wrong,[^parts-wrong] but here it’s a beautiful sight to behold, because it’s solved the integral for us.

[^parts-wrong]: This only occurs if you’ve done parts twice but ended up doing the reverse of the first parts in the second iteration. It’s an easy trap to fall into!

We can now put what we’ve just found into our original integral:

```math
\begin{align*}
  \int \sec^3{x} \ dx
    &= \int \sec{x} \tan^2{x} + \sec{x} \ dx
  \\ &= \int \sec{x} \tan^2{x} \ dx + \int \sec{x} \ dx
  \\ &= \sec{x} \tan{x} - \int \sec^3{x} \ dx + \int \sec{x} \ dx
\end{align*}
```

Moving the duplicate integral of $\sec^3{x}$ over:

```math
\begin{align*}
  2 \int \sec^3{x} \ dx
    &= \sec{x} \tan{x} + \int \sec{x} \ dx
  \\ &= \sec{x} \tan{x} + \ln\left| \sec{x} + \tan{x} \right|
\end{align*}
```

And so finally,

```math
\int \sec^3{x} \ dx = \frac{1}{2} \sec{x} \tan{x} + \frac{1}{2} \ln\left| \sec{x} + \tan{x} \right| - c
```

Crazy, right?

And actually, you can derive the same result by *starting* with parts. Again, split $\sec^3{x}$ as $\sec{x}$ and $\sec^2{x}$.

```math
\begin{align*}
  \int \sec^3{x} \ dx
    &= \int (\sec{x})(\sec^2{x}) \ dx
\end{align*}
```

Then apply parts, integrating $\sec^2{x}$ to $\tan{x}$ and differentiating $\sec{x}$ to $\sec{x} \tan{x}$.

```math
\begin{align*}
  &= (\sec{x})(\tan{x}) - \int (\sec{x}\tan{x})(\tan{x}) \ dx
  \\ &= \sec{x}\tan{x} - \int \sec{x}\tan^2{x} \ dx
\end{align*}
```

This gives us the same integral that we had above! But of course we can’t do parts again, since that would just cancel out...[^parts-cancel]

[^parts-cancel]: *This* is where getting the same thing through parts is not what you want.

```math
\begin{align*}
  &= \sec{x}\tan{x} - \left(\sec{x}\tan{x} - \int \sec^3{x} \ dx \right)
  \\ &= \int \sec^3{x} \ dx
    \qquad \text{right back where we started!}
\end{align*}
```

Instead, we can do what we did above, but backwards – using the identity to write $\tan^2{x}$ as $\sec^2{x} - 1$.

```math
\begin{align*}
  &\ \sec{x}\tan{x} - \int \sec{x}\tan^2{x} \ dx
  \\ =&\ \sec{x}\tan{x} - \int (\sec{x})(\sec^2{x} - 1) \ dx
\end{align*}
```

Then we can expand and separate the integral, once again giving us a duplicate integral of $\sec^3{x}$.

```math
\begin{align*}
  &= \sec{x}\tan{x} - \int \sec^3{x} - \sec{x} \ dx
  \\ &= \sec{x}\tan{x} - \int \sec^3{x} \ dx + \int \sec{x} \ dx
\end{align*}
```

And we know the drill from there.

```math
\begin{align*}
  2 \int \sec^3{x} \ dx
    &= \sec{x}\tan{x} + \int \sec{x} \ dx
  \\ \int \sec^3{x} \ dx &= \frac{1}{2} \sec{x} \tan{x} + \frac{1}{2} \ln\left| \sec{x} + \tan{x} \right| - c
\end{align*}
```

I find it pretty cool how both methods apply the same 2 methods – ‘morphing’ trig with parts, and ‘splitting’ trig with identities – yet apply them in different orders to lead to the same result. Just goes to show how powerful and important flexibility with your trigonometric algebra is. Not only in integration, but maths as a whole!
