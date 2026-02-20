---
domain: desmos-gamedev
topic:  Core
title:  Conditionals
update: 2026 February 20
---


## Description

Conditionals (or *piecewise expressions*) are Desmos’s “if-then-else”, and allow us to have branching logic depending on conditions.


## // Piecewise Expressions

### _
Really, the underpinning of programming is *logic*.

We use logic to determine *how* to execute our program – to make decisions and handle control flow that allows interesting and varied things to happen.

### _
For this, we need a way to branch execution in different directions based on conditions. In programming languages, we usually have `if` and `else`.

In Desmos, we have ***conditional expressions***, or more succinctly ***conditionals***.

### _
These are expressions that produce different outputs based on a provided condition. This is the format:

```math
\{ \text{condition} : \text{value}_\text{true} , \text{value}_\text{false} \}
```

### _
```desmos
\left\{ 6 < 9 :\ ,\  \right\}
```

For the condition, we need something that evaluates to “true” or “false” – a comparison, i.e. an equality or inequality check.

### _
<aside class="note"></aside>
I say “true” and not `true` or $\text{true}$ because we don’t (currently) have a way to directly access booleans in Desmos, so we don’t know how they’re represented.

Comparisons are the only thing I’m aware of returning a ‘boolean’ – see if you can find any others?

### _
```desmos
\left\{ 6 < 9 :\ 10,\ 100 \right\}
```

If the condition is “true”, then the first (left) expression after the $:$ is evaluated and returned. If the condition is “false”, then the other (right) expression is evaluated and returned.

### _
```desmos
```

<aside></aside>
Can you write a function using a conditional that returns $1$ if its input is even, and $-1$ if it’s odd?

### _
```desmos
/hidden :: f_{isEven}\left( n \right) = \left\{ \operatorname{mod}\left( n,\ 2 \right) = 0 :\ 1,\ -1 \right\}
```

We use the $\operatorname{mod}()$ function to modulo the input. Even numbers give $0$ when modulo-d with $2$, so we can use this check if $s$ is even.

### _
<aside class="note"></aside>
Of course, you could also achieve the same result by performing arithmetic on the result of $\operatorname{mod}(n, 2)$, but we want to practise using conditionals here!

Also, conditionals inherently capture the logic (or perhaps you could say “semantic intent”) behind them, by showing explicitly what the possible output values are and what situations they correspond to.

Small maintainability things like this become super helpful as a project scales!

### _
That’s all there is to know, really! The concept itself is dead simple; the trickier part might be properly applying it.


## // Recursion Branches

### _
To illustrate, let’s implement the [Collatz conjecture<sup>↗</sup>](https://wikipedia.org/wiki/Collatz_conjecture) function.

(I know this is Gamedev in Desmos, but you are on *Integrity*, after all ;)

### _
The function is defined differently for odd and even inputs. We can use a conditional to capture this branching behaviour!

In fact, we’ll be using the very function $f_\text{isEven}$ that we defined earlier.

### _
<aside></aside>
Try implementing it yourself!

In case you don’t know, the rules are: If $n$ is even, recurse with $n/2$; if $n$ is odd, recurse with $3n+1$. Once $n = 1$, you’re done. (We’ll return $1$ in this case.)

“Recurse” here means pass the output back into the function.

### _
```desmos
f_{collatz}\left( n \right) = \left\{ n=1 :\ 1,\ \right\}
```

With recursive functions, it’s good to start with the ***base case***, the smallest valid input.

In this case that’s $1$. We’ll use a conditional to check if the input is $1$, and if so return $1$. We’ve left the other branch blank for now.

### _
```desmos
f_{collatz}\left( n \right) = \left\{ n=1 :\ 1,\ \left\{ f_{isEven}\left( n \right) = 1:\ f_{collatz}\left( \frac{n}{2} \right),\ f_{collatz}\left( 3n+1 \right) \right\} \right\}

/hidden :: f_{isEven}\left( n \right) = \left\{ \operatorname{mod}\left( n,\ 2 \right) = 0 :\ 1,\ -1 \right\}
```

What do we put in the other branch? Well, there’s nothing stopping us from using another conditional, so we’ll do exactly that!

Using the $f_\text{isEven}$ function from before, we’ll check if $n$ is even, and apply the corresponding Collatz branch.

### _
```desmos
f_{collatz}\left( k \right)
k = 50

f_{collatz}\left( n \right) = \left\{ n=1 :\ 1,\ \left\{ f_{isEven}\left( n \right) = 1:\ f_{collatz}\left( \frac{n}{2} \right),\ f_{collatz}\left( 3n+1 \right) \right\} \right\}

/hidden :: f_{isEven}\left( n \right) = \left\{ \operatorname{mod}\left( n,\ 2 \right) = 0 :\ 1,\ -1 \right\}
```

<aside></aside>
Try evaluating the function for some different inputs – at what point does it break?

### _
```desmos
f_{collatz}\left( n \right) = \left\{ n=1 :\ 1,\ f_{isEven}\left( n \right) = 1:\ f_{collatz}\left( \frac{n}{2} \right),\ f_{collatz}\left( 3n+1 \right) \right\}

/hidden :: f_{isEven}\left( n \right) = \left\{ \operatorname{mod}\left( n,\ 2 \right) = 0 :\ 1,\ -1 \right\}
```

Desmos even has some syntactic sugar, allowing us to omit the curly braces around the nested conditional:

```math
\{ \text{condition}_1 : \text{value}_1 ,\ \text{condition}_2 : \text{value}_2 ,\ \text{value}_3 \}
```

### _
Fairly minor, but *incredibly* helpful at scale when you have many different branches.

### _
```desmos
f_{collatz}\left( 1 \right) = 1
f_{collatz}\left( n \right) = \left\{ f_{isEven}\left( n \right) = 1:\ f_{collatz}\left( \frac{n}{2} \right),\ f_{collatz}\left( 3n+1 \right) \right\}

/hidden :: f_{isEven}\left( n \right) = \left\{ \operatorname{mod}\left( n,\ 2 \right) = 0 :\ 1,\ -1 \right\}
```

While we’re here, since this is a single-parameter function we can actually extract the base case into a separate definition too.

More lines, but less dense! In the end, it’s all just tradeoffs.


<!-- TODO -->
<!-- ## // Boolean Algebra

### _
Conditions are awesome and all, but we’re still missing something – logical combinators. “and”, “or”, “not”, those things.

### _
```desmos
\left(1<2\right)+\left(6<9\right)
```

Now, remember how we said we can’t interact with raw booleans in Desmos?

For instance, we can’t add 2 conditionals.

### _
```desmos
\left\{p<q:\ 1,\ 0\right\}

p = 6
q = 9
```

What we can do is use conditionals to produce some sensible values to represent “true” and “false”.

You could choose any values you want, but $1$ for “true” and $0$ for “false” are generally the most useful.

### _
Now we have numbers, which we can work with! Let’s start by trying to implement logical AND.

$p$ AND $q$ should be “true” when both $p$ and $q$ are true. -->
