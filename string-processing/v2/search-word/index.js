const ALPHA = /[A-Za-z]/;

const findNextWordFromIndex = (idx, text) => {
  while (idx < text.length && text[idx].search(ALPHA) === -1) {
    idx += 1;
  };
  let otherIdx = idx + 1;
  while (otherIdx < text.length && text[otherIdx].search(ALPHA) === 0) {
    otherIdx += 1;
  };

  return [idx, otherIdx];
};

const searchWord = (target, text) => {
  let count = 0;
  let idx = 0;
  let otherIdx;

  while (idx < text.length) {
    [idx, otherIdx] = findNextWordFromIndex(idx, text);
    const word = text.slice(idx, otherIdx);

    if (word.toLowerCase() === target.toLowerCase()) {
      count += 1
    }
    idx = otherIdx;
  };

  return count;
};

export { searchWord, findNextWordFromIndex };