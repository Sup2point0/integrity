# Conjecture: You Know Haskell
<!-- #SQUARK live! opin! dev!
| dest = scriptures/special/haskell-conjecture
| capt = I’ll show you how you already know much of the Haskell functional programming language!
| index = scriptures / special
-->

[Haskell<sup>↗</sup>](https://www.haskell.org) is perhaps one of the most well-known programming languages focusing on the *functional programming* paradigm.

You don’t need to know that. All you need to know is that it’s a programming language (i.e. you can write code in it). My aim here is to show you that, if you’re already familiar with maths, and maybe Desmos, you can pick up Haskell in *minutes*.

> Haskell is not an *easy* language to learn, but it’s not *tough* either. A lot of things are scary because they are unfamiliar. I want to show you that Haskell is more familiar than you might think, and it’s no scarier than it needs to be.


<br>


## Before We Start

> Conjecture: You can understand Haskell code without knowing Haskell.

Take a look at the following. Can you guess what it does?

```hs
isEven :: Int -> Bool
isEven x
  | x `mod` 2 == 0 = True
  | otherwise      = False
```

See this footnote[^answer] for the answer.

[^answer]: With sufficient context, many things can be made obvious. This function `isEven` outputs `True` if its input is even, and `False` if its input is odd.


<br>


## A Functional World

Take a function that doubles its input:

```math
f(x) = 2x
```

In Haskell, that function looks like this:

```hs
f x = 2 * x
```

Basically identical, right?

Let’s specify the domain and codomain of the function. It takes an integer as input, and produces another integer as output:

```math
f : \mathbb{Z} \to \mathbb{Z}
```

In Haskell:

```hs
f :: Int -> Int
```

Basically identical, right?

Sometimes we might need conditional branches for one function:

```math
\operatorname{ReLU}(x) =
  \begin{cases}
       x & x > 0
    \\ 0 & \text{otherwise}
  \end{cases}
```

In Haskell:

```hs
relu x | x > 0     = x
       | otherwise = 0
```

*Basically* identical, right?

Here’s what a quick-and-dirty function for computing Fibonacci numbers could look like:

```hs
fib :: Int -> Int
fib n
  | n == 0    = 0
  | otherwise = fib (n-1) + fib (n-2)
```

Or even more literally (this uses a technique called “pattern matching”):

```hs
fib :: Int -> Int
fib 0 = 0
fib n = fib (n-1) + fib (n-2)
```

And guess what, the definition in Desmos is basically identical!

```desmos
f\left( 0 \right) = 0
f\left( n \right) = f \left( n-1 \right) + f \left( n-2 \right)
```

I think what you’ll find is that Haskell is essentially maths, but as a programming language. If you enjoy maths, there’s a good chance you’ll enjoy Haskell, and vice versa.


<br>


## Recursion is Induction

Even if you’ve never touched programming before, you can probably guess what a “list” is. It’s just some collection of things.

Could be your to-do list, where (thing = task); could be your shopping list, where (thing = product); could be a sequence, where (thing = number).

Let’s take the last one. Here’s a sequence of numbers:

```math
1,\ 2,\ 3,\ 4,\ 5,\ 6,\ 7
```

In Haskell we can write that as a list:

```hs
[1, 2, 3, 4, 5, 6, 7]
```

How could we write a function that finds the sum of this list – or rather, any list of numbers?

```hs
-- Give me a list of integers, and I will return their sum.
sum :: [Int] -> Int
```

We use induction!

### Proof by Induction
Let $n$ denote the length of list, i.e. how many numbers it has. A list can’t have a negative number of items,[^negative-items] so $n \in \mathbb{N}$.

[^negative-items]: yes yes, there’s probably some algebra where that’s allowed. Stop trolling

**Base case**. $n = 0$; The list is empty. What’s the sum? Well, there’s no numbers to add up, so we’ll say it’s $0$.[^zero]

[^zero]: I mean sure, you could say you can’t find the sum of an empty list, but that’s just overly complicating things.

```hs
-- The sum of an empty list is 0.
sum [] = 0
```

Now assume true for $n = k$. That is, for any list of length $k$, we can compute its sum using `sum`.

```hs
-- Given some list of k items...
xs = [1, 2, 3, ..., k-1, k]

-- we know we can do this:
sum xs
```

> [!Note]
> You should read `xs` as `/ɛkˈsɪs/` (*EX-cis*), as in the plural of “x”. Just a Haskell idiosyncrasy ;)

