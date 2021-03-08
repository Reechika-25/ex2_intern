//inline annotations 1
function greetName(firstName, lastName) {
    console.log(firstName);
    console.log(lastName);
}
greetName('Reechika', 'jain');
//inline annotation 2
function greetName1(namepro) {
    console.log(namepro.firstName);
    console.log(namepro.lastName);
}
greetName1({
    firstName: 'Reechika',
    lastName: 'Jain'
});
function greetName2(namePro) {
    console.log(namePro.firstName);
    console.log(namePro.lastName);
}
greetName2({
    firstName: 'ANITA',
    lastName: 'JAIN'
});
