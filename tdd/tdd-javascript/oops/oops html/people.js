const person = require('./person.js');

class People{

    constructor(){
        this.personArray = [];
    }

    addNewPerson(personObj){
        return this.personArray.push(new person.Person(personObj));
    }

    printInfoOfPerson(personArray,endIdx = 5){
        let info = '';
        for(let itr = 0; itr < endIdx && itr < personArray.length; itr ++){
            let personObj = personArray[itr];
            info += '<h3>' + 'Person ' + String(itr + 1) + '</h3>';
            info += 'Name : ' + String(personObj.name.firstName) + ' ' + String(personObj.name.middleName) + ' ' +String(personObj.name.lastName) + '<br>';
            info += 'Age : ' + String(personObj.age) + '<br>';
            info += 'Address : ' + String(personObj.address.streetAddress1) + ' ' + String(personObj.address.streetAddress2)
                     + ' ' + String(personObj.address.city) + ' ' + String(personObj.address.state) + ' ' + String(personObj.address.zipCode) + '<br><br>';
        }
        document.getElementById('content').innerHTML = info;
        return '';
    }

    personBornAfter1990(){
        return this.personArray.filter(personObj =>(personObj.age <= new Date().getFullYear() - 1990));
    }

    personFirstNameStartsWithS(){
        return this.personArray.filter(personObj => (personObj.name.firstName.toLowerCase.charAt(0)) === 's');
    }

    personLivingInNoida(city){
        return this.personArray.filter(personObj => (personObj.address.city.toLowerCase() === city.toLowerCase()));
    }

    sortArrayInfo(){
        return this.personArray = this.personArray.sort((person1,person2) => {
            let firstName1 = person1.name.firstName.toLowerCase();
            let firstName2 = person2.name.firstName.toLowerCase();
            let lastName1 = person1.name.lastName.toLowerCase();
            let lastName2 = person2.name.lastName.toLowerCase();
            let city1 = person1.address.city.toLowerCase();
            let city2 = person2.address.city.toLowerCase();
            let zipCode1 = person1.address.zipCode;
            let zipCode2 = person2.address.zipCode;
            if(firstName1 !== firstName2)
               return (firstName1 > firstName2)?1:-1;
            if(lastName1 !== lastName2)
               return (lastName1 > lastName2)?1:-1;
            if(city1 !== city2)
               return (city1>city2)?1:-1;
            return (zipCode1 > zipCode2)?1:-1;
        });
    }

    removeDuplicates(personArray){
        let uniquePersonMap = new Map();
        let uniqueArray = [];
        for(let itr = 0;itr < personArray.length; itr ++){
            let personStr = person.Person.convertToString(personArray[itr]);
            if(!uniquePersonMap.has(personStr)){
                uniquePersonMap.set(personStr,true);
                uniqueArray.push(personArray[itr]);
            }
        }
        return uniqueArray;
    }
}

exports.People = People;