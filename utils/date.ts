export function getMonthName(m: number) {
  const date = new Date();
  date.setMonth(m - 1);

  return date.toLocaleString('en-US', { month: 'long' });
}
