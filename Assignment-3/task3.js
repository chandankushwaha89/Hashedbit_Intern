// 3.3  let string = 'INDIA' => output = 'INDONESIA' using array.splice
let string = "INDIA";
// Convert string to array
let array = string.split("");  // ['I', 'N', 'D', 'I', 'A']
array.splice(3, 0, "O", "N", "E", "S"); // Use splice to insert "O", "N", "E", "S" at index 3
// Join the array back to a string
let result = array.join(""); 
console.log(result); // Output: "INDONESIA"
