
export const isBase64 = (str: string) => {
  return /^[A-Za-z0-9+/]*={0,2}$/.test(str);
};
