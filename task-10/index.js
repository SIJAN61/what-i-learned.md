//10.Find the total grade score and average grade score of the students age above 18

const students = [
    { name: 'Quincy', grade: 96, gendar: 'Female', hasGoodGrade: true, section: 'Science', age: 21 },
    { name: 'Jason', grade: 84, gendar: 'Male', hasGoodGrade: true, section: 'Arts', age: 18 },
    { name: 'Alexis', grade: 100, gendar: 'Female', hasGoodGrade: true, section: 'Science', age: 22 },
    { name: 'Sam', grade: 65, gendar: 'male', hasGoodGrade: false, section: 'Commerce', age: 19 },
    { name: 'Katie', grade: 90, gendar: 'Female', hasGoodGrade: true, section: 'Commerce', age: 17  }
  ];


const ageOfAbove18 = students.filter(student => student.age>18);
console.log(ageOfAbove18)
const totalGrade = ageOfAbove18.reduce((total, student)=>{
  return total + student.grade
}, 0);
console.log(totalGrade)  
const averageGrade = totalGrade/ageOfAbove18.length
console.log(averageGrade)