class StringOp{
    
    static toTitleCase(str){

        if(str.length === 0)
           return str;
        
        str = str.toLowerCase();
        str[0] = str[0] -'a' + 'A';
        return str;
    }
}

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
    }

    printInfo(){

        let out = [];
        for(let itr = 0;itr<this.personArray.length;itr++)
            out.push({name: this.personArray[itr].name , address : this.personArray[itr].address, age : this.personArray[itr].age});
        return out;
    }

    personsBornAFter1990(){

        let out = [];
        for(let itr = 0;itr< this.personArray.length;itr++){
            if(this.personArray[itr].age <= 30)
                out.push(this.personArray[itr]);
        }
        return out;
    }

    personNameStartsWithS(){
        let out = [];
        for(let itr = 0;itr< this.personArray.length;itr++){
            let str = this.personArray.name;
            str = StringOp.toTitleCase(str);
            if(str[0] === 'S')
              out.push(this.personArray[itr]);
        }

        return out;

    }

    personLivingInCityNoida(){

        let out = [];
        for(let itr = 0;itr< this.personArray.length;itr++){
            if(this.personArray[itr].address.contains('Noida'))
                out.push(this.personArray[itr]);
        }
        return out;
    }
    

}