// 1. Scope differences with let, const, and var
function testScope() {
  if (true) {
    var x = 10;        // function-scoped
    let y = 20;        // block-scoped
    const z = 30;      // block-scoped

    console.log('Inside block:');
    console.log('var x =', x);  // 10
    console.log('let y =', y);  // 20
    console.log('const z =', z); // 30
  }
  console.log('Outside block:');
  console.log('var x =', x);  // ✅ Accessible (var is function-scoped) 
//   console.log('let y =', y);  ❌ ReferenceError because let is block scoped
//   console.log('const z =', z);   ❌ ReferenceError because const is block scoped 
  
}
testScope();
/* Summary:
 var: Visible outside the block but inside the function.
 let and const: Only visible inside the block.
 const cannot be reassigned, while let can.
  */



// 2- Return second fruit from array
const fruits = ["Apple","Mango","Lichi","Grapes","Banana"];
function secondFruit(fruits){
    return fruits[1];
}
console.log("Second fruit :",secondFruit(fruits));



// 3. Modify array with push() and pop()
const arr=[1,2,3,4,5,6];
function modifyArray(arr){
  arr.push(7);
  arr.push(8);
  arr.pop();
  return arr;
}
console.log("Modify array :",modifyArray(arr));



// 4. Use map() to square numbers
const numbers =[ 2,3,4,5,6];
function squareNumber(num){
  return num.map((n)=> n*n);
}
console.log( "Squared number array :",squareNumber(numbers));



//  5. Filter out even numbers
const array= [1,2,3,4,5,6,7,8,9,10];
function oddNumber(nums){
  return  nums.filter((num)=> num % 2 !== 0);
}
console.log("Odd number array: ", oddNumber(array));



// 6. Object and greeting function
 const person ={
    name:"Chandan",
    age:"20",
    occupation:"full stack developer"
 }
 function greetPerson(per){
   console.log(`Hello, my name is ${per.name}, I am ${per.age} years old and I am working as a ${per.occupation}.`);
 }
 greetPerson(person);


 // 7. Area of rectangle from object
 function rectangleArea(rect){
    return rect.width * rect.height;
 }
 console.log("Rectangle area : ",rectangleArea({width:5,height:10}));
 


 // 8. Get object keys
 function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log("Object Keys :", getObjectKeys({ name: "chandan", age: 20, weight: "70kg" }));



// 9. Merge two objects
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}
console.log("Merged object is :", mergeObjects({ name: "chandan" }, { age: 20 }));



// 10. Sum using reduce
const number=[5,10,15,20,25];

function sumArray(nums){
 return nums.reduce((sum,num) => (sum+num),0);
}
console.log(sumArray(number));
