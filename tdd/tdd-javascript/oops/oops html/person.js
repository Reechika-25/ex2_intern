const attributes = require('./person-attributes.js')

class Person{

    constructor(personObj = {}){
        this.name = new attributes.Name(personObj.Name);
        this.address = new attributes.Address(personObj.Address);
        this.age = this.findAgeFromDob(personObj.dob);
    }

    findAgeFromDob(birthDate){
        let age = new Date().getFullYear() - attributes.DateOfBirth.getYearFromShortDate(birthDate);
        return age;
    }

    static convertToString(personObj){
        let info = '';
        info += 'Name : ' + String(personObj.name.firstName) + ' ' + String(personObj.name.middleName) + ' ' +String(personObj.name.lastName) + '<br>';
        info += 'Age : ' + String(personObj.age) + '<br>';
        info += 'Address : ' + String(personObj.address.streetAddress1) + ' ' + String(personObj.address.streetAddress2)
                 + ' ' + String(personObj.address.city) + ' ' + String(personObj.address.state) + ' ' + String(personObj.address.zipCode) + '<br><br>';
        return info;
    }
}

exports.Person = Person;