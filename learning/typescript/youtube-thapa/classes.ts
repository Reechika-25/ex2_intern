

class Intern{

    constructor(private firstName : string, private lastName : string,private age : number){

    }

    getFirstName() : string{

        return this.firstName;

    }

    getLastName() : string{

        return this.lastName;

    }
}

let Reechika = new Intern('Reechika','jain',25);
console.log(Reechika.getFirstName());
console.log(Reechika.getLastName());