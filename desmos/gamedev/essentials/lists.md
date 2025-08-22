---
title: Lists
topic: Essentials
reco: variables
next: points
update: 2025 July 16
---


## Description

Lists allow us to store multiple objects at once. More importantly, they can be arbitrarily long, making scaling up in Desmos possible.


## // Introduction

### _
**Lists** are an incredible feature that make Desmos quite different to other calculators, and much closer to programming languages.

### _
```desmos
\left[ 1, 2, 3 \right]
```

We create lists exactly the same way as in most programming languages, with `[]` square brackets.

### _
```desmos
L = \left[ 1, 2, 3 \right]
```

Variables can store lists.

### _
```desmos
L = \left[ 1, 2, 3 \right]
L \left[ 1 \right]
L \left[ 2 \right]
L \left[ 3 \right]
```

We access the items of a list using square brackets.

### _
```desmos
L = \left[ 1, 2, 3 \right]
L \left[ 0 \right]
```

Unlike most programming languages, lists in Desmos are 1-indexed, so the first element is at index $1$, the second at index $2$, and so on. Trying to access index $0$ returns $\text{undefined}$.

### _
```desmos
L = \left[ 1, 2, 3 \right]
L \left[ -1 \right]
```

Unfortunately, Desmos doesn’t currently support negative indexing.

### _
```desmos
L = \left[ 1, 2, 3 \right]

length\left( L \right)
L\left[ length\left( L \right) \right]
```

To access the last element, we can count how many items are in the list by calling the $\operatorname{length}()$ function on it, then use this as the index.

### _
Lists in Desmos are strictly homogeneous – all items in them must be of the same type. For now, we’ve only seen them contain numbers, but later on we’ll also be storing points in them.

### _
You may have noticed we haven’t mentioned any of the standard list operations like `append`, `remove`, `insert` here. This is because lists in Desmos are immutable, so to perform any of these operations requires constructing a new list with the operation applied. This is quite fiddly, so we’ll cover them later on!
