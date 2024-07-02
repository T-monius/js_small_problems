const staggeredCaps = (str) => {
  let staggered = '';

  for(let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];
    idx % 2 === 0 ? char = char.toUpperCase(): char = char.toLowerCase();
    staggered = staggered += char;
  };

  return staggered
};

export { staggeredCaps };
