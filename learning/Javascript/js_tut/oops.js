
//object literal for creating objects : Object.prototype
let obj = {
    name : 'Reechika',
    age : 23,
    printName : function(){
        console.log(obj.name);
    }
}

obj.printName();

//using functions to create objects : this constrcutor overwritten in object.prototype
function generalCar(givenName,givenSpeed){
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running at speed ${this.speed}`);
    }
}

let car1 = new generalCar('maruti',80);
console.log(car1);

let car2 = new generalCar('bmw',180);
console.log(car2);

car1.run();
car2.run();

console.log(car1,car2);

// console.log(car1.getSpeed());
// console.log(car2.getSpeed());
//prototype ka matlab appne kha se start karke us object ko banaya
//prototype is an original model on which something is patterned

//CAUTION : ALWAYS OVERWRITE THE PROTOTYPES OF OBJECTS MADE BY YOU NOT OF INBUILT PROTOTYPES SUCH AS Object
generalCar.prototype.getSpeed = function(){
    return this.speed;
}

console.log(car1.getSpeed());
console.log(car2.getSpeed());

console.log(car1.toString());//to string is a function in object prototype

generalCar.prototype.setSpeed = function(newSpeed){
    this.speed = newSpeed;
}

car1.setSpeed(240);
console.log(car1);
