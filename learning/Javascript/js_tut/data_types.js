//difference between null and undefined : https://www.javatpoint.com/null-vs-undefined

let nullVar = null;
console.log(typeof nullVar);

nullVar = undefined;
console.log(typeof nullVar);

let newVar;
console.log(typeof newVar);

let no = 34.4;
console.log(typeof no);
no = 34
console.log(typeof no);

let arr = [1,2,3,false,"str"];
console.log(typeof arr);

let person = {
    name : "Reechika",
    age : 21,
    'date of birth':'26/08/1998'  // will give error if write date of birth without single quotes for writing without single quotes write dateofbirth without space
}
console.log(person)
console.log(typeof person);

function file(){

}
console.log(typeof file);

let date = new Date();
console.log(typeof date);