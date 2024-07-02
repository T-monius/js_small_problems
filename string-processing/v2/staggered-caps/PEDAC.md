# Staggered Caps

## Problem

Write a method that takes a String as an argument, and returns a new String that contains the original value using a staggered capitalization scheme in which every other character is capitalized, and the remaining characters are lowercase. Characters that are not letters should not be changed, but count as characters when switching between upper and lowercase.

__Understanding__
Input
- String
  - Alpha and non-alpha chars
Output
- String
  - Alpha and non-alphas
  - Every other char is capitalized
    - First occurence of an alpha ~~lowercase~~uppercase?
    - Or, even indexes uppercased? <-

## Examples/Test Cases

```js
staggeredCase('I Love Launch School!')
//             ^
//=> "I LoVe lAuNcH ScHoOl!"
staggeredCase('#I Love Launch School!')
//=> "#I LoVe lAuNcH ScHoOl!" UNCLEAR AS TO WHETHER THIS WOULD BE TRUE
staggeredCase('ALL_CAPS');
//=> "AlL_CaPs"
staggeredCase('ignore 77 the 444 numbers');
//=> "IgNoRe 77 ThE 444 NuMbErS"
```

## Data Strucutes

- n/a

## Algorithm

1. Instantiate a new string for output
1. instantiate an index var
1. Iterate while the index is less than input string length
1.   At iteration, access char
1.   If `idx` is even, uppercase char else lowercase
1.   Push `char` to outpus string
1. Return output string
