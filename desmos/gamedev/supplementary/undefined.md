---
domain: desmos-gamedev
topic:  Supplementary
title:  Undefined
update: 2026 March 29
---


## Description

In this scripture, we look at the pervasive $\text{undefined}$, its quirks, and how we can deal with it.


## // The Billion-Dollar Mistake

### _
If you’re a software developer, you’ve probably heard of nulls be described as “the billion-dollar mistake”.

Nulls are used to represent the absence of a value. Desmos, perhaps unfortunately, is also plagued by them, with the name $\text{undefined}$.

You should rarely need to use $\text{undefined}$, but it’s good to be aware of its existence and oddities.

### _
```desmos
\frac{p}{0}
p = 1
```

The easiest example of an operation that returns $\text{undefined}$ is dividing anything by $0$.

### _
```desmos
f\left( x \right) = \left\{ x < 0:\ 1 \right\}
f\left( 20 \right)
```

A conditional without an ‘else’ branch also implicitly returns $\text{undefined}$.

### _
There are 2 important things to know about $\text{undefined}$.

1. $\text{undefined} \neq \text{undefined}$.
2. They corrupt operations. Most built-in functions return $\text{undefined}$ if an input(s) is $\text{undefined}$.

### _
It’s very useful to know that $\text{undefined}$ doesn’t equal itself, because it’s the only (correct me if I’m wrong) value in Desmos for which this is true.

### _
Think about this for a sec, it’s pretty special. Of course $1 = 1$, $20 = 20$, that’s how equality works. But it’s different for $\text{undefined}$, because it sort of represents an ‘unknown’ value.

This means to detect whether a value is $\text{undefined}$, we can simply compare it to itself. If it’s not equal to itself, it must be $\text{undefined}$.

### _
```desmos
u = \frac{0}{0}

1 + u
2 \cdot u
\sqrt{u}
```

The other behaviour of $\text{undefined}$ that you’re likely to encounter yourself is that it stays $\text{undefined}$ regardless of what operations are performed on it.

Take a look at all these operations that include an $\text{undefined}$. As soon as one operand is $\text{undefined}$, the whole thing is corrupted and collapses to an $\text{undefined}$.

### _
```desmos
f_{safeLength}\left( l \right) =
```

<aside class="challenge"></aside>

Implement a function $f_\text{safeLength}(l)$ that finds the length of the list $l$, returning $0$ if $l$ is $\text{undefined}$.

### _
```desmos
/hidden :: f_{safeLength}\left( l \right) = \left\{ l = l:\ \operatorname{length}\left( l \right),\ 0 \right\}
```

<aside class="solution"></aside>

We use a conditional expression to check if $l$ is $\text{undefined}$. If it is equal to itself, it can’t be $\text{undefined}$, so we can safely return $\operatorname{length}(l)$. Otherwise, we return $0$.

### _
```desmos
/hidden :: f_{safeLength}\left( l \right) = \left\{ l = l:\ \operatorname{length}\left( l \right),\ 0 \right\}



l_{defined} = \left[ 1,\ 2,\ 3 \right]
l_{undefined} = \frac{0}{0}
```

<aside class="challenge"></aside>

Compare this function to directly taking the length of a potentially undefined value. What’s different?

### _
```desmos
/hidden :: f_{safeLength}\left( l \right) = \left\{ l = l:\ \operatorname{length}\left( l \right),\ 0 \right\}

f_{safeLength}\left( l_{undefined} \right)
\operatorname{length}\left( l_{undefined} \right)

f_{safeLength}\left( l_{defined} \right)
\operatorname{length}\left( l_{defined} \right)

l_{defined} = \left[ 1,\ 2,\ 3 \right]
l_{undefined} = \frac{0}{0}
```

<aside class="solution"></aside>

Weirdly enough, $\operatorname{length}(\text{undefined})$ is not corrupted to $\text{undefined}$, but instead returns $1$.

### _
We might wonder, why does Desmos have to use $\text{undefined}$ instead of just indicating an error?

### _
I don’t really have an answer to that. Desmos is happy to error on plenty of other things, so it’s a little inconsistent here.

I suppose you could argue mathematicians quite like the term “undefined”, so maybe Desmos is reflecting that.

### _
```desmos
0^0
```

By the way, you might expect $0^0$ to be $\text{undefined}$ (it is) – but it’s not in Desmos!

I’m not entirely sure why Desmos chose it to be $1$ (over $0$, $\text{undefined}$ or erroring), but now you know.
