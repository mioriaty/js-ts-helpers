export const isHexColor = (hex: string) => {
  const hexColorRegex: RegExp = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  return hexColorRegex.test(hex);
}
