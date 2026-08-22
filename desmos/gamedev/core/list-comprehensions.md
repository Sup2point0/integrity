---
domain: desmos-gamedev
topic:  Core
title:  List Comprehensions
next:   conditionals
update: 2026 March 29
---


## Description

List comprehensions automate the construction of lists, and also allow us to create loops in Desmos along the way.


## // Comprehending List Comprehensions

### _
List comprehensions are a way of constructing *new* lists from *existing* lists. They look like this:

```math
[
  \text{\textcolor{4d9dcd}{expression} for \textcolor{f07d1c}{variable}} = \text{list}
]
```

### _
<aside></aside>

If you’ve coded before, you may recognise this as a `for` loop. Which it essentially is!

List comprehensions also exist in some programming languages like Python and Haskell as a concrete feature.

### _
A list comprehension works by:

<ul>
  <li> Iterating over the terms of the existing list </li>
  <li> Computing an expression for each </li>
  <li> Building a new list with the results </li>
</ul>

### _
```desmos
L = [1, 2, 3, 4, 5]
```

Let’s look at a simple example. We have an existing list of integers, $L$.

### _
We’re going to construct a new list with the squares of these numbers using a list comprehension. First, we’ll need $[]$ around the whole list comprehension.

```math
\textcolor{4d9dcd}{[ \ ]}
```

### _
We iterate over the terms of $L$ using $\text{for}$, and we assign each term to an iterating variable – let’s call it $i$.

```math
[\ 
  \textcolor{4d9dcd}{ \text{for } i = L }
\]
```

This is a bit unintuitive, since it looks like we’re saying “assign $L$ to $i$”. But Desmos is assigning the individual *terms* of the source ($L$) to the iterating variable ($i$).

It’s a bit unlike how most programming languages do it with `for ... in ...` with “in”, but you’ll get used to it.

### _
<aside class="note"></aside>

Haskell does actually do it this way, just with a monadic `<-` arrow instead of an `=` ;)

`[x^2 | x <- [1, 2, 3, 4, 5]]`

### _
```desmos
L = [1, 2, 3, 4, 5]

[i^2 \operatorname{for} i = L]
```

Finally, we add the expression we want to compute for each term. Here, that means we’ll square the iterating variable:

```math
[\ 
  \textcolor{4d9dcd}{i^2}
  \text{ for } i = L
\]
```

### _
We’ve now made a list comprehension! It takes each term of $L$, assigns it to $i$, computes $i^2$, and adds it to the output list.


## // An Offset Range

### _
To familiarise more with list comprehensions, let’s now use them to construct a stepwise range with an offset.

```math
[\ 1, 4, 7, 10 \]
```

### _
Here, each term $t_n$ is given by

```math
t_n = kn + c
```

Since the step is $3$, this means $k = 3$. Taking $n = 0$ to be the first term, this means $c = 1$. So

```math
t_n = 3n + 1
```

This gives us the expression we’ll compute in our list comprehension, $3n + 1$.

### _
We want 4 terms, so we’ll iterate from $n = 0$ to $n = 3$.

```math
[\ 
  \text{ for } n = [0...3]
\]
```

### _
<aside class="note"></aside>
Do remember that Desmos is 1-indexed, but here it’s a bit nicer to use 0-indexing.

### _
<aside></aside>
You’ve got the expression and the list to iterate over. Now try constructing the list comprehension yourself!

### _
```desmos
[3n+1 \operatorname{for} n = [0...3]]
```

Putting these together:

```math
[
  3n + 1 \text{ for } n = [0...3]
]
```

Sweet!


## // Higher-Dimension Products

### _
“Higher-dimension” might sound scary, but it really just means more variables.

If you’re a programmer, you’ve got this. If you’re a mathematician, you’ve got this, easy dubs. If you’re both (me), remember that grass is nice. (sauce: trust me bro)

### _
I won’t even explain it to you. Just take a look at this, and I want you to guess what it does:

```math
(x, y) \ \text{for } x = [1,2,3], y = [4,6,8]
```

### _
```desmos
[(x, y) for x=[1, 2, 3], y=[4, 6, 8]]
```

This will produce all of the *possible pairings* of $(x, y)$, given those input values. $x$ can take on either 1, 2 or 3, and $y$ can take on either 4, 6 or 8.

Rendering the output more neatly (but remember this is still a list, not a matrix):

```math
\begin{bmatrix}
  (1, 4) & (1, 6) & (1, 8) \\
  (2, 4) & (2, 6) & (2, 8) \\
  (3, 4) & (3, 6) & (3, 8)
\end{bmatrix}
```

### _
That was a 2-dimensional list comprehension. It uses not 1, but *2* iterating variables, $x$ and $y$.

Keep in mind this still outputs 1 flat list, not lists in lists (Desmos doesn’t currently support nested lists).

### _
```desmos
[x+y for x=[1, 2, 3], y=[4, 6, 8]]
```

Remember we can still put anything we want in the computed expression, so for instance, we could find all the possible sums of an $x$ and $y$.

### _
```desmos
```

One common use for 2-dimensional list comprehensions is in a gridded game – for instance, we might want to initialise each cell in the grid differently depending on its co-ordinates.

### _
More mathematically, a higher-dimension list comprehension iterates over a ***cartesian product***.

### _
A “cartesian product” between $P$ and $Q$, denoted $P \times Q$, is all the possible pairings of one element from $P$ with another from $Q$.

For instance, $\mathbb{Z} \times \mathbb{Z}$ produces all the co-ordinates in a 2D plane (using the Cartesian co-ordinate system – unfortunate name clash here).

### _
<aside></aside>

In maths we don’t really care about the order of items, so $P$ and $Q$ are sets, not lists. If you’re interested more, this is [discrete maths<sup>↗</sup>](https://wikipedia.org/wiki/Discrete_mathematics).

### _
1-dimensional list comprehensions will usually be far more common than higher-dimension list comprehensions, but it’s a fantastic tool to have in your arsenal.


## // Filtering Lists

### _
What if we wanted to only include results that meet some certain criteria?

### _
In some cases we could leverage mathematical expressions for filtering, but more often than not, we just want to filter items from an existing list.

### _
Unfortunately, this is *not* as simple in Desmos as one might hope.

### _
```desmos
L = [1, 2, 3, 4, 5]

L[L > 2]
```

The syntax for doing this is a little strange: we ‘index’ into the list with a condition on the *whole* list:

```math
L[L > 2]
```

This returns a list of all the elements in $L$ (still in order) that fulfil the condition, i.e. are greater than $2$.

### _
It’s kinda unintuitive, at least for me. How does one compare an entire ‘list’ with $2$?

But the well-known Python data library `pandas` uses this syntax too, so I guess it does also exist in programming.

### _
```desmos
L = [1, 2, 3, 4, 5]

L[L > 2][\operatorname{mod}(L, 2) = 1]
```

Filtering a list with a conditional produces just another list, so we can of course further filter the output with another condition.

### _
One question you might immediately ask is whether we can extract the condition into a function for reuse:

```math
L[f_\text{predicate}(L)]
```

### _
```desmos
L = [1, 2, 3, 4, 5]

% No way of finding out what’s in this list...
L > 2

% Doesn’t show what it evaluates to?
5 > 2

% Try assigning to a variable?
s = 5 > 2

% Ok, wrap it in parentheses?
s = (5 > 2)
```

We’ll touch on this later in [conditionals](conditionals), but there’s (currently) no way for us to obtain a ‘raw’ boolean in Desmos (i.e. literal “true” or “false”).

So whatever’s going on when we do $L[L > 2]$ is very much a black box, unfortunately.

### _
```desmos
L = [1, 18, 25, 7, 9, 77, 64]
```

<aside></aside>
Alright, let’s wrap up with a challenge for you. Here’s a list of integers. Can you filter it to find the non-square numbers?

Hint: $\operatorname{round}()$ may be of help!

### _
<aside></aside>
Hint: What happens when you square root a non-square number?

### _
```desmos
L = [1, 18, 25, 7, 9, 77, 64]

/hide :: f_{resquare}(x) = \operatorname{round}(\sqrt{x})^2
L[f_{resquare}(L) = L]
```

We can check if a number is square by:

<ul>
  <li> Square rooting it </li>
  <li> Rounding the result </li>
  <li> Squaring the result </li>
  <li> Comparing the result to the original </li>
</ul>

If they’re still equal, the number must be square since rounding did nothing. Otherwise, we got a non-integer when square rooting, meaning the original number wasn’t square.


## // Computing Pythagorean Triples

### _
As a final exercise, I’ll show you how we could use list comprehensions to find Pythagorean triples.

### _
Recall the Pythagorean theorem that for a right-angled triangle in euclidean space, with legs $a$, $b$ and hypotenuse $c$,

```math
a^2 + b^2 = c^2
```

Pythagorean “triples” are *integer* $a, b, c$ combinations for which the above holds. $(3, 4, 5)$ is perhaps the most famous.

### _
```desmos
f_{pythagTriples}(n) =
```

We want to write a function $f_\text{pythagTriples}(n)$ which produces all triples with $a < b < c \leq n$

So for instance, $f_\text{pythagTriples}(10)$ would return $[(3, 4, 5), (6, 8, 10)]$, since these are the only Pythagorean triples with a hypotenuse of $10$ or less.

### _
<aside></aside>
If you’re up for the challenge, definitely give it a shot yourself!

### _
There are numerous ways to go about this, but we’ll start with the simplest approach – we can always optimise further later on.

We know the Pythagorean triples satisfy $a^2 + b^2 = c^2$, so we first generate a list of all possible triples, then filter it for only those where the predicate holds.

### _
So, where will we get $a, b, c$ from? We want to *combine* them to find all possible triples. Sound familiar?

### _
```desmos
f_{pythagTriples}(n) = 
f_{allTriples}(n) = [for a=[1...n], b=[1...n], c=[1...n]]
```

That’s right, we’re going to need a 3-dimensional list comprehension; a cartesian product between $A \times B \times C$ (where $X$ denotes the possible values of $x$).

### _
```desmos
f_{pythagTriples}(n) = 

% Can’t store (a, b, c), unfortunately...
f_{allTriples}(n) = [(a, b, c) for a=[1...n], b=[1...n], c=[1...n]]
```

Except – horror! We can’t have points with 3 co-ordinates in the Desmos 2D graphing calculator.

### _
```desmos
f_{pythagTriples}(n) = 

f_{allTriples}(n) = [(a, b) for a=[1...n], b=[1...n]]
```

Well, when you hit limitations, and you inevitably will, you’ve gotta find workarounds.

In this case, let’s only store $a$ and $b$ (since $c$ can be computed from them anyway).

### _
```desmos
f_{pythagTriples}(n) = 

f_{allTriples}(n) = [(a, b) for a=[1...n], b=[1...n]]
% Now... how to check if it’s square?
f_{filterTriples}(L) = L [L.x^2 + L.y^2 = ?]
```

We’ve got our list of pairs of $(a, b)$. Now we filter them.

For each pair of $(a, b)$, we’ll compute $a^2 + b^2$ and check if the result is square – if it is, then we have a $c$ for which $c^2 = a^2 + b^2$, so $(a, b, c)$ is a Pythagorean triple.

Since we’re re-accessing the list though, we no longer have access to the variables $a, b$, so we’ll need to use `.x` point access.

### _
<aside class="note"></aside>
Yes, $L.x$ does look *incredibly* cursed. Desmos and its vectorised operations...

### _
```desmos
f_{pythagTriples}(n) = 

f_{allTriples}(n) = [(a, b) for a=[1...n], b=[1...n]]
f_{filterTriples}(L) = L [f_{resquare}(L.x^2 + L.y^2) = L.x^2 + L.y^2]

/hide :: f_{resquare}(x) = \operatorname{round}(\sqrt{x})^2
```

Hmm, what’d’y’know, that earlier challenge comes in helpful here! Let’s bring in $f_\text{resquare}()$ and use it to filter the list.

### _
```desmos
f_{pythagTriples}(n) = 

f_{allTriples}(n) = [(a, b) for a=[1...n], b=[1...n]]
f_{filterTriples}(L) = L [f_{resquare}(L.x^2 + L.y^2) = L.x^2 + L.y^2]
f_{filterInRange}(L, n) = L [L.x^2 + L.y^2 \leq n^2]

/hide :: f_{resquare}(x) = \operatorname{round}(\sqrt{x})^2
```

Finally, remember we have the implicit restriction of $c \leq n$, or equivalently $c^2 \leq n^2$. So we’ll need one more filter $f_\text{filterInRange}()$ after checking the squares too.

### _
```desmos
% If Desmos complains it "doesn't understand the way = is used", just delete the = and re-type it yourself, not sure why this error's happening ¯\_(ツ)_/¯
f_{pythagTriples}(n) = f_{filterInRange}(f_{filterTriples}(f_{allTriples}(n)), n)

f_{allTriples}(n) = [(a, b) for a=[1...n], b=[1...n]]
f_{filterTriples}(L) = L [f_{resquare}(L.x^2 + L.y^2) = L.x^2 + L.y^2]
f_{filterInRange}(L, n) = L [L.x^2 + L.y^2 \leq n^2]

/hide :: f_{resquare}(x) = \operatorname{round}(\sqrt{x})^2

% Lookin’ good!
f_{pythagTriples}(10)
f_{pythagTriples}(69)
```

All that remains is to combine our 3 functions to complete the definition of $f_\text{pythagTriples}()$!

We first find all possible triples with $f_\text{allTriples}()$, then filter the valid triples with $f_\text{filterTriples}()$, and finally restrict their magnitudes to only those we want with $f_\text{filterInRange}()$.

### _
Whew! Lotta work, right? Maybe you’re getting a taste of how important abstraction and modularity is in Desmos to keep things manageable.

There’s one last thing which you might be wanting to do – put this all in one compact function, instead of splitting all the filters across different functions.

That’s is a little nontrivial, and this scripture is already really long, so we will leave it for [Inline Substitution](../advanced/inline-substitution) in the [Advanced](../polymap#advanced) chapter. See you then!
