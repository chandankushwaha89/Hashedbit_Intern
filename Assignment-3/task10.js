// 3.10- Reverse a string
let str = "hello";
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
let ans = reverseString(str);
console.log(ans);
