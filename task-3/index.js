//3.Give me only the student name, grade and age from the list


const students = [
    { name: 'Quincy', grade: 96, gendar: 'Female', hasGoodGrade: true, section: 'Science', age: 21 },
    { name: 'Jason', grade: 84, gendar: 'Male', hasGoodGrade: true, section: 'Arts', age: 18 },
    { name: 'Alexis', grade: 100, gendar: 'Female', hasGoodGrade: true, section: 'Science', age: 22 },
    { name: 'Sam', grade: 65, gendar: 'male', hasGoodGrade: false, section: 'Commerce', age: 19 },
    { name: 'Katie', grade: 90, gendar: 'Female', hasGoodGrade: true, section: 'Commerce', age: 17  }
  ];

  const newArr = students.map(student => ({
    name:student.name,
    grade:student.grade,
    age:student.age
  }))
  console.log(newArr)