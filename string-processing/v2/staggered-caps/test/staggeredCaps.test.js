import assert from 'assert';
import { staggeredCaps } from '../index.js';

describe('staggeredCaps', () => {
  it('staggers a string of mixed case alpha, whitespace, and puncuation', () => {
    const str = 'I Love Launch School!';
    const staggered = staggeredCaps(str);

    assert.equal(staggered, 'I LoVe lAuNcH ScHoOl!');
  });

  it('staggers a string of mixed case alpha, whitespace, and puncuation by index', () => {
    const str = '#I Love Launch School!';
    const staggered = staggeredCaps(str);

    assert.equal(staggered, '#i lOvE LaUnCh sChOoL!');
  });

  it('staggers all caps and special chars', () => {
    const str = 'ALL_CAPS';
    const staggered = staggeredCaps(str);

    assert.equal(staggered, 'AlL_CaPs');
  });

  it('staggers all lowercase, whitespace, and special chars', () => {
    const str = 'ignore 77 the 444 numbers';
    const staggered = staggeredCaps(str);

    assert.equal(staggered, 'IgNoRe 77 ThE 444 NuMbErS');
  });
});
