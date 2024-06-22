import assert from 'assert';
import { buyItems } from '../buyItems.js';

describe('Test buyItems ', () => {
  it('Converts a two dimenional array of fruit to one dimension', () => {
    const listWithQuantity = [ ['apple', 3],
      ['orange', 1],
      ['banana', 2],
    ];
    const itemsQuantityTimes = buyItems(listWithQuantity);

    assert.deepEqual(["apple", "apple", "apple", "orange", "banana", "banana"], itemsQuantityTimes);
  });
});
