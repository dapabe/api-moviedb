export function rateScore(score) {
  if (score >= 8) return "text-green-600";
  else if (score >= 6) return "text-yellow-400";
  return "text-red-600";
}
export function cutYear(fulldate) {
  return fulldate.split("-")[0];
}
export const returnLimit = (data, numberLimit) => {
  return !numberLimit ? data : (data.length = numberLimit);
};
export function numberToHours(number) {
  return `${Math.floor(number / 60)}h ${number % 60}m`;
}
