---
title: Variables
topic: Essentials
next: lists
update: 2025 July 19
---


## Description

Variables are arguably the most critical feature required for programming. In this scripture, we’ll look at how Desmos handles variables and some quirks to be aware of.


## // Variables

### _
One of the greatest features any calculator can have is storing values in variables.

### _
Variables make it much easier to work with values, since they act as an abstraction that gives meaning to the numbers.

A $3$ by itself doesn’t mean much, but when you assign it to a variable $p_{lives}$, it’s now clear what it represents.

### _
In Desmos, we use variables by simply setting a symbol equal to a value.

### _
```desmos
p = 1
```

Here, we’ve created a variable $p$ and given it a value of $1$.

### _
```desmos
p = 1
q = 0
```

Since Desmos is a digital calculator, we can assign to arbitrary variables, and use as many as we need.

### _
```desmos
p = 1
q = 0

p + q
pq
```

We can now use these variables anywhere to inject the value they contain.

Due to the declarative nature of Desmos, when we change the value of a variable, all computations using it will be automatically updated.

### _
```desmos
k = 1
y = x^2
y = 2k(x - k) + k^2
```

<aside></aside>
Change the variable $k$ here and see how the graphs change.

### _
Variables will be the foundation of realising game development in Desmos. Once we learn how to programmatically update them, things will get a lot more interesting!
