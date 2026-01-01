---
domain: desmos-gamedev
topic:  Core
title:  Actions
next:   identifiers
update: 2025 July 24
---


## Description

Actions are what make programming in Desmos possible. In this scripture, we’ll look at how we can create, define and combine actions to buid dynamic programs.


## // Desmos in Action

### _
Programming in Desmos is made possible by one critical feature: **actions**.

### _
Actions make it possible to have *mutable state*, the crux of programming. Let’s see them in action (heh).

### _
```desmos
m = 1
```

Here we’ve defined a variable $m$, and given it a value of $1$.

### _
We can set this variable to a particular value, we can change it (manually) with the slider, and we can even keep it oscillating by animating the slider.

What we can’t do (without actions) is use Desmos itself to change its value. We either have to type in a new value, drag the slider, or ...idk, wait for the slider to momentarily hit the value we wanted. Not exactly ideal for programming!

### _
```desmos
m = 1
y = mx
```

Actions give us a *programmatic* way to alter variables. Really, they’re just ‘set’ statements – i.e. “Set this variable to this value.”

### _
```desmos
m = 1
y = mx

m \to 2
```

We define them using a $\to$ arrow, which you can type with `-` followed by `>`. Put the variable to assign to on the left, and the value to give it on the right.

```math
m \to 2
```

### _
Notice to the left of the action we don’t have a coloured graph indicator as usual (like for the line with $y = mx$), but an arrow button instead.

Try clicking that button – this triggers the action, applying its effect. You’ll see $m$ change to $2$.

### _
<aside>
Can you write an action that increments $m$ by $1$ when triggered?
</aside>

### _
```desmos
m = 1
y = mx

m \to m+1
```

Actions can only set variables, not change them. To do mutating assignments like `+=` or `*=`, we just have to use the old-fashioned method of including the variable itself in the computation:

```math
m \to m+1
```

### _
If you’re a programmer and actions are new to you, your brain should be flipping out right now. With the ability to change state, Desmos evolves beyond a calculator.

I encourage you to explore for yourself what you can make with actions, and even try to make a game yourself! (I wouldn’t even it’s that difficult, just fiddly.) A lot of this stuff can be self-taught through experimentation and discovery.


## // Naming Actions

### _
```desmos
m = 1
y = mx

a = m \to m+1
```

We can give actions a name just by assigning them to a variable.

### _
```desmos
m = 1
y = mx

a = m \to m+1
a
```

Now, we can use this variable to reference the action. Notice the line with $a$ now has a button to trigger the action too, because $a$ represents an action.

This isn’t too useful yet, but we’ll be using this very shortly.


## // Cascading Actions

### _
Like functions calling other functions, actions can also execute other actions.

### _
Actions are quite unlike other Desmos syntax in that they *do* something – they perform an “action” with side effects – rather than just computing a calculation and returning the result, like a summation or list comprehension.

### _
When you list actions with a comma `,`, instead of creating a list, it creates a composite action that runs both actions in sequence.

```math
p \to 1, \ q \to 2
```

### _
```desmos
p = 0
q = 0

p \to 1, \ q \to 2
```

Try running this action. You’ll see both $p$ and $q$ get updated at once.

So, we can perform multiple operations in one large action, just by separating each individual action with a comma `,`.

### _
```desmos
p = 0
q = 0

a = p \to 1
a, \ q \to 2
```

Let’s now extract 1 of those individual actions, and assign it to an identifier $a$. We can run that extracted action in the composite action by just referring to $a$.

### _
```desmos
p = 0
q = 0

a = p \to 1
b = q \to 2
a, \ b
```

Extracting the other action, we now have 2 individually defined actions, which we then combine into one composite action.

This is a bit weird, since it looks more like we’re creating a list!

### _
```desmos
a = p \to 1
b = q \to 2
c = a, \ b
```

It looks even weirder if we also name this composite action, since it looks like we’re assigning $a, b$ to $c$.

### _
All in all, the point is, we can run multiple actions at once by listing them with `,` separators. This creates a composite action that runs each individual action in sequence.
