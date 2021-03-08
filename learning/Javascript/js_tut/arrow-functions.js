
function greetNormal(){
    console.log('i have taken work from home today');
}

greetNormal();

const greetLevelUp = function(){
    console.log('i have taken work from hoem today');
}

greetLevelUp();

const greetArrow = ()=>{
    console.log('i have taken work from home today');
}

greetArrow();

//one liners do not require paranthesis in arrow functions
const greetArrowLevelUp = () => console.log('i have taken work from home today');
greetArrowLevelUp();

//do not need to write return when returning something in one liner arrow function
const greetArrowReturn = () => ' i have taken work from home today';
console.log(greetArrowReturn());


//when returning object from one liner arrow function -- put it in paranthesis
const greetObject = () => {name : 'Reechika'};
console.log(greetObject());

const greetObject1 = () => ({name : 'Reechika' });
console.log(greetObject1());


//single argument do not need paranthesis
const greetInput = name => `good morning ${name}`;
console.log(greetInput('anita'));


//put paranthesis for arguments when there are multiple arguments
const greetName = (firstName,lastName) => `good morning ${firstName} ${lastName}`;
console.log(greetName('Anita','Jain'));