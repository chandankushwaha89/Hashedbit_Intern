// 3.8- Find repeated sum of digits until single digit remains
function sum(num) {
  while (num >= 10) {
    let temp = 0;
    while (num > 0) {
      temp += num % 10;
      num = Math.floor(num / 10);
    }
    num = temp;
  }
  return num;
}
let ans = sum(456);
console.log(ans);
