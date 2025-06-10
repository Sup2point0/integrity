# A Fun Way of Finding the Artanh Integral
<!-- #SQUARK live!
| dest = guides/integrals/adventures/artanh
| capt = When hoping for the best works out
| index = guides / integrals / adventures
| date = 2025 June 10
-->

This is the [artanh](../antiderivates/artanh.md) integral, which shows up pretty often, especially when integrating rational functions:

```math
\int \frac{1}{1-x^2} \ dx
```

The canonical method is to use partial fraction decomposition:

```math
\begin{align*}
  &= \int \frac{1}{(1-x)(1+x)} \ dx
  \\ &= \int \frac{1}{(1+x)(1-x)} \ dx
  \\ &= \frac{1}{2} \int \frac{1}{1+x} + \frac{1}{1-x} \ dx
\end{align*}
```

This then integrates easily via 2 [straight-up layer cakes](../methods/layer-cake.md), into a form that happens to collapse to $\tanh^{-1}(x)$.

```math
\begin{align*}
  &= \frac{1}{2} \left[ \ln(1+x) - \ln(1-x) \right]
  \\ &= \frac{1}{2}\ln\left( \frac{1+x}{1-x} \right)
  \\ &= \tanh^{-1}{x} + c
\end{align*}
```

I’ve found a different route[^diff] to this result, which came to me while thinking about polynomial division.

[^diff]: *visually different, algebraically it’s all the same lol


## Pulling the Power Move

My thought process was this – you’ve got these factors in the denominator, so it’d be great if you could just cancel them with stuff in the numerator.

```math
\int \frac{1}{(1-x)(1+x)} \ dx
```

Well, the easiest way to do that would be to get a $(1+x)$ in the numerator – so we’ll add $(+x -x)$.

```math
= \int \frac{1+x-x}{(1-x)(1+x)} \ dx
```

Now splitting spits out a nicely integratable layer cake on the left, but the right is still a bit more problematic.

```math
\begin{align*}
  &= \int \frac{1+x}{(1-x)(1+x)} + \frac{-x}{(1-x)(1+x)} \ dx
  \\ &= \int \frac{1}{1-x} + \frac{-x}{(1-x)(1+x)} \ dx
\end{align*}
```

What we want is an extra $1$ to get $(1-x)$. So... let’s add $(+1-1)$.

```math
\begin{align*}
  &= \int \frac{1}{1-x} + \frac{-x+1-1}{(1-x)(1+x)} \ dx
  \\ &= \int \frac{1}{1-x} + \frac{1-x}{(1-x)(1+x)} + \frac{-1}{(1-x)(1+x)} \ dx
  \\ &= \int \frac{1}{1-x} + \frac{1}{1+x} \ dx - \int \frac{1}{(1-x)(1+x)} \ dx
\end{align*}
```

What’d’y’know, that’s our original integral! What an incredible [duplication](../methods/duplicate.md) we’ve got on our hands. So, moving to the other side, we have

```math
\begin{align*}
  \textcolor{#4d9dcd}{\int \frac{1}{(1-x)(1+x)} \ dx} &= \int \frac{1}{1-x} + \frac{1}{1+x} \ dx - \textcolor{#4d9dcd}{\int \frac{1}{(1-x)(1+x)} \ dx}
  \\ \textcolor{#4d9dcd}{2 \int \frac{1}{(1-x)(1+x)} \ dx} &= \int \frac{1}{1-x} + \frac{1}{1+x} \ dx
  \\ 2\int \frac{1}{(1-x)(1+x)} \ dx &= -\ln(1-x) + \ln(1+x)
  \\ \int \frac{1}{(1-x)(1+x)} \ dx &= \frac{1}{2}\ln\left( \frac{1+x}{1-x} \right) + c
\end{align*}
```


## The Original Power Move

That’s a nice way of seeing how you could’ve derived it through problem-solving. I actually got there more through instinct/intuition – after staring at my phone for a couple seconds and pondering the possibility, I realised we could get the extra $1$ we needed by multiplying by $2$ at the start.

```math
\begin{align*}
  &\ \int \frac{1}{(1-x)(1+x)} \ dx
  \\ =&\ \frac{1}{2} \int \frac{2}{(1-x)(1+x)} \ dx
\end{align*}
```

Then you pull the power move, and the split is now strategical:

```math
\begin{align*}
  &= \frac{1}{2} \int \frac{2+x-x}{(1-x)(1+x)} \ dx
  \\ &= \frac{1}{2} \int \frac{1+x}{(1-x)(1+x)} + \frac{1+x}{(1-x)(1+x)} \ dx
  \\ &= \frac{1}{2} \int \frac{1}{1-x} + \frac{1}{1+x} \ dx
\end{align*}
```

Just works ;)


## Does It Generalise?

Of course if you know the artanh integral it’s a bit of a waste of time to re-derive this relationship every time. But just for enrichment, let’s see if this method generalises.

```math
\int \frac{1}{k^2 - x^2} \ dx
```

How should I put this... yeah, ofc it does lmao. Only needed to stare at the problem for like, 4 seconds. Why did I think it wouldn’t :confused:

```math
\begin{align*}
  &= \int \frac{1}{(k-x)(k+x)} \ dx
  \\ &= \frac{1}{2k} \int \frac{2k}{(k-x)(k+x)} \ dx
  \\ &= \frac{1}{2k} \int \frac{2k+x-x}{(k-x)(k+x)} \ dx
  \\ &= \frac{1}{2k} \int \frac{k+x}{(k-x)(k+x)} + \frac{k-x}{(k-x)(k+x)} \ dx
  \\ &= \frac{1}{2k} \int \frac{1}{k-x} + \frac{1}{k+x} \ dx
\end{align*}
```

Love to see it!
