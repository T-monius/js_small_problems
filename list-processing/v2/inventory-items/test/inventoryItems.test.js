import assert from 'assert';
import { transactionsFor } from '../index.js'
import { TRANSACTIONS } from './testTransactions.js';

describe('transactionsFor', () => {
  it('should return transactions associated with an inventory item id', () => {
    const transactions = [...TRANSACTIONS];
    const desiredInventoryId = 101;
    const matches = transactionsFor(desiredInventoryId, transactions);

    assert.deepEqual(matches, [
      { id: 101, movement: "in",  quantity:  5 },
      { id: 101, movement: "in",  quantity: 12 },
      { id: 101, movement: "out", quantity: 18 }, 
    ]);
  });
});
