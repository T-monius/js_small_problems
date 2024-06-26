const transactionsFor = (inventoryItemId, transactions) => {
  const matchingTransactions = transactions.filter( (transaction) => {
    return transaction.id === inventoryItemId;
  });

  return matchingTransactions;
};

export { transactionsFor };
