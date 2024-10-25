export const isBase32 = (str: string) => {
  const base32Regex = /^[A-Z2-7]+=*$/;
  return base32Regex.test(str);
};
