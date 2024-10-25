
export const countOccurrences = (str: string, searchValue: string) => {
  // split the string into an array of words
  const words = str.split(/\s+/);
  // count the number of times the search value appears in the array
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === searchValue) {
      count++;
    }
  }
  return count;
};
