---
domain: desmos-gamedev
topic:  Supplementary
title:  Vectorisation
update: 2026 February 23
---


## Description

In this scripture, we look at one of Desmos’s most powerful hidden features – *vectorised* operations that operate on entire lists at once.


## // Embarrassingly Parallel

### _
| table | table |
| :---- | :---- |
| entry | entry |

inline $x$ math $\sin(x)$.

block math:

```math
f(x) = x^2 - 2x + 1
```

woah!

```
block
```

### _
Lists in Desmos are rather special. They’re given special treatment by the Desmos ecosystem

### _
```desmos
10\cdot\left[1,\ 2,\ 3\right]=?
```

Take this example. What would you expect the result of the operation to be?

### _
```desmos
10\cdot\left[1,\ 2,\ 3\right]
```

Well, there’s more than 1 way you could define it to work. But a pretty natural choice is to treat the list like a vector, and scale each component of the vector by the scalar:

```math
10 \cdot \begin{bmatrix}
  1 \\ 2 \\ 3
\end{bmatrix}
  =
\begin{bmatrix}
  10 \\ 20 \\ 30
\end{bmatrix}
```

### _
In Python, it would instead duplicate the list and give us `[1, 2, 3, 1, 2, 3]`. Makes sense too, right?
<aside class="note"></aside>

### _
```desmos
10+\left[1,\ 2,\ 3\right]=?
```

Ok, so what would you expect this operation to return?

### _
```desmos
10+\left[1,\ 2,\ 3\right]
```

If you thought it would add $10$ to each element in the list, you’d be correct.

But hold up just a second here! Think about what just happened. We added a *number* to a *list*. How can we even add those things?

### _
In ‘maths’, we certainly can’t add a scalar and vector.

But Desmos is a bit more practical, data-science, graphing-calculator-oriented, iykwim. It lets us do this because it’s a very *useful* ability, even if rather strange at times.

### _
```desmos
\sin\left(\left[0,\ \frac{\pi}{6},\ \frac{\pi}{2},\ \pi\right]\right)
```

Have a look at this. We’re taking the $\sin()$ of a list... very strange, but you can see how it works, right? It’s just applying $\sin(x)$ to every element $x$ of the list.

### _
We call this *vectorisation*. A bit of a strange name, perhaps, but it’s where one operation which would usually be applied to a single input (e.g. $+10$, or $\sin()$) is applied over an entire list of inputs simulateously.

### _
As we’ll see, many many things in Desmos support vectorisation.

Why do we bring up such a technical thing as a supplemental ‘prerequisite’? Well, there’s a good chance you’ll get bitten by it at some point, and that point may be very early on in trying to program in Desmos. Being aware of it now will help pre-emptively explain a lot of confusing behaviour!


## // Dangerous Conditionals

### _
When covering conditionals, I was considering using some list conditions as examples. But I quickly found that lists interact very strangely with conditionals due to vectorisation.

### _
```desmos
f\left(l\right)=\left\{empty\left(l\right):\ 0,\ 1\right\}
```

Let’s take this function, which should return $1$ for a nonempty list, and $0$ for an empty list.

### _
```desmos
f\left(l\right)=\left\{l=\left[\right]:\ 0,\ 1\right\}
```

There’s no $\operatorname{empty}()$ function, so we’ll replace it with a suitable conditional. Let’s compare the input $l$ to the empty list.

### _
<aside class="note"></aside>
Of course, there are better ways to implement this, but thinking of a suitable example was extremely nontrivial, so cut me some slack.

### _
Have a look at the output, though. Does it say $\text{empty list}$ for you? Isn’t that strange, you would think we’re expecting a $0$ or $1$.

### _
Considering what scripture this is you probably already guessed. This, indeed, is down to vectorisation.

Vectorisation on conditionals! How peculiar is that? How does that even work?

### _
<aside></aside>
Well, best way to find out is to play around, test things and break stuff. Give it a shot.

### _
```desmos
\left\{\left[1,\ 2,\ 3\right]=\left[1,\ 2,\ 3\right]:\ 0,\ 1\right\}=?
```

A great way to test is to replace the empty list with a nonempty one. Let’s try this expression.

Without vectorisation, we’d expect it to return $0$ since the lists are equal.

### _
```desmos

\left\{\left[1,\ 2,\ 3\right]=\left[1,\ 2,\ 3\right]:\ 0,\ 1\right\}
```

Instead, what do we get? A list with three $0$ values!

Can you see what’s going on here? The $=$ is being vectorised on the two lists and merged with the conditional, such that it compares each pair of values in the list and evaluates the conditional:

```math
\begin{align*}
  \left[
    \{ [1, 2, 3] = [1, 2, 3]: 0, 1 \}
  \right]
    &\to
  \begin{bmatrix}
    \{ 1 = 1: 0, 1 \} \\
    \{ 2 = 2: 0, 1 \} \\
    \{ 3 = 3: 0, 1 \}
  \end{bmatrix}
    \\ &\to [0, 0, 0]
\end{align*}
```

### _
```desmos
\left[1,\ 2,\ 3\right]=\left[1,\ 2,\ 3\right]
1=1
```

Looks like we’ve got to be really careful using lists in conditionals, because it can all too easily result in vectorisation.

The root cause here was really the vectorisation of the $=$ comparison. If we try the raw comparison expression, see how it returns a list of 3 elements, which is different to the simple one-value comparison?

### _
<aside class="note"></aside>
This actually has deeper relation to do with how stuff like $A[A > k]$ is implemented! We dive deeper into this in [Indexing Lists with Lists](../advanced/indexing-lists-with-lists).


## // Multi-Dimensional Vectorisation

### _
Ideally we want to have an understanding of *when* vectorisation occurs, so that we can make full use of it, and avoid being tripped up by it.

### _
Vectorisation in Desmos is implicit

### _
If Desmos had a full type system, this wouldn’t really work! For instance, 

### _
The simplest case is (fairly) straightforward: if you have a function that takes a single argument ($s$), you can instead feed it a list of scalars ($[p, q, r]$).

```math
\begin{align*}
  f(s) &\to f(s)
  \\ f\left( \begin{bmatrix} p \\ q \\ r \end{bmatrix} \right)
    &\to \begin{bmatrix} f(p) \\ f(q) \\ f(r) \end{bmatrix}
\end{align*}
```

### _
But these are only the simplest functions. What happens with a function taking more than 1 argument?

### _
```desmos
f_{add}\left(x,\ y\right)=x+y
```

The $10 + [1, 2, 3]$ we encountered earlier was, in fact, such an example.

You might not think of $+$ as a function, since we usually write it as an ***infix*** operator: going between its operands as $x + y$ instead of $+(x, y)$.

But can you see how it’s no different from a function taking 2 arguments? “$+$” is just a name, we could just as well call it $\operatorname{add}()$ (though we'll have to settle for $f_\text{add}()$ here since we're in Desmos).

### _
So, how does this vectorise? Well, there are 4 cases to consider
