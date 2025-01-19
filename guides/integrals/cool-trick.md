# A Neat Little Integration Trick
<!-- #SQUARK live!
| dest = guides/integrals/neat-trick
| capt = Abusing the +c
| index = guides / integrals
| date = 2025 January 15
-->

Here’s a pretty standard integral. How would you approach it?

```math
\int x \tan^{-1}{x}\ dx
```

My go-to approach for these is unironically substituting $tan^{-1}{x} = t$, but the fastest way is actually integration by parts.

```math
\int f(x) g'(x) = f(x)g(x) - \int f'(x)g(x)\ dx
```

We can’t integrate $\tan^{-1}{x}$ easily so that’ll be what we differentiate. We’ll then integrate $x$ to give $\frac{1}{2} x^2$, and so we have

```math
\begin{align*}
  &= \frac{1}{2} x^2 \tan^{-1}{x} - \int \frac{1}{2} x^2 \cdot \frac{1}{x^2 + 1}\ dx
  \\ &= \frac{1}{2} x^2 \tan^{-1}{x} - \frac{1}{2} \int \frac{x^2}{x^2 + 1}\ dx
\end{align*}
```

Now here’s something we leave out. Think about what we’re doing when we use integration by parts. We differentiate one function, cool. But we integrate the other – and we all know that something you can never forget when integrating is the $+c$.

Wait, so how can we leave it out with integration by parts? We’ll look at exactly why that works in just a moment, but for now let’s just throw it back in like the law-abiding mathematicians we are:

```math
= \left( \frac{1}{2} x^2 + c \right) \tan^{-1}{x} - \frac{1}{2} \int \frac{x^2 + c}{x^2 + 1}\ dx
```

Hmm... what now?

Well, here’s the thing: $c$ is an arbitrary constant. We can let it be anything, anything we want. So looking at the terms we’ve got here, what value of $c$ would be most helpful to us? What would give a really nice solution path?

If we put $c = 1$, notice what happens.

```math
\begin{align*}
  &= \left( \frac{1}{2} x^2 + 1 \right) \tan^{-1}{x} - \frac{1}{2} \int \frac{x^2 + 1}{x^2 + 1}\ dx
  \\ &= \left( \frac{1}{2} x^2 + 1 \right) \tan^{-1}{x} - \frac{1}{2} \int\ dx
\end{align*}
```

Yep. It just cancels out.

No $+1 -1$ required, just deal with it by setting $c$. Isn’t that mindblowing?

It feels weird that this works – it’s like we’re abusing maths. It’s unsettling in that you find yourself questioning whether this always holds true.

Well, can’t argue with maths, so let’s go ahead and prove this. In fact, we’ll do it for the general case!

We’ll use $f$ and $g$ to denote 2 arbitrary functions $f(x)$ and $g(x)$, dropping the $(x)$ for brevity. Start by applying parts, with $g'$ integrating to $g + c$. 

```math
\begin{align*}
  &\ \int fg'\ dx
  \\ =&\ f\left(g+c\right)-\int f'\left(g+c\right)\ dx
\end{align*}
```

We’ll expand out and split the integral... (remembering not to make an [S-I+G-N error](../sign.md)!)

```math
\begin{align*}
  &= fg+fc-\int f'g+f'c\ dx
  \\ &= fg+fc-\int f'g\ dx-\int f'c\ dx
\end{align*}
```

And the $c$ separates out into an integral of $f'$. Of course by the fundamental theorem of calculus the integral of a derivative is just the original function, so this integrates to $cf$.

```math
\begin{align*}
  &= fg+fc-\int f'g\ dx-fc
  \\ &= fg-\int f'g\ dx+fc-fc
  \\ &= fg-\int f'g\ dx
\end{align*}
```

And would you look at that, the extra terms introduced by adding $+c$ cancelled out! And since this happens regardless of what we choose for $f(x)$ and $g(x)$, we can continue omitting the intermediary $+c$ in integration by parts. Of course, don’t forget to add the general $+c$ at the end to account for the accumulated constant from all the integrating!

I have yet to find more integrals where we can leverage the $+c$ with this trick, though. Not many parts integrals feature derivatives and antidetivatives where all it takes is a constant to cancel them out. If you find any, let me know!
