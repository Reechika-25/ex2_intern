//types of errors -- syntax errors, runtime errors and logical errors

//Error Types :
//1.reference error -- ex - function is not defined
//2.type error      -- ex - cannot read property console of null
//3.range error     -- ex - when a variable is outside its range
//4.internal error  --  error in js engine ex - too much recursion
//5.syntax error    --  ex - uncaught or expected token

//1.throwing an error
 let a = 'Reechika';
//the execution of the program stops when error thrown
// if(a !== undefined){
//     throw new Error('a should be undefined');
// }else{
//     console.log('a is undefined');
// }


//2.try catch finally -- the execution of the program does not stop even when error occurred
try{
   if(a !== undefined){
        throw new Error('a should be undefined');
   }
}catch(error){
   console.log(error);//error will be rpinted as text
   console.log(error.name);
   console.log(error.message);
}finally{
    console.log('we have finally completed error handling');
}

console.log(a);