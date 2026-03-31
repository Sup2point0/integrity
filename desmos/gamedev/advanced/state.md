---
domain: desmos-gamedev
topic:  Extras
title:  How Does Desmos Model State?
update: 2026 March 31
---


## Description

(This scripture is currently unfinished!)

Hey adventurer! In this casual scripture, I’ll walk you through my ‘discovery’ of how state in Desmos works.

This scripture may have overlap with [Functional Programming in Desmos]() (currently unwritten).


## // Disclaimer

### _
<aside class="note"></aside>

Before we start, a disclaimer: this is based purely on observation, hypotheses and subsequent experimentation, natural sciences-style. I haven’t looked at the Desmos source code or anything to verify this is what it’s doing behind the scenes.

As a programmer, this is trusting the API docs and type signatures are accurate, and making claims about the implementation on that basis ...which is not guaranteed to be accurate. But as a mathematician, if $f(x) = g(x)$ for all $x$, that’s good enough for me to conclude $f = g$.


## // Ordering Action Execution

### _
State is the underpinning of imperative programming. It’s what allows us to *make stuff happen*.

In Desmos, we can mutate the global state via [actions](https://sup2point0.github.io/integrity/desmos/gamedev/core/actions).

### _
```desmos
t = 0

/text :: We get an error when trying to define this action.
a_{test}\left(\right) = f\left(\right),\ g\left(\right)
f\left(\right) = t \to 1
g\left(\right) = t \to 2
```

But actions have a critical limitation – one chain of actions cannot contain multiple assignments to the same variable.

### _
To an imperative programmer, this makes no sense. Are we saying variables are only mutable once per function?

When I first came across this, I was mildly bemused, but sorta just accepted it.

### _
But thinking about it more, I wondered why this had to be the case. What technical limitation(s) could there be stopping us from reassigning to a variable?

### _
If composed actions are executed simultaneously, maybe there’d be issues with race conditions which the Desmos developers wanted to avoid.

```math
\frac
  {t \to 1 \ \text{ and } \ t \to 2}
  {t = \ ?}

\\ \ \\ \text{clash! (not of the royale variety)}
```

But if you just make them execute in sequence (which is definitely simpler to implement as well), then there should be no issues.

```math
\frac
  {t \to 1 \ \text{ then } \ t \to 2}
  {t = 2}

\\ \ \\ \text{(just overwrites previous value)}
```

But wait – *are* actions executed in sequence?

### _
```desmos
p = 10
q = 0

a_{test}\left(\right) = f\left(\right),\ g\left(\right)
f\left(\right) = p \to p + 1
g\left(\right) = q \to p
```

Let’s experiment! We’ll setup 2 variables, $p$ and $q$.

We’ll make an action that does 2 things: it increments the value of $p$, and updates $q$ to be the same value as $p$.

### _
If these 2 sub-actions execute in sequence ($f$ then $g$), then we’d expect:

- $p$ changes a new value (call it $p'$).
- $q$ changes to that new value $p'$.
- Aterwards, $p$ and $q$ have the same value.

With $p = 10$ and $q = 0$, we should have $p = q = 11$ afterwards.

### _
```desmos
p = 10
q = 0

/text :: What happens when we run this?
a_{test}\left(\right) = f\left(\right),\ g\left(\right)
f\left(\right) = p \to p + 1
g\left(\right) = q \to p

/text :: Use this to see what happens again
a_{reset}\left(\right) = p \to 10,\ q \to 0
```

<aside class="challenge"></aside>

If you haven’t already, go ahead and click to execute the action. What happens?

### _
Hm, strange. $q$ becomes $10$, not $11$ as expected. It’s been set to the *old* value of $p$, not $p'$.

Does that mean the sub-actions are executing in *reverse* order?

### _
```desmos
p = 10
q = 0

a_{test}\left(\right) = g\left(\right),\ f\left(\right)
f\left(\right) = p \to p + 1
g\left(\right) = q \to p

a_{reset}\left(\right) = p \to 10,\ q \to 0
```

<aside class="challenge"></aside>

Let’s test it. Does it work if we swap around the order of $f$ and $g$?

### _
Nope, same result. Always challenge your assumptions, folks.

### _
So it looks like actions don’t run sequentially! Or more accurately, we can’t determine any order in which they run.

### _
```desmos
p = 1
q = 10
r = 100

a_{test}\left(\right) = f_{p}\left(\right),\ f_{q}\left(\right),\ f_{r}\left(\right)
f_{p}\left(\right) = p \to q + r
f_{q}\left(\right) = q \to r + p
f_{r}\left(\right) = r \to p + q
```

Let’s set up a chain of cyclic assignments to confirm what’s happening. Here, we’ve defined 3 variables $p, q, r$ and we’ll make assignments to each using the other variables.

### _
```desmos
p = 1
q = 10
r = 100

a_{test}\left(\right) = f_{p}\left(\right),\ f_{q}\left(\right),\ f_{r}\left(\right)
f_{p}\left(\right) = p \to q + r
f_{q}\left(\right) = q \to r + p
f_{r}\left(\right) = r \to p + q

a_{reset}\left(\right) = p \to 1,\ q \to 10,\ r \to 100
```

<aside class="challenge"></aside>

What do you think is going on?

### _
This is what we got:

```math
\begin{align*}
  p &= 110 &&= 10 + 100
  \\ q &= 101 &&= 100 + 1
  \\ r &= 11 &&= 1 + 10
\end{align*}
```

All the assignments used the initial values of $p, q, r$, not any of the updated values.

### _
The actions all seem to be executing *simultaneously*, and yet in a deterministic fashion.

They all see the old values of the variables, and the variables are only updated to their new values after the actions execute.

### _
This is pretty crazy! This sort of behaviour doesn’t trivially arise, which means the Desmos developers must have purposefully chosen it.

Why did they choose to implement it this way? It feels like unnecessary effort for a more restricted system. Perhaps they had goals beyond our (my) understanding.

### _
<aside class="note"></aside>

Editor’s note: This reads like Nomai writing in Outer Wilds lmfao


## // The Pure Program

### _
You could visualise this behaviour in many different ways.

### _
The simplest way, I think, is to imagine each action not directly altering the global variables, but instead producing a ‘report’ of what changes it made.

### _
For instance, suppose we have $p = 10, q = 0$ and an action $a_\text{test}() = p \to p+1, q \to p$.

Then after the calculator runs $a_\text{test}()$, it would receive a report saying:

- I changed $p$ to $1$.
- I changed $q$ to $10$.

Only after receiving this full report, does the calculator actually go and carry out the changes.

### _
The flow looks like:

```math
\text{run action} \to \text{receive report} \to \text{update variables}
```

So you can see the actual updating of variables is *delayed*, and only happens after all the actions have been computed.

### _
Another more programmatic way to look at it (which I quite like) is to treat the entire action chain as a *pure* function.

It receives the current global state as an argument, and returns what the new global state should be after it executes.

```math
a_\text{action}(\text{current state}) = \{ \text{do stuff; return new state} \}
```

### _
So then, a program running on a loop would look like (intentionally verbose for explicitness):

```math
\begin{align*}
  & \text{loop } \{
    \\ & \quad \text{old state} \leftarrow \text{current state}
    \\ & \quad \text{new state} \leftarrow \text{run}(\text{old state})
    \\ & \quad \text{current state} \leftarrow \text{new state}
  \\ & \}
\end{align*}
```

Everything inside $\text{run}()$ only sees $\text{old state}$.

<!-- // ### _
// In functional programming there is an emphasis on *pure* functions, which:
// 
// - Are deterministic
// - Have no side effects
// 
// ### _
// A deterministic function *always* outputs the same value(s) for the same input parameters(s).
// 
// This means it is dependent only on its parameters – no global variables or other external state.
// 
// ```math
// f(5) = 10
// f(5) = 10
// …
// f(5) = 10 \quad \text{still } 10 \text{ and always will be}
// ```
// 
// ### _
// Side effects are permanent changes that ‘executing’ an impure function can produce. For instance, `print()` in Python would output text to the terminal; `i++` in JavaScript would mutate a variable.
// 
// ```py
// var i = 0
// i++;  # something has changed!
// ```
// 
// ### _
// In maths, all functions are pure. They are defined as expressions of their parameters, and so are computed deterministically from those parameters.
// 
// ```math
// <quantum wave>
// ```
// 
// And I’m pretty sure side effects don’t exist in mathematics.
// 
// <aside>
// I haven’t been able to find an irrefutable source for this claim, but I have yet to see an impure mathematical function. You... could of course define a stupid function like “f(x) is the total number of people currently reading this definition”, but that’s just a bit stupid.
// </aside>
// 
// ### _
// Now, Desmos treads the line between mathematics and programming, but for the most part it’s pure.
// 
// ### _
// Now, we know that in Desmos actions we can mutate variables – i.e. global state – thus producing side effects, which makes them impure.
// 
// ### _
// But can you think of a way to transform an impure function with side effects, into a pure function with no side effects?
// 
// (For simplicity, let’s consider the only side effects in Desmos to be mutating variables.)
// 
// ### _
// Hint: How would you represent side effects as a *value*?
// 
// ### _
// Instead of actually performing the side effects, we could return some value that *encapsulates* 
// 
// ### _
// In Haskell, this is known as the `State` monad, and it encapsulates the idea of 
// 
// ### _
// Instead of an impure function applying side effects directly, we can have a pure function that *takes in* a ‘world’ as input and returns a ‘new’ world with all the side effects applied.
// 
// It’s saying “give me an argument telling me what state the world is in, and I will return a value telling you what state the world is in with my side effects applied”.
// 
// ### _
// How do the side effects actually happen, then? Well, we need a function
//  -->
