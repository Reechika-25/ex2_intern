

//checking whether a variable exists in the file or not
if(typeof variable !== 'undefined'){
    console.log('var is defined');
}else{
    console.log('var is undefined');
}

//whether the comparison operators does type checking or typevalue checking -- they do value checking
const age = 18;
const isDrive = true;

if(isDrive && age >= '18'){
    console.log('the person can drive safely');
}else{
    console.log('the person can not drive');
}

//--see comparing different types https://www.w3schools.com/js/js_comparisons.asp