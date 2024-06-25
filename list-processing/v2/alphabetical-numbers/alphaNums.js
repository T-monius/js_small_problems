const ALPHAS_FOR_NUMS = {
  0:'zero',
  1:'one',
  2:'two',
  3:'three',
  4:'four',
  5:'five',
  6:'six',
  7:'seven',
  8:'eight',
  9:'nine',
  10:'ten',
  11:'eleven',
  12:'twelve',
  13:'thirteen',
  14:'fourteen',
  15:'fifteen',
  16:'sixteen',
  17:'seventeen',
  18:'eighteen',
  19:'nineteen',
};

const sortByWordValAsc = (num, numOne) => {
  const word = ALPHAS_FOR_NUMS[num];
  const wordOne = ALPHAS_FOR_NUMS[numOne];
  let sortVal = 0;
  if(word < wordOne) { sortVal = -1 }
  if(word > wordOne) { sortVal = 1 }

  return sortVal;
};

const alphaNumSort = (nums) => {
  return nums.toSorted(sortByWordValAsc);
};

const numsUpTo = (from, upTo) => {
  const nums = [];
  for(let idx = from; idx <= upTo; idx += 1) {
    nums.push(idx);
  }
  return nums;
};

export { alphaNumSort, numsUpTo, sortByWordValAsc }