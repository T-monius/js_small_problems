// range.js

function generateRange(start, end) {
  var range = [];
  var element;
  for (element = start; element <= end; element += 1) {
    range.push(element);
  }

  return range;
}

function range(start, end) {
  return end ? generateRange(start, end) : generateRange(0, start)
}

// Examples

console.log(range(10, 20));
console.log(range(5));

/**
An attempt was made to write a wrapper function; however, both functions were given
the same name which makes a recursive call of the lastly defined `range`.

Also, the recursive call within the secondly defined `range` function hard-codes
the `start` argument to zero.
*/