console.time('your code took')
/* if i write directly the below line in chrome console
   then it will also print undefined . undefined means 
   console .log has not returned anything */
console.log('hi i am Reechika')

//we can use google chrome console as a calculator
/* whenever we reload the chrome page 
   without updating this file
   only the statements written directly in the
   chrome console will vanish*/

console.log(4+34);
console.log(38);
console.log([34,1,2,3]);

//to print an object simply and in the form of table
console.log({height:'5 feet' , age : 21})
console.table({height:'5 feet' , age : 21})


console.warn('this is a warning');
console.error('this is an error');

//the message for assert is printed only when the condition is false
console.assert(5<4,'true: 5 is greater than 4')

/* do not clear the console before
   finding time else it will throw an error */

// shortcut for a single line comment -- ctrl + /
console.timeEnd('your code took')
console.clear();