
//var , let and const are the keywords
/*  var has global scope and can take any value
    let has block scope and can take any value
    const is used to initialise variables which should
    not be modified inside the whole document*/

//NOTE -- THE FILE WILL NOT RUN PARTIALLY WHOLE FILE SHOULD BE ERROR FREE TO RUN

//1.printing strings through INITIALISATION
var first_name = "Reechika"
var last_name  = 'Jain';
var mother = `"Anita" 'Jain'` //benefit of backtick `
console.log(first_name,last_name,mother)

//2.printing uninitialised var
var channel   //DECLARATION
console.log(channel) //this will print undefined 
channel = 'business' //ASSIGNING
console.log(channel);

//3.incorrect initialisation
//var marks = 567rhgs //this will throw error INVALID OR UNEXPECTED TOKEN

//4.printing integers
var age = 45
console.log(age);

/* rules for creating javascript variables
   -- cannot start with numbers
   -- can start with numbers , letter and _ and $
   -- are case sensitive 
   
   NOTE : 1. its better not to start variables with _ or $ as
             underscore is used for declaring private variables
             in object oriented javascript and $ is used in jquery 
             frameworks*/


 /* rules for const variables
    -- always initialise them
    -- never aasign them */
const computer = 'dell';
console.log(computer);


{//first a variable is checked at local then next local and so on till global
    let age = 23;
    console.log(age);
    age = 25
    console.log(age);
}

console.log(age);

//const arr and obj -- these can not be assigned again but elements can be pushed into them
const arr = [1,45,78];
arr.push(26);       //valid
//arr = [1,45,78]  //invalid
console.log(arr);


/*four tyoes of cases used in javascript
  -- camelCase
  -- kebab-case
  -- snake_case
  -- PascalCase  */

  console.clear();






