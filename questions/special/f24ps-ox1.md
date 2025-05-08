---
topic: special
title: A Graph Drawing Interview Question
desc: 
date: 2024 
tags:
  - graph drawing
  - interview
---


## Description

This is an Oxbridge-style interview question I wrote for my friends. I’m quite proud of it since it builds up very naturally (heh), tests a lot of graph drawing skills, and links to many graph-related topics.

As is standard in problem-solving-based interviews, you’re given guidance and nudges in the right direction throughout. Of course in a real interview the interviewer can vary their help based on what you’ve done, but for a webpage this is a much harder task.

As such, you may find that some hints are irrelevant to you, in which case you can just ignore them. I would recommend revealing all the hints before checking the final answer, so that you can catch a mistake if you’ve made one and give the question another try.


## Question
```math
\frac
  { \ln\left( 1/x^2 \right) }
  { e^{(1/x)} }
```


## Part 1

### Question
Draw the following graph:

```math
y = \ln\left( \frac{1}{x^2} \right)
```

### Hint 1
Instead of drawing $y = 1/x^2$, could you simplify the expression first to make it much easier to sketch?

### Hint 2
Write $1/x^2$ as $x^{-2}$.

### Hint 3
If you’ve only drawn a graph for positive $x$, think carefully about the domain of the function.

### Answer
Your graph should look like this:

```desmos
```

### Solution
We start by simplifying the expression using a log law:

```math
\begin{align*}
  y &= \ln\left( 1/x^2 \right)
  \\ &= \ln\left( x^{-2} \right)
  \\ &= -2 \ln(x)
\end{align*}
```

However, notice that this has changed the domain of the function! $\ln(1/x^2)$ is defined for all real $x \neq 0$, but $\ln(x)$ is only defined for positive $x$. This is because we removed the square, which was making an otherwise negative input positive.

So, we also need to include negative values of $x$ in our graph. This means we’re drawing

```math
y = -2 \ln|x|
```

> [!Note]
> We could also use a complex-valued logarithm, but this is unrealistic to draw.

This is simply a flipped $\ln(x)$ graph, which is also reflected in the $y$ axis:

```desmos
```


## Part 2

### Question
Now draw this following graph:

```math
y = e^{(1/x)}
```

### Hint 1
Start by drawing $y = 1/x$.

### Hint 2
As $x \to \infin$, the $1/x \to 0$. What does $e^{(1/x)}$ tend to then?

### Hint 3
Do the same for $x \to -\infin$.

### Hint 4
What happens as $x$ approaches $0$ from the positive side?

### Hint 5
Would you expect the graph to be symmetric?

### Answer
Your graph should look like this:

```desmos
```

### Solution


## Part 3

### Question
In the previous 2 parts you drew 2 graphs. Define those as functions:

```math
\begin{align*}
  f(x) &= \ln\left( 1/x^2 \right)
  \\ g(x) &= e^{(1/x)}
\end{align*}
```

Now draw the graph of their quotient:

```math
y = \frac{f(x)}{g(x)}
```

### Hint 1
Start by handling the extremes, where $x \to \pm \infin$.

### Hint 2
Dividing by $1$ leaves a graph unchanged.

### Hint 3
When $f(x) = 0$, you have $f(x) / g(x) = 0$ regardless of what $g(x)$ is.

### Hint 4
Now let’s tackle the left. As $x \to 0$ from the negative side, $g(x) \to 0$. So what happens when you divide $f(x)$ by this increasingly small value?

### Hint 5
The right is a little more fiddly. As $x$ approaches $0$ from the positive side, both $f(x)$ and $g(x)$ are tending to $\infin$, but how do we know which is growing faster? This is not easy to figure out.

There are 3 cases:

- $f(x)$ grows faster than $g(x)$ and $f(x) / g(x) \to \infin$
- $f(x)$ grows slower than $g(x)$ and $f(x) / g(x) \to 0$
- $f(x)$ and $g(x)$ grow at the same rate and $f(x) / g(x) \to 1$

The last case is unlikely since $f(x)$ and $g(x)$ have entirely different types of functions ($f$ has a $\ln$, $g$ an $\exp$).

What defining feature would allow you to distinguish between the graph tending to $\infin$ vs $0$?

### Hint 6
Draw out the 2 cases where the graph tends to $\infin$ and $0$. What do you notice about the case where it tends to $0$?

### Hint 7
The graph must rise above the $x$ axis between $0 \leq x \leq 1$. So for it to return to $0$ at $x = 0$, there must be a turning point. How do you find the turning point?

### Hint 8
Differentiate $f(x) / g(x)$, then solve for when this derivative is $0$. You should obtain

```math
\ln(x) = -x
```

If this has a solution for $0 \leq x \leq 1$, the graph must have a turning point.

### Hint 9
You don’t need to solve for the precise value of $x$, you just need to ascertain if it lies in $0 \leq x \leq 1$.

What if you write the equation as

```math
\ln(x) = y = -x
```

### Hint 10
Draw out $y = \ln(x)$ and $y = -x$ (!)

### Answer
Your graph should look like this:

```desmos
```

### Solution


## Part 4

### Question
Now draw the graph of the product:

```math
y = f(x) \cdot g(x)
```

### Hint 1
If you already know what their quotient looks like, can you manipulate the expression to easily determine what their product looks like?

### Hint 2
Write the expression as follows:

```math
f(x) \cdot g(x) = f(x) \cdot \frac{1}{g(x)}
```

### Hint 3
What is $1/g(x)$ equal to?

### Hint 4
What would $f(-x) \cdot g(-x)$ look like?

### Answer
Your graph should look like this:

```desmos
```

### Thought
If you didn’t use it in your solution, can you explain why $f(x) \cdot g(x)$ looks like $f(x) / g(x)$, but reflected in the $y$ axis?
