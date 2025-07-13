// 3.11- Calculate average marks for each student from object of objects
let students = {
    student1: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    },
    student2: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    },
    student3: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  };

// map over the array and extract averages
let result = {};
for (let student in students) {
  let scores = Object.values(students[student]);
  let avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  result[student] = { average: avg };
}
console.log(result);