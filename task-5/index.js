//5.Add a new property isGpaPlus in the given list who got more than 80 in grade and print out the list with new property.
const students = [
    { name: 'Quincy', grade: 96, gendar: 'Female', hasGoodGrade: true, section: 'Science', age: 21 },
    { name: 'Jason', grade: 84, gendar: 'Male', hasGoodGrade: true, section: 'Arts', age: 18 },
    { name: 'Alexis', grade: 100, gendar: 'Female', hasGoodGrade: true, section: 'Science', age: 22 },
    { name: 'Sam', grade: 65, gendar: 'male', hasGoodGrade: false, section: 'Commerce', age: 19 },
    { name: 'Katie', grade: 90, gendar: 'Female', hasGoodGrade: true, section: 'Commerce', age: 17  }
  ];



  const newProperty = students.filter(student=>{
    return  student.grade>=80;
    })
   
    newProperty.forEach(student => {
        student.isGpaPlus = "true";
    })

     console.log(newProperty)

    