export class Person{

    constructor(name,address,age){
        this.name = name;
        this.address = address;
        this.age = age;
    }
}


export class PersonCollection{

    constructor(){
        this.personArray = [];
    }

    addPerson (name,address,age){
        this.personArray.push(new Person(name,address,age));
        return '';
    }

    printInfo(){

        let out = [];
        for(let itr = 0;itr<this.personArray.length;itr++)
            out.push({name: this.personArray[itr].name , address : this.personArray[itr].address, age : this.personArray[itr].age});
        return out;
    }
    

}