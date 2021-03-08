class human{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    printHuman(){

        console.log(`the name of the human is ${this.name} and the age of the human is ${this.age}`);

    }
}

class parent extends human{

    constructor(name,age,babies){
        super(name,age);
        this.babies = babies;

    }

    printBabies(){
        console.log(`the parent has ${this.babies} babies`);
    }

    printHuman(){
        console.log(`the name is ${this.name} and the age is ${this.age} and the number of babies are ${this.babies}`)
    }

    getBabies(){
        return this.babies;
    }
}

let newParent = new parent('arpit',32,1);
console.log(newParent);
console.log(newParent.getBabies());
console.log(newParent.printHuman());