# Search Word

## Problem

Write a function that takes a `word` and a string of `text` as arguments, and returns an integer representing the number of times the `word` appears in the `text`.

## Examples/Test Cases

```js
var text = 'Sed ut perspiciatis unde omnis iste natus' \
//                                              ^
//                                                   ^
'error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);
//=> 3
```

## Data Structures

- Array
- String

## Algorithm

1. Instantiate a `count` variable
1. Instantiate pointer `idx`
1. Iterate while pointer is less than string length
1.   Iterate while `idx < text.length` and `char` at `idx` is not alpha
1.     increment `idx`
1.   Set `otherIdx` to `idx + 1`
1.   Iterate while `otherIdx < text.length` and `char` at `otherIdx` is alpha
1.     increment `otherIdx`
1.   Assign `word` to substring from `idx` to `otherIdx`
1.   Compare lowercase version of `word` to `target`
1.     Conditionally increment count
1.   Set `idx` to `otherIdx`