**Inductive step**. Then consider $n = k+1$. That is, we have 1 more element in the list, added to the start.[^start] Let’s call it `x`.

[^start]: This is just how Haskell happens to represent lists, it won’t affect the proof.

```hs
-- Now we have a list of k+1 items...
items = [x, 1, 2, 3, ..., k-1, k]
```

In Haskell, we represent this as `x : xs`. This says “prepend the element `x` to the list `xs`”.

```hs
x:xs ==  x:[1, 2, 3, ..., k-1, k]
     == [x, 1, 2, 3, ..., k-1, k]
```

What should the sum of this list be?

```hs
sum (x:xs) = ?
```

Well, suppose, imagine, pretend for a sec that we already knew the sum of `xs`. Then the sum of this new list would just be the sum of `xs`, *plus `x`*.

Wouldn’t it be nice if we had a function that could compute the sum of `xs`?

Oh hang on a sec, *that’s the function we’re defining*. Soo... let’s just use `sum`!

> [!Tip]
> This is known as **recursion** (a function calling itself), and luckily for us, Haskell does allow it – in fact, it’s a super common technique in functional programming.

But wait, how do we know `sum` will work? After all, we’re currently defining that very function.

Well, remember this is induction, and we assumed for $n = k$ that `sum` works. This means we can apply `sum` to `xs`, then add on `x`:

```hs
sum (x:xs) = x + sum xs
```

So if we have a definition for `sum xs`, then we can construct a definition for `sum (x:xs)`.

That’s it. We’ve shown:

- The proposition holds true for the base case $n = 0$.
- If it holds true for $n = k$, it also holds true for $n = k+1$,

Hence by mathematical induction, the proposition is true for all $n \in \mathbb{N}$.

Or, more programmatically, we’ve shown:

- `sum` can compute the sum of an empty list
- If `sum` can sum a list of length $k$, it can sum a list of length $k+1$.

Hence, `sum` can sum a list of any length.

Our final definition looks like:

```hs
sum :: [Int] -> Int

sum []     = 0
sum (x:xs) = x + sum xs
```

Pretty neat, huh?


<br>


## Equational Proofs in Haskell

> [!Warning]
> This section gets pretty heavy! Please do read on if you want to, but if things get confusing, remember to take it one step at a time.

Here’s something that might blow your mind. Haskell is so *principled* that you can *prove* identifies in code.

Yes, you can prove things to be true in code, just as you can in maths.

### Map Composition
Here’s an example. `map` is a fundamental function in Haskell. It applies a given function to a list of items.

You don’t need to know how it’s implemented (yet). All you need to understand is what it does – it performs some action on every item of a list.

```hs
-- I won't even add comments, cuz I think you can see exactly what's going on.

map square [1, 2, 3, 4] == [1, 4, 9, 16]

map isEven [1, 2, 3, 4] == [False, True, False, True]

map id     [1, 2, 3, 4] == [1, 2, 3, 4]
```

We’re going to prove this identity:

```hs
map f (map g items) = map (f . g) items
```

Woah, what’s that `.` doing?

This is called function composition. All it does is produce a new function which does `g` followed by `f`. You might have this seen this before already in maths:

```math
f \circ g \ (x) = f(g(x))
```

So, the identity we want to prove is saying:

> Do `g` to everything in `items`, then do `f` to everything in `items`.[^do-items]

[^do-items]: Technically speaking, this isn’t accurate – `f` operates on the output of `g`, not the original `items`. But like, that’s just complicated to word, and you hopefully realised it already.

is the *same* as:

> Do `g` followed by `f` to everything in `items`.

That already make sense intuitively. A teacher could walk round the room giving every student an exam paper, then walk around the room again giving every student a formula booklet.

But they could also have walked round the room only once, giving each student both an exam paper and formula booklet at the same time. The end result is exactly the same.

### Proof by Induction
Alright, let’s see how to prove it then. Our good friend induction returns!

> [!Tip]
> This bit looks quite dense because I’ve explained everything quite finely. I wager you could understand this just by reading each line of the equational reasoning. If you’re up for the challenge, try jumping to [§ TLDR](#tldr) and then coming back!

**Proposition**. For a any list `items`, the following is true:

```hs
map f (map g items) == map (f . g) items
```

Now we’ll need the definition of `map`. For our intents and purposes, here’s what it looks like:[^map-definition]

[^map-definition]: Could use `map f` here, but that got confusing with the actual `f` and `g`.

```hs
map func []     = []
map func (x:xs) = func x : map func xs
```

> [!Note]
> Much like in maths, you don’t necessarily need to understand what it’s saying at all to use it – but understanding it may help you notice how you can use it. I won’t explain it here, but try convincing yourself why it works! (Hint: It’s extremely similar to `sum` ;)

So let `items` be a list of length $n$, with $n \in \mathbb{N}$ again.

**Base case**. $n = 0$, i.e. the list is empty.

We’ll take each side of the equation in the proposition, and show that they evaluate to the same result (since $a = b = c$ implies $a = c$[^transitive]).

[^transitive]: transitivity, baby! (discrete maths for you ;)

The left side is `map f (map g items)`. Substituting `items = []`, we get:

```hs
    map f (map g items)
 == map f (map g [])
```

Remember the first line of the definition of `map`. We know `map func [] = []`, i.e. `map` of any `func` to an empty list ...just returns an empty list.

So, substituting `func = g`, we can use that to get:

```hs
    map f (map g [])
 == map f ([])
 == map f []
```

And substituting `func = f`, we can apply it again!

```hs
    map f []
 == []
```

We got the empty list `[]`. Which makes sense – we started with `[]`, so we had nothing to apply `f` or `g` to, so we got out `[]`.

Right hand side next. We have:

```hs
    map (f . g) items
 == map (f . g) []
```

To make things a bit more obvious, let’s give this new `f . g` function a different name `h`:

```hs
    map (f . g) []
 == map h       []
```

What’d’y’know, same thing again! This time `func = h`:

```hs
    map h []
 == []
```

Empty list again! So we’ve shown:

```hs
map f (map g []) == []
map (f . g) []   == []

-- Hence:
map f (map g []) == map (f . g) []
```

Whew, that was long!

**Inductive step**. Assume the proposition is true for $n = k$, i.e. for some list `xs` of length $k$.

```hs
-- Given a list `xs` with `k` items...
map f (map g xs) == map (f . g) xs
```

Now consider $n = k+1$. Like earlier, we’ll say we have a new element prepended to `xs`, giving a new list `x:xs`. Hence we wish to show:

```hs
map f (map g (x:xs)) == map (f . g) (x:xs)
```

This time we’ll start with the left side and manipulate it until we reach the same expression as the right side.

Let’s focus on the inner expression of the left side first:

```hs
map f (map g (x:xs))
--     ^^^^^^^^^^^^ focus on this!
```

We’ll expand `map g (x:xs)`. We now need to pull out the second line of the definition of `map`:

```hs
map func (x:xs) = func x : map func xs
```

We can just substitute `func = g` to get:

```hs
    map func (x:xs) = func x : map func xs
 => map g    (x:xs) = g    x : map g    xs

-- Hence:
    map g (x:xs)
 == g x : map g xs
```

We can substitute this back into our original left side:

```hs
    map f (map g (x:xs))
 == map f (g x : map g xs)
```

Things are getting messy! It’s easy to get lost here. What’s important is to keep in mind the structure.

Look carefully at the argument to `map f` – it’s still a list `p:q`, it’s just that `p` and `q` are some more complex expressions. Let’s temporarily rewrite it for brevity:

```hs
    map f (g x : map g xs)
 == map f (p   : q       )
 == map f (p:q)
```

Use the definition again, this time with `func = f`:

```hs
    map func (x:xs) = func x : map func xs
 => map f    (p:q ) = f    p : map f    q 

-- Hence:
    map f (p:q)
 == f p : map f q
```

Putting `p` and `q` back:

```hs
    f p     : map f q
 == f (g x) : map f (map g xs)
```

We’ll keep on making manipulations.

Focus on `f (g x)`. This code means $f(g(x))$ – which we know is $f \circ g \ (x)$, which back in code is `(f . g) x`:

```hs
    f (g x)   : map f (map g xs)
 == (f . g) x : map f (map g xs)
```

Hey, remember how we made that inductive assumption way back?

```hs
map f (map g xs) == map (f . g) xs
```

We can finally use that now for the right side!

```hs
    (f . g) x : map f (map g xs)
 == (f . g) x : map (f . g) xs
```

The last step is the neatest part. Does this structure look familiar to you at all?

What if we renamed `f . g` to `h`?

```hs
    h x : map h xs
 == ?
```

This is the definition of `map`! We can apply line 2 of the definition in *reverse* to collapse it back into a single `map`:

```hs
    map func (x:xs) = func x : map func xs
 => map h    (x:xs) = h    x : map h    xs

-- Hence:
    h x : map h xs
 == map h (x:xs)
```

Putting `h` back:

```hs
    map h xs
 == map (f . g) (x:xs)
```

We’ve taken a long journey, so let’s recall exactly what we just did:

```hs
    map f (map g (x:xs))

 == map f (g x : map g xs)
 == f (g x)   : map f (map g xs)
 == (f . g) x : map (f . g) xs
 == h       x : map h       xs
 == map h (x:xs)

 == map (f . g) (x:xs)
```

Ultimately, we’ve deduced `map f (map g (x:xs)) == map (f . g) (x:xs)` – the $k + 1$ case we were aiming for!

So, we’ve no shown:

- The identity holds true for $n = 0$, the empty list `[]`.
- If the identity holds true for $n = k$, a list `xs` of length $k$, then it must hold true for $n = k+1$, a list `x:xs` of length $k+1$.

Hence, by mathematical induction, we have shown the identity holds true for all lists. We’re done!

> If you’ve done proofs by induction on summation or matrix identities before, this should feel strangely similar – manipulating expressions, expanding and merging terms, moulding into the right forms to perform simplifications or deductions!

### TLDR
The steps are pretty detailed, but sometimes that’s detrimental to understanding because you forget the big picture. Here’s a minimal-comments rundown of the proof:

**Base case**. Input is `[]`.

Left:

```hs
    map f (map g items)
 == map f (map g [])
 == map f []
 == []
```

Right:

```hs
    map (f . g) items
 == map (f . g) []
 == []
```

Hence left = right, i.e.

```hs
map f (map g []) == map (f . g) []
```

Base case is true.

**Inductive step**. Assume true for list `xs`:

```hs
map f (map g xs) == map (f . g) xs
```

Consider the list `x:xs`:

```hs
    map f (map g (x:xs))
 == map f (g x : map g xs)       -- using definition of `map g`
 == f (g x)   : map f (map g xs) -- using definition of `map f`
 == (f . g) x : map f (map g xs) -- function composition
 == (f . g) x : map (f . g) xs   -- using inductive assumption
 == h       x : map h       xs   -- renaming
 == map h (x:xs)                 -- using definition of `map h`
 == map (f . g) (x:xs)
```

Hence left = right, i.e.

```hs
map f (map g (x:xs)) == map (f . g) (x:xs)
```

True for base case, and if true for `xs` then true for `x:xs`. Hence true for all lists.


<br>


## The Ending is the Beginning

Hopefully I’ve piqued your interest, and maybe you’re so fascinated that you’re gonna check out Haskell. If you do, what I will say is: you should probably make sure you already have some programming experience.

Haskell is intuitive in many of the basics. But it easily becomes unintuitive very quickly as things become more abstract. You gain extremely useful and transferable logic and reasoning skills from both maths and programming, and uniting these will make Haskell *click*.

That said, if your background is purely maths, and you’ve never touched code in your life, I think you’ll still get on fine. Haskell is a brilliant language to learn, whether you’re already a programmer or not ;)


<br>
