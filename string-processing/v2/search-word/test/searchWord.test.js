import assert from 'assert';
import { searchWord, findNextWordFromIndex } from '../index.js'

var TEXT = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

describe('searchWord', () => {
  it('should find a target that occurs 3 times independant of case', () => {
    const target = 'sed'
    const count = searchWord(target, TEXT);

    assert.equal(count, 3);
  });

  it('should find a target that occurs once with adjacent comma', () => {
    const target = 'aperiam'
    const count = searchWord(target, TEXT);

    assert.equal(count, 1);
  });
});

describe('findNextWordFromIndex', () => {
  it('should find the first word in a text', () => {
    let idx = 0;
    const indexes = findNextWordFromIndex(idx, TEXT);
    assert.deepEqual(indexes, [0, 3]);
  });

  it('should find the first word in a text when anchor is non-alpha', () => {
    let idx = 0;
    const indexes = findNextWordFromIndex(idx, '3453453: ' + TEXT);
    assert.deepEqual(indexes, [9, 12]);
  });

  it('should find the next word in a text from arbitrary start point', () => {
    let idx = 3;
    const indexes = findNextWordFromIndex(idx, TEXT);
    assert.deepEqual(indexes, [4, 6]);
  });
});
