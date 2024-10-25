
export const isValidDate = (dateString: string) => {
  // Assuming the date format is YYYY-MM-DD for simplicity
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;

  const date = new Date(dateString);
  return !isNaN(date.getTime());
}
