// 3.7- Calculate average score of each student using map and reduce
const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];

const result = students.map((student)=>{
   const total = student.scores.reduce((sum,score)=>sum+score,0);
   const avg = total/student.scores.length;
   return {
    name: student.name,
    average : avg
   }
});
console.log(result);
