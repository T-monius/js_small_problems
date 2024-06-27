import assert from 'assert';
import { letterCaseCounter } from '../index.js';

describe('letterCaseCounter', () => {
  it('shuould count a mix of uppercase, lowercase, and neither', () => {
    const str = 'abCdef 123';
    const counts = letterCaseCounter(str);

    assert.deepEqual(counts, { lowercase: 5, uppercase: 1, neither: 4 });
  });

  it('shuould count a mix of uppercase, lowercase, space, and special', () => {
    const str = 'AbCd +Ef';
    const counts = letterCaseCounter(str);

    assert.deepEqual(counts, { lowercase: 3, uppercase: 3, neither: 2 });
  });

  it('shuould count all numbers', () => {
    const str = '123';
    const counts = letterCaseCounter(str);

    assert.deepEqual(counts, { lowercase: 0, uppercase: 0, neither: 3 });
  });

  it('shuould count an empty string', () => {
    const str = '';
    const counts = letterCaseCounter(str);

    assert.deepEqual(counts, { lowercase: 0, uppercase: 0, neither: 0 });
  });
});
