---
title: Identifiers
topic: Core
next: the-ticker
update: 2025 July 8
---


## // Subscripting Identifiers

### _
```desmos
n = 1
f\left(x\right) = x^2
```

Variables and functions need names (which we’ll call **identifiers**). So far, we’ve fared fine using single lowercase and uppercase letters, like $n$ and $f(x)$.

However, with all the complexity involved in developing a game, this’ll quickly get out of hand. We’ll soon find ourselves with logical conflicts as we run out of letters – needing the same letter $t$ for time, tick, interpolation, etc.

### _
```desmos
multi = 0
```

We avoid one-letter names in programming, so we’ll want to do the same in Desmos.

However, we can’t create multi-character identifiers, because Desmos interprets these as multiplying multiple symbols (like in maths).

### _
```desmos
t_{s} = 0
```

Each identifier can have one letter as its base. However, as is common in maths and physics, we *can* use **subscripts**. Now we have a great way of making identifiers more unique to avoid clashes.

### _
```desmos
t_{subtext} = 1
```

Subscripts with more than 1 letter are actually pretty rare in maths and physics (you tend to find a bit more in chemistry).

Luckily for us, Desmos does allow subscripts to be more than 1 letter long!

This means we can easily spell out words and phrases. Now we rarely ever need to worry about clashes; instead we should think about how best to structure and name identifiers.

### _
<aside>
You add a subscript by typing `_` after an expression. Try defining a variable called $g_{state}$.
</aside>


## // Naming Identifiers

### _
```desmos
p_{arse} = \left[\right]
```

A common approach to using subscripts for identifier names is to spell out the intended name of the variable or function, using the first letter as the base, and the rest as the subscripts.

Here, in code we might call the function `parse()`, so the $p$ becomes the base, while we have $_{arse}$ as a subscript.

### _
Yeah, not ideal.

It’s just a bit cumbersome to read and quickly interpret – you’re constantly having to do mental acrobatics to put the base and subscript together.

### _
```desmos
g_{timer} = 0
```

Personally, I really like the approach of using the base as a sort of ‘qualifier’ or ‘namespace’.

For instance, we can use $g$ as the base for all global variables. Then we’ll call our global timer variable $g_{\text{timer}}$.

Now we can easily read $\text{timer}$ while also having additional information about what sort of variable it is. This is great for logically categorising objects. It’s a win-win!



## // Allowed Characters

### _
Desmos does not quite allow any arbitrary Unicode characters in identifier names, since many have specific mathematical meanings in Desmos.

### _
For the base, we can use any lowercase or uppercase letter – including Greek letters!

In the subscript, we can now use numbers too. Annoyingly, no punctuation marks are allowed (at time of writing).


## // Handling Long Names

### _
As we have more and more variables, functions, actions in a project, the chance of collisions or ambiguity steadily increases. As a result, we’ll need more categorisation and namespacing of identifiers to clearly differentiate them.

### _
In programming we can achieve this with dot notation like `namespace.category.identifier`, which is probably the cleanest approach. `snake_case` and `kebab-case` work too.

Unfortunately, none of these are available for identifiers in Desmos. These would be ideal for separating individual words in multi-word names.

### _
If you try using `_`, you’ll notice it actually creates another subscript. This double subscripting would be a decent workaround – the text gets a bit too small to read, but it’s still somewhat acceptable.

However, Desmos doesn’t allow subscripts to have subscripts.

### _
```desmos
s_{bulletSpeed}
```

The only solution, pretty much, is to use `camelCase`. This isn’t ideal since readability is poor, especially at the condensed font size, but it’s the least evil.

### _
```desmos
g_{screenheight} = 400
s_{playercount} = 1
```

And it’s probably better than the approach I tend to use, which is `nocase`...

I mean, it works for a lot of things like $g_{\text{screenheight}}$ or $s_{\text{playercount}}$, sooo
