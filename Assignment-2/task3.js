// 2.3
// . You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.
function findTax(salary) {
    let taxRate;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.20;
            break;
        case (salary > 1500000):
            taxRate = 0.30;
            break;
        default:
            return "Invalid salary";
    }

    const taxAmount = salary * taxRate;
    return `Salary: ₹${salary}, Tax Rate: ${taxRate * 100}%, Tax Amount: ₹${taxAmount}`;
}

 
console.log(findTax(400000)); 
console.log(findTax(2000000)); 
console.log(findTax(-10000)); 
