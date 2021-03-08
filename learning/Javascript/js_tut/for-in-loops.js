//iterating an array through traditional for loop
let arr = ['Reechika','Sanjay','Anita','Deepanshu'];
for(let idx = 0 ; idx < arr.length ; idx ++){
    console.log(arr[idx]);
}

//iterating an array through for in loop
for(let key in arr){
    console.log(arr[key]);
}

//iterating obj thrigh for of loop
for(let key of arr){
    console.log(key);
}


//iterating an object through traditional for loop
let obj ={
    name : 'Reechika',
    age : 25,
    'date of birth' : '26/08/1998'
}

for(let idx = 0; idx < Object.keys(obj).length; idx ++){
    console.log(obj[Object.keys(obj)[idx]]);
}

//iterating an object through for in loop
for(let key in obj){
    console.log(obj[key]);
}

//iterating an object through for of loop --- can not use for of loop on an obj
/*for(let key of obj){
    console.log(key);
}*/

//iterating a string through for in loop
let str = 'Reechika is the best in the world';

for(let idx = 0; idx < str.length; idx ++){
    console.log(str[idx]);
}

for(let key in str){
    console.log(str[key]);
}

for(let key of str){
    console.log(key);
}


let el = document.getElementsByTagName('div');
for(let key of el){
    console.log(key);
}


