(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const people = require('./people.js');

class ReadFile{

    constructor(filePath){
        this.filePath = filePath;
        this.data = '';
    }

    async storeAndPrintFile(){
        let response = await fetch(this.filePath);
        this.data = await response.json();
        await this.printFile();
    }

    printFile(){
        let peopleInstance = new people.People();
        for(let itr = 0; itr < this.data.length ; itr ++){
            peopleInstance.addNewPerson(this.data[itr]);
        }
        peopleInstance.sortArrayInfo();
        peopleInstance.printInfoOfPerson(peopleInstance.personArray);
    }

}

let fileInstance = new ReadFile('./data.json');
fileInstance.storeAndPrintFile();
},{"./people.js":2}],2:[function(require,module,exports){
const person = require('./person.js');

class People{

    constructor(){
        this.personArray = [];
    }

    addNewPerson(personObj){
        return this.personArray.push(new person.Person(personObj));
    }

    printInfoOfPerson(personArray = []){
        let info = '';
        for(let itr = 0; itr < personArray.length ; itr ++){
            let personObj = personArray[itr];
            info += '<h3>' + 'Person ' + String(itr + 1) + '</h3>';
            info += 'Name : ' + String(personObj.name.firstName) + ' ' + String(personObj.name.middleName) + ' ' +String(personObj.name.lastName) + '<br>';
            info += 'Age : ' + String(personObj.age) + '<br>';
            info += 'Address : ' + String(personObj.address.streetAddress1) + ' ' + String(personObj.address.streetAddress2)
                     + ' ' + String(personObj.address.city) + ' ' + String(personObj.address.state) + ' ' + String(personObj.address.zipCode) + '<br><br>';
        }
        document.write(info);
        return '';
    }

    personBornAfter1990(){
        return this.personArray.filter(personObj =>(personObj.age <= new Date().getFullYear() - 1990));
    }

    personFirstNameStartsWithS(){
        return this.personArray.filter(personObj => (personObj.name.firstName.toLowerCase.charAt(0)) === 's');
    }

    personLivingInNoida(){
        return this.personArray.filter(personObj => (personObj.address.city.toLowerCase() === 'noida'));
    }

    sortArrayInfo(){
        return this.personArray = this.personArray.sort((person1,person2) => {
            let firstName1 = person1.name.firstName.toLowerCase();
            let firstName2 = person2.name.firstName.toLowerCase();
            let city1 = person1.address.city.toLowerCase();
            let city2 = person2.address.city.toLowerCase();
            if(firstName1 !== firstName2)
               return (firstName1 > firstName2)?1:-1;
            return (city1 > city2)?1:-1;
        });
    }
}

exports.People = People;
},{"./person.js":4}],3:[function(require,module,exports){
class Name{

    constructor(nameObj = {}){
        this.firstName = nameObj.firstName;
        this.lastName = nameObj.lastName;
        this.middleName = nameObj.middleName;
    }
}

class Address{

    constructor(addressObj = {}){
        this.streetAddress1 = addressObj.streetAddress1;
        this.streetAddress2 = addressObj.streetAddress2;
        this.city = addressObj.city;
        this.state = addressObj.state;
        this.zipCode = addressObj.zipCode;
    }
}

class DateOfBirth{

    static getYearFromShortDate(birthDate = ''){
        let birthArray = birthDate.split('/');
        return birthArray[2];
    }
}

exports.Name = Name;
exports.Address = Address;
exports.DateOfBirth = DateOfBirth;
},{}],4:[function(require,module,exports){
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
},{"./person-attributes.js":3}]},{},[1]);
