# Letter Case Counter

## Problem

Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

__Understanding__

Input
- String
Output
- Object
  - 3 properties, counts of cases or non-case

## Example/Test Cases

```js
const counts = {
  uppercase: 0,
  lowercase: 0,
  neither:   0,
};

letterCaseCount('abCdef 123');
//               ^
//=> { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');
//=> { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');
//=> { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');
//=> { lowercase: 0, uppercase: 0, neither: 0 }
```

## Data Structures

- Object/map

## Algorithm

1. Instantiate `counts` object
1. Iterate over each idx of string
1.   Access `char` at iteration
1.   Conditionally increment `counts.<proerty>` per case of
1.     Use `string.prototype.search` based on `'[A-Z]'` and `'[a-z]'`
1. Return counts

