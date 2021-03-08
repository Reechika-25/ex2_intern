//1.when the function does not return anything
function greet(name,msg = 'thanks a lot'){

    console.log(`happy birthday ${name}.${msg} for the gift`);
}

let val = greet('Reechika','thanky you');
console.log(val);

//2.when the function passes less number of arguments than required while calling 
val = greet('Reechika');//the function will print undefined in place of msg 
//LEARNING -- always give default arguments to the function


const mygreet = function(name,msg = 'thank you'){
    console.log(`happy birthday ${name}.${msg} for the gift`);
}

val = mygreet('Reechika','thank you');
console.log(val);

val = mygreet('Reechika')


const myObj ={

    name : "Reechika",
    greet : function(name,msg = 'thanks a lot'){

        console.log(`happy birthday ${name}.${msg} for the gift`);

    }
};

console.log(myObj['greet']);
console.log(myObj.greet);
console.log(myObj['greet()']);
console.log(myObj.greet());
console.log(myObj.greet('Reechika','thanku'));
console.log(myObj.greet('Reechika'));


//scope

//--in this if u replace var by let it will work the same way
var i = 234;

console.log(i);

function scope(){

    var i = 9;
    console.log(i);
}

scope();


//--in this if u replace var by let it will not work the same way 
{ 
    var j = 234;
}

console.log(j);//when using let it will show error at this line saying that identifier j is not defined

function scope1(){

    var j = 9;
    console.log(j);
}

scope1();




