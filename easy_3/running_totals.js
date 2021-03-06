// running_totals.js

function runningTotal(arr) {
  return arr.map( function(num, idx) {
    return arr.slice(0, idx + 1).reduce( (acc, curr) => acc + curr);
  })
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

// Most naive solution
// function runningTotal(arr) {
//   var runningTotals = [];
//   var total = 0;
//   var i;

//   for (i = 0; i < arr.length; i += 1) {
//     total += arr[i];
//     runningTotals.push(total);
//   }
//   return runningTotals;
// }