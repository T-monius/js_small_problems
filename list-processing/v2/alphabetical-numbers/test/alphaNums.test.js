import assert from 'assert';
import { alphaNumSort, numsUpTo, sortByWordValAsc } from '../alphaNums.js'

describe('sortByWordValAsc', () => {
  const num = 2;
  const numOne = 3;
  const sortVal = sortByWordValAsc(2, 3);
  assert.equal(sortVal, 1);
});

describe('numsUpTo', () => {
  const oneToFive = [1, 2, 3, 4, 5];
  const nums = numsUpTo(1, 5);
  assert.deepEqual(oneToFive, nums);
});

describe('alphaNumSort', () => {
  it('should return a sorted array of english words for nums 1-19', () => {
    const oneToNineteen = numsUpTo(0, 19);
    const sorted = alphaNumSort(oneToNineteen);
    assert.deepEqual(sorted, [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]);
  });
});
