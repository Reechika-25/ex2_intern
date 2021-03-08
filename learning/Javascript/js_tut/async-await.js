console.log("This is tutorial 43");


//async function returns a promise

//await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.
/*IMPORTANT THINGS ABOUT AWAIT :
  1. the function should be async to use await
  2. await only blocks the execution of the further lines of code in the async function in which it is present
     it does not block the execution of any other function if running parallely.
  3. the further lines of code in that function will only be executed when promise is either resolved or rejected*/
  
async function harry(){
    console.log('Inside harry function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;
}

console.log("Before calling harry")
let a = harry();
console.log("After calling harry")
console.log(a);
a.then(data => console.log(data))
console.log("Last line of this js file")