
const students = [
    {name : 'Reechika',subject : 'python'},
    {name : 'anita', subject : 'machine learning'}
]


function enrollStudent1(student){

    setTimeout(() => {
       students.push(student);
    },1000);

}


function getStudents1(){
    setTimeout(() => {
        
        let studentInfo = '';
        students.forEach(element =>{
           
            studentInfo += `<ul><li>${element.name}</li><li>${element.subject}</li></ul>`
        });

        document.getElementById('heading').innerHTML += studentInfo;
    },3000);
}

let newStudent = {name : 'santosh', subject :'human behaviour'};
enrollStudent1(newStudent);
getStudents1();


function enrollStudent2(student){

    setTimeout(() => {
       students.push(student);
    },8000);

}


function getStudents2(){
    setTimeout(() => {
        
        let studentInfo = '';
        students.forEach(element =>{
           
            studentInfo += `<ul><li>${element.name}</li><li>${element.subject}</li></ul>`
        });

        document.getElementById('heading').innerHTML += studentInfo;
    },5000);
}

newStudent = {name : 'sanjay', subject :'science'};
enrollStudent2(newStudent);
getStudents2();

//using callback to make sure that getstudents3 is called after enrollstudents3 irrespective of the timeout time
function enrollStudent3(student,callback){

    setTimeout(() => {
       students.push(student);
       callback();
    },8000);

}


function getStudents3(){
    setTimeout(() => {
        
        let studentInfo = '';
        students.forEach(element =>{
           
            studentInfo += `<ul><li>${element.name}</li><li>${element.subject}</li></ul>`
        });

        document.getElementById('heading').innerHTML += studentInfo;
    },5000);
}

newStudent = {name :'kiran', subject : 'javascript'};
enrollStudent3(newStudent,getStudents3);

