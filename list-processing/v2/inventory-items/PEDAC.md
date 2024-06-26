# Inventory Items

## Problem

Write a function that takes two arguments, `inventoryItem` and `transactions`, and returns an array containing only the `transactions` for the specified `inventoryItem`.

__Understanding__

Input
- 2 arguments
  - number, object?
  - List, transaction lements? objects?
Output
- List
  - Transactions, ~~whatever that is~~ objects

Selection/Filtering

## Examples/Test Cases

```js
const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];


console.log(transactionsFor(101, transactions));
/*=>
[
  { id: 101, movement: "in",  quantity:  5 },
  { id: 101, movement: "in",  quantity: 12 },
  { id: 101, movement: "out", quantity: 18 },
];
*/
```

## Data Structures

- N/A

## Algorithm

1. Iterate over `transactions` with `filter`
1.   At iteration access the id of transaction and compare to input id returning result
1. Return selected transactions
