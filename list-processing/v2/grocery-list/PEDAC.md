# Grocery List

## Problem

Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

__Understanding__

Input
- Array
  - two dimensional
  - Fruit, string
  - Quantity, num?
Output
- Array
  - One dimensional
  - Fruit, string quantity times

## Examples/Test Cases

```js
quantities = [];
buyFruit([
  ['apple', 3], // <--
//          ^
  ['orange', 1],
  ['banana', 2]]);
//         
//=> ["apple", "apple", "apple", "orange", "banana", "banana"]
```

## Data Structures

- Array

## Algotithm

1. Instantiate a list/array for return
1. Iterate over input
1.   At iteration, Access quanitity (i.e at index 1)
1.   Iterate for idx var while less than quantity
1.     Push item (i.e at index 0) to `quantities`
1. Return `quantities`
