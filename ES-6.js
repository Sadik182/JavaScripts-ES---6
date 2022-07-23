// 1 Const vs Let 

const name = 'Md. Sadikur Rahman';
let age = 24;

// Object 
const student = {
    name: 'sadik',
    id: 18203084,
    department: 'CSE',
    section: 'B'
}

// 2 Template String 

const temp = `My Name is ${name} I am ${age} Years Old. MY Id is ${student.id} My Section is ${student.section}
`;
console.log(temp);

// 3 Arrow Function with one parameter 

const division = num => num / 5;
console.log('Result is = ', division(100));

// 4 Arrow Function with two parameter 
const add = (num1, num2) => (num1 + 2) * (num2 +2);
console.log(add(8, 8));

// 5 Arrow Function with Three Parameter 

const mul = (num1, num2, num3) => (num1 * num2 * num3);
console.log('Multiplication of this three Number is =', mul(2, 2, 2));