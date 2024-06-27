const COUNTS = {
  uppercase: 0,
  lowercase: 0,
  neither:   0,
};

const UPPERCASE = /[A-Z]/;
const LOWERCASE = /[a-z]/;

const letterCaseCounter = (str) => {
  const counts = {...COUNTS};

  str
  .split('')
  .forEach((char) => {
    switch(true) {
      case char.search(UPPERCASE) !== -1:
        counts.uppercase += 1;
        break;
      case char.search(LOWERCASE) !== -1:
        counts.lowercase += 1;
        break;
      default:
        counts.neither += 1;
        break;
    }
  });

  return counts;
};

export { letterCaseCounter };
