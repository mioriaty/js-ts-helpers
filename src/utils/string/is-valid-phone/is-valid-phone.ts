
export const isValidPhone = (phone: string) => {
  //number should be of 10 digits.
  if (phone[0] === "0") return false;
  const phoneRegex = /\d/g;
  return phone.length==phone.match(phoneRegex)?.length;
};
