const student = {
    name: 'Md. Sadikur Rahman',
    id: 18203084,
    department: 'CSE',
    section:{s1: 'A', s2: 'B', s3: 'C', s4: 'D'},
}

const {name, id} = student;
console.log(name, id, section);
// const {name, id, s1} = student.section;
// console.log(name, id, s1);

const numbers = [2, 4, 5, 6, 7, 8, 20];
const [a, b, three] = numbers;
console.log(three);