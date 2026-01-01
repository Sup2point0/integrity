---
domain: desmos-gamedev
topic:  Core
title:  Ranges
next:   list-comprehensions
update: 2025 August 25
---


## Description

In this scripture, we’ll look at ranges, the way to quickly generate arithmetic sequences.


## // Versatile Laziness

### _
In mathematical notation, when denoting a long sequence of numbers that follow a clear pattern, we usually use `...` ellipsis to omit intermediate terms:

```math
1, 2, 3, \text{...}\, , 99, 100
```

### _
```desmos
\left[ 1, \ 2, \ 3, ... , \ 99, \ 100 \right]
```

Well, Desmos truly is the mathematician’s calculator, so what’d’y’know, this exact syntax works. We just need to wrap the sequence in $[]$ to create a list – this is the only place $\text{...}$ is valid in Desmos.

### _
In writing, we’d aim to provide sufficient information such that the omitted intermediate terms can be clearly and unambiguously deduced.

### _
```desmos
\left[ 1 ... 10 \right]
```

But since Desmos is digital, all we need is the bare minimum – that is, the 2 endpoints. Just type `...` between 2 integers, and Desmos will construct a list of consecutive numbers for you, both endpoints inclusive.

### _
This feature is called a **range**. It’s super handy for automatically constructing sequences instead of typing them out by hand.

### _
We’ll call this reduced syntax a ***simple* range**.

### _
```desmos
L = 4

\left[ 1 ... L \right]
```

Since the endpoints are just numbers, we can replace them with variables. Here, sliding the value of $L$ dynamically changes the range.

### _
```desmos
\left[ 10 ... 1 \right]
```

To construct a decreasing range, just make the right endpoint smaller than the left. Desmos will know to step down instead of up.

### _
<aside></aside>
What does constructing a range from a number $p$ to $p$ give? How can you find out?

### _
```desmos
p = 3
P = \left[ p ... p \right]

P \left[ 1 \right]
3 \left[ 1 \right]
```

The edge case is where both endpoints are the same. If this happens, Desmos will still construct a list, but only with 1 element (the endpoint).

The difficulty is seeing that, since (as of writing) the results for a single number vs a 1-item list look identical in the calculator. A way to distinguish them is by trying to access item 1 of the list – if it were just a single number, you would see an error “Cannot index a number with a number”!


## // Step Wisely

### _
Consecutive sequences cover most use cases, but there may be situations where a non-consecutive arithmetic sequence is desired – i.e. the difference between each term is not simply 1.

```math
[2, 4, 6, 8, 10]
```

### _
```desmos
2 \cdot \left[ 1, \ 2, \ 3, \ 4, \ 5 \right]
```

One way to achieve this is to multiply the range by a number. Due to the ways lists interact with operators, using $\cdot$ multiplies each term in the list by the scalar.

### _
However, this isn’t the most versatile approach since it can’t handle offsets – the entire sequence has to be of the form $t_n = kn$ (where $k$ is the scalar). If you want $t_n = kn + c$ (with the offset by $c$), just scaling a range can’t do that.

```math
k \cdot [1, \ 2, \ 3, \ 4, \ 5] \neq [3, \ 5, \ 7, \ 9, \ 11]
```

### _
```desmos
\left[ 3, \ 5, \ ..., \ 11 \right]
```

In this case, we’ll need the more verbose range syntax. Providing 2 initial terms and an endpoint gives Desmos sufficient information to deduce the rest of the range. It can determine the step from the difference between the first 2 terms, and knows when to stop from the last term.

### _
We’ll call this expanded syntax an ***inferred* range**, since Desmos is “inferring” the sequence based on the selection of terms we provide it.

### _
```desmos
\left[ 1, \ 2, \ 4, \ 8, \ ..., \ 256 \right]
```

Ranges can only construct arithmetic sequences (where the difference between each term remains constant), so there’s no ambiguity here. (Desmos won’t do a cubic interpolation or anything!)

### _
```desmos
\left[ 2, \ 4, \ ..., \ 25 \right]
```

If your right endpoint is not actually in the sequence, Desmos will round it to the nearest term that is, and will then use that term as the endpoint.

(image?)

### _
<aside class="note"></aside>
From personal tinkering, it would appear Desmos uses the left side of the range to deduce the step. So that will determine what step is used. If you get the left wrong, your sequence is likely to be screwed.

The right is more lax since it has the rounding, but if you provide more than 1 term and the steps don’t agree, Desmos will still throw an error.


## // Unhinged Ranges

### _
```desmos
\left[ 0.5 ... 2.5 \right]
```

With simple ranges, Desmos rounds the endpoints, so using non-integer values has no meaningful effect.

### _
```desmos
\left[ 0, \ 1.5, ..., \ 7.5 \right]
```

With inferred ranges, you can use a non-integer value for the step. This can get slightly hairy, but as long as you calculate everything correctly it should still be straightforward.

### _
Ranges are the precursor to list comprehensions, which give us more control over exactly what sequence we produce. Let’s have a look at them now!
