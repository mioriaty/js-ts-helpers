
export const isIdentical = (str1: string, str2: string) => {
  str1 = str1.trim();
  str2 = str2.trim();

  if (str1.toLowerCase() === str2.toLowerCase()) {
    return true;
  }

  return false;
};
