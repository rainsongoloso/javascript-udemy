const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} Days ... `;
  }
  return "... " + str;
}
console.log(printForecast(temp1));
console.log(printForecast(temp2));
