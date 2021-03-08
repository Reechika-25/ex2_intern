

//inline annotations 1
function greetName(firstName : string , lastName : string){
    console.log(firstName);
    console.log(lastName);
}

greetName('Reechika','jain');

//inline annotation 2
function greetName1(namepro : {firstName : string , lastName : string}){
    console.log(namepro.firstName);
    console.log(namepro.lastName);
}

greetName1({
    firstName : 'Reechika',
    lastName : 'Jain'
});


//interfaces in place of inline annotations
interface namePro{
    firstName : string,
    lastName : string
}

function greetName2(namePro : namePro){
    console.log(namePro.firstName);
    console.log(namePro.lastName);
}

greetName2({
    firstName : 'ANITA',
    lastName : 'JAIN'
});
