# Alphabetical Numbers

## Problem

- Write a function that takes an array of integers between `0` and `19`, and returns an array of those integers sorted based on the English word for each number:

- zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

__Understanding__

Input
- Array
  - Number elements
  - 1-19
Output
- Array
  - Sorted
    - By English word

## Examples/Test Cases

```js
const nums = [0/* to 19*/];
alphaNumSort(nums);
```

## Data Structures

- Object/map

## Algorithm

1. Create map of numbers -> word
1. Sort array
1.   Sort function accesses map for word
1. Output new sorted array

Alternatively

1. Map numbers array to words
2. Sort words array and return

