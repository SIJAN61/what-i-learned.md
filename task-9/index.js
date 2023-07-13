//9.Give me only the student name, grade and age from the list and organise the list based on name alphabetically (A-Z)

const students = [
    { name: 'Quincy', grade: 96, gendar: 'Female', hasGoodGrade: true, section: 'Science', age: 21 },
    { name: 'Jason', grade: 84, gendar: 'Male', hasGoodGrade: true, section: 'Arts', age: 18 },
    { name: 'Alexis', grade: 100, gendar: 'Female', hasGoodGrade: true, section: 'Science', age: 22 },
    { name: 'Sam', grade: 65, gendar: 'male', hasGoodGrade: false, section: 'Commerce', age: 19 },
    { name: 'Katie', grade: 90, gendar: 'Female', hasGoodGrade: true, section: 'Commerce', age: 17  }
  ];

  const orgaNize = students.map((student) => {
    return{
      name:student.name,
      grade:student.grade,
      age:student.age,
    }
  })
  
  const sortAtoZ = orgaNize.sort((a,b)=>{
    if (a.name<b.name){
      return -1
    }
    if  (a.name>b.name){
      return 1
    }
    else{
      return 0
    }
  })
  console.log(sortAtoZ)