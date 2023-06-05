let students=["Elen","Sam","Piolo","Dingdong","Pia","Barbie","Jessie","Luis","Robi","Marian"];

//loop
for(let i=0;i<students.length;i++){
    console.log(students[i]);
}

for(let i in students){
    console.log(students[i]);
}

//remove
console.log(students);
students.splice(8,1);
console.log(students);

//indexOf
console.log(students);
students.indexOf("Pia");
console.log(students);

//Add a new student
console.log(students);
students.push("Fey");
console.log(students)

//return girls 
const girls=["Elen","Pia","Barbie","Jessie","Marian"]
const boys=["Sam","Piolo","Dingdong","Luis","Robi"]

const student=girls.concat(boys)
console.log(student)