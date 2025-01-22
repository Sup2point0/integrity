# How Do We Integrate?
<!-- #SQUARK live! feat! dev!
| dest = guides/integrals/how
| capt = The Art & Strategy of Integration
| index = guides / integrals
| date = 2025 January 21
-->

Integration is an art. It’s not dissimilar to topics such as programming, organic chemistry, or music theory. For those who haven’t yet started learning it, integration can appear complicated, daunting and perhaps impressive, even. You look at integrals and think “How in the world will I ever be able to integrate that.”

But just like the syntax and logic of code, the bonds and structures of organic chemistry, and the keys and chords of music theory, integration is built from a series of fundamental concepts. Understand these, absorb them, make them *part* of you, and they can take you very, very far indeed. Through combining these primitives in different ways – applying them in novel scenarios to develop new tools and methods – we learn to solve increasingly complex[^complex] problems.

[^complex]: Not literally.

As you learn to integrate, you start to abstract. You filter past the numbers, and the superficial symbols, and eventually the mathematical notation itself, to see the real core of an integrand. The functions it’s composed of, and the ways they’ve been arranged. It all becomes a pool of mathematical purity. You grow to spot the essence of a problem, its hidden shape that whispers to you what solution path might work. It’s like going from staring at a night sky to suddenly noticing the clouds and constellations taking shape before you.

But integration is rarely cut-and-dry. What works for one integral may completely fall apart for another.[^fall-apart] There is no fixed algorithm to memorise and execute; we must leverage our knowledge, experience and intuition. For me, this is part of the beauty of integration, and it’s what makes the chase so satisfying. You could call it trial-and-error, but I like to think of it more like *mathematical warfare*.

[^fall-apart]: Trust me, I’ve felt this one many times.

So, here we’ll lay out a framework for how one might approach an integral, especially the especially difficult ones. This is a collection of strategies and manoeuvres, and an analysis of their strengths and contexts; not a formula for evaluating any integral. It’s an ancient manuscript on strategical warfare more than a mechanic’s handbook for fixing the boiler leakage.[^mechanic]

[^mechanic]: Sorry, this was a bit random. Also, nothing against mechanics, their handiwork is epic.


## The Game Plan

When faced with an integral to evaluate, we have, really, 1 goal: reduce it to a form that we *can* integrate.

What does ‘can’ mean here? Well, consider the integral

```math
\int 2x \ dx
```

Even if you haven’t integrated yet, as long as you’ve differentiated before you should recognise $2x$ is the derivative of $x^2$ – and so this integrates to $x^2 + c$.

This kind of integral is instantly solvable. Since we’re essentially using an established formula, or ‘quoting’ a standard antiderivative, we could call this “quotable”.

So, because we can integrate $2x$, we can now integrate any integral of the form

```math
\int kx \ dx
```

– and that includes for fractional values of $k$. All we need is to get the integral into the form

```math
\frac{k}{2} \int 2x \ dx
```

and then we know $2x$ integrates to $x^2$.

This may seem obvious, but it illustrates exactly what we’re doing with more advanced integrals! Manipulate, rewrite and simplify it into a form where we can apply a rule to quote the antiderivative.

Let’s upgrade then. Consider

```math
\int \cot{x} \ dx
```

Some trigonometric antiderivatives are quotable as inverses of derivatives (what a mouthful – I mean like $\frac{d}{dx} \tan{x} = \sec^2{x}$), but this is not one of them. So, we’ll try change it into a form where we can do something. Let’s write $\cot{x}$ in terms of $\sin$ and $\cos$ primitives:

```math
= \int \frac{\cos{x}}{\sin{x}} \ dx
```

Aha! Now we can substitute $\sin{x} = t$, $\cos{x}\ dx = dt$, and the integral becomes

```math
= \int \frac{1}{t} \ dt
```

> [!Note]
> I’m glossing over the method, because the goal here is to illustrate how the integral changes.

And the integral of $1/t$ is quotable as $\ln|t|$, so our solution is $\ln| \sin{x} | + c$.

It doesn’t matter if you don’t understand (yet) how we could change the integral like that, but this is the heart of integration. Simplifying, layer after layer, until we get it into a form that we can integrate with ease.

To this end, we have a massive arsenal of methods, tricks and formulae that we can harness to transform and reshape an integral. When you just start out, apply them in full, carrying out every step in glorious detail. Quickly you’ll familiarise with the different methods you can use and be able to skip parts of the solution.

Now that point, where we can jump straight to the solution – or just affirm that we’ve ‘solved’ the integral (since we’re sure we know how to solve ‘the rest’) – will come sooner and sooner. It won’t take long before you find integrals like $\tan{x}$ doable in your head. $xe^x$? Happy days, quotable parts. Even stuff like $\frac{1}{x^2 + 5x + 6}$ you’ll start thinking “ugh, more partials, we know how to do this.”


## Battle-Prepped

Integration can be scary, but its rules are fairly intuitive. There are 2 main ones you absolutely should know. First:

```math
\int f(x) + g(x) \ dx = \int f(x) \ dx + \int g(x) \ dx
```

In other words, integration is *distributive* over addition. This means we can break up integrals of addition into addition of integrals.

A key thing to remember here is that this works with fractions too!

```math
\begin{align*}
  &\ \int \frac{f(x)+g(x)}{h(x)} \ dx
  \\ =&\ \int \frac{f(x}{h(x)} + \frac{g(x)}{h(x)} \ dx
  \\ =&\ \int \frac{f(x}{h(x)} \ dx + \int \frac{g(x)}{h(x)} \ dx
\end{align*}
```

And secondly:

```math
\int kf(x) \ dx = k \int f(x) dx
```

This means that multiplicative constants *of the whole integral* make no difference, so you can factorise them out.

Bear in mind that $k$ **must** be a constant term – i.e. no $x$-s (or whatever your integrating variable is). [This is a common beginner pitfall](epic-errors.md).


## Sweep the Battlefield

If you’re looking for how to integrate, you can skip this section. If you’d like to learn how to improve at integration, don’t skip this section.

The foundation of all maths is algebra, and integration is no different. In fact, algebraic fluency and flexibility is absolutely vital to tackling integrals that aren’t in any sort of obvious form.

Not all integrals come nicely well-dressed and clean-shaven. Often they’ll have stray constants, annoying coefficients and weird notation designed to throw you off.[^weird-notation]

[^weird-notation]: Disclaimer: I’m guilty of doing this too.


## Scouting for Substitutes


## Trigonometric Substitutions


## Multiplying Catalyst
