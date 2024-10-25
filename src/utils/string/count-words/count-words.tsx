
export const countWords = (str: string) => {
  str = str.trim();
  return str.split(/\s+/).length;
};
