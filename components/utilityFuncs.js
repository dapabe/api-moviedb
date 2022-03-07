export function rateScore(score) {
  if (score >= 8) return "text-green-600";
  else if (score >= 6) return "text-yellow-400";
  return "text-red-600";
}
// export function checkStatus(status){
//   if(status === )
// }
export function cutYear(fulldate) {
  return fulldate.split("-")[0];
}
export function parsedLangDate(keyValue, splitter = "-", lang = "es-ES") {
  const dateArr = keyValue.split(splitter);
  const parsedDate = new Date(dateArr);
  return new Intl.DateTimeFormat(lang).format(parsedDate);
}
// export const returnLimit = (data, numberLimit) => {
//   return !numberLimit ? data : (data.length = numberLimit);
// };

export function numberToHours(number) {
  const averageTime = (array) => {
    let summ = 0;
    for (let i = 0; i < array.length; i++) {
      summ += array[i];
    }
    return summ / array.length;
  };
  const parsedResult = (num) => {
    if (num >= 60) return `${Math.floor(num / 60)}h ${Math.floor(num) % 60}m`;
    else return `${Math.floor(num) % 60}m`;
  };
  return number.length > 1
    ? parsedResult(averageTime(number))
    : parsedResult(number);
}
