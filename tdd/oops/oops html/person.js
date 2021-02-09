const attributes = require('./person-attributes.js')

class Person{

    constructor(personObj = {}){
        this.id = personObj.id;
        this.name = new attributes.Name(personObj.Name);
        this.address = new attributes.Address(personObj.Address);
        this.age = this.findAgeFromDob(personObj.dob);
    }

    findAgeFromDob(birthDate){
        let age = new Date().getFullYear() - attributes.DateOfBirth.getYearFromShortDate(birthDate);
        return age;
    }
}

exports.Person = Person;