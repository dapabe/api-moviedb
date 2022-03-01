export const isWidth = {
  sm: 640,
  md: 768,
  lg: 1024,
};
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
