const buyItems = (list) => {
  const quanitities =  list.reduce(
    (acc, itemWithQuantity) => {
      const [item, quantity] = itemWithQuantity;
      for(let idx = 0; idx < quantity; idx += 1) {
        acc.push(item);
      }
      return acc;
    },
    []
  );

  return quanitities;
};

export { buyItems };
