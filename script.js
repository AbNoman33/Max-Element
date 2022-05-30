let student = [
    {name: 'Karim', age : 7, Gender: 'Male'},
    {name: 'Rahim', age : 8, Gender: 'Male'},
    {name: 'Shimu', age : 5, Gender: 'Female'},
    {name: 'Sonia', age : 13, Gender: 'Female'},
    {name: 'Tamim', age : 11, Gender: 'Male'},
];

let max_age = student[0];

 for (let eachstudent  of student) {

     if(eachstudent.age< max_age.age) {
         max_age = eachstudent;
         
    }
   
 }

console.log(max_age);