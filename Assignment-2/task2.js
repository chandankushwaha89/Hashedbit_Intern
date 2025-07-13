// 2.2
// Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
function calculate(n1, n2, op) {
    switch(op) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
              if (n2 !== 0) {
             return n1 / n2;
              } 
              else {
               return "Error-Cannot divide by zero";
              }
        default:
            return "Enter a valid operation (+, -, *, /)";
    }
}

console.log("Addition       :", calculate(5, 2, '+'));   
console.log("Subtraction    :", calculate(5, 2, '-'));   
console.log("Multiplication :", calculate(5, 2, '*'));   
console.log("Division       :", calculate(5, 2, '/'));    
