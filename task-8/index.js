//8. Give me only the student name, grade and age from the list and organise the list based on age from oldest to youngest

const students = [
    { name: 'Quincy', grade: 96, gendar: 'Female', hasGoodGrade: true, section: 'Science', age: 21 },
    { name: 'Jason', grade: 84, gendar: 'Male', hasGoodGrade: true, section: 'Arts', age: 18 },
    { name: 'Alexis', grade: 100, gendar: 'Female', hasGoodGrade: true, section: 'Science', age: 22 },
    { name: 'Sam', grade: 65, gendar: 'male', hasGoodGrade: false, section: 'Commerce', age: 19 },
    { name: 'Katie', grade: 90, gendar: 'Female', hasGoodGrade: true, section: 'Commerce', age: 17  }
  ];


  const oldestToyoungest = students.map((student)=>{
return {
  name:student.name,
  grade:student.grade,
  age:student.age,
}
  })
  console.log(oldestToyoungest)

  const sortAge = oldestToyoungest.sort((a,b)=>{
    return b.age-a.age
  })
  console.log(sortAge)