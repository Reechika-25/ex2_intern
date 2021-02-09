(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
  {
    "id": "1",
    "dob": "27/12/1981",
    "Name": {
      "firstName": "Sahil",
      "lastName": "Dhawan",
      "middleName": ""
    },
    "Address": {
      "city": "faridabad",
      "state": "haryana",
      "zipCode": "121002",
      "streetAddress1": "1934",
      "streetAddress2": "Sec 28"
    }
  },
  {
    "id": "4",
    "dob": "30/03/1990",
    "Name": {
      "firstName": "Dharmender",
      "lastName": "Kaushik",
      "middleName": ""
    },
    "Address": {
      "city": "ballabgarh",
      "state": "haryana",
      "zipCode": "",
      "streetAddress1": "adarsh nagar gurgaon",
      "streetAddress2": ""
    }
  },
  {
    "id": "6",
    "dob": "01/09/1988",
    "Name": {
      "firstName": "Nikita",
      "lastName": "Bhati",
      "middleName": ""
    },
    "Address": {
      "city": "faridabad",
      "state": "haryana",
      "zipCode": "121001",
      "streetAddress1": "H.No.-1162",
      "streetAddress2": "sector 7C"
    }
  },
  {
    "id": "7",
    "dob": "10/10/1991",
    "Name": {
      "firstName": "Pradeep",
      "lastName": "Maithani",
      "middleName": ""
    },
    "Address": {
      "city": "faridabad",
      "state": "haryana",
      "zipCode": "121004",
      "streetAddress1": "House N0. 2663",
      "streetAddress2": "Housing Bord Noida colony Sector 3 "
    }
  },
  {
    "id": "9",
    "dob": "26/08/1991",
    "Name": {
      "firstName": "Rakesh",
      "lastName": "Kumar",
      "middleName": ""
    },
    "Address": {
      "city": "delhi",
      "state": "delhi",
      "zipCode": "110092",
      "streetAddress1": "HOUSE NO-J/10B",
      "streetAddress2": "SANTHA NIWAS, GALI NO-8, laxmi nagar"
    }
  },
  {
    "id": "10",
    "dob": "08/07/1989",
    "Name": {
      "firstName": "Sudhansu",
      "lastName": "Sekhar",
      "middleName": "Das"
    },
    "Address": {
      "city": "Noida",
      "state": "Uttar pardesh",
      "zipCode": "201303",
      "streetAddress1": "DD-6",
      "streetAddress2": "Gali No-2, Ambedkar Bihar,Sector-37"
    }
  },
  {
    "id": "11",
    "dob": "03/11/1989",
    "Name": {
      "firstName": "Sudhir",
      "lastName": "Nayak",
      "middleName": ""
    },
    "Address": {
      "city": "Noida",
      "state": "Uttar pardesh",
      "zipCode": "",
      "streetAddress1": "1934",
      "streetAddress2": "monu pg"
    }
  },
  {
    "id": "12",
    "dob": "15/02/1982",
    "Name": {
      "firstName": "Tarun",
      "lastName": "Bansal",
      "middleName": ""
    },
    "Address": {
      "city": "Noida",
      "state": "Uttar pardesh",
      "zipCode": "201301",
      "streetAddress1": "Flat # K 1105",
      "streetAddress2": "Prateek Laurel, Sector 120"
    }
  },
  {
    "id": "13",
    "dob": "10/10/1991",
    "Name": {
      "firstName": "Pradeep",
      "lastName": "Maithani",
      "middleName": ""
    },
    "Address": {
      "city": "faridabad",
      "state": "haryana",
      "zipCode": "121004",
      "streetAddress1": "House N0. 2663",
      "streetAddress2": "Housing Bord colony Sector 3"
    }
  },
  {
    "id": "15",
    "dob": "26/08/1995",
    "Name": {
      "firstName": "Rakesh",
      "lastName": "Kumar",
      "middleName": ""
    },
    "Address": {
      "city": "delhi",
      "state": "delhi",
      "zipCode": "110092",
      "streetAddress1": "HOUSE NO-J/10B",
      "streetAddress2": "SANTHA NIWAS, GALI NO-8, laxmi nagar"
    }
  },
  {
    "id": "16",
    "dob": "08/07/1989",
    "Name": {
      "firstName": "Sudhansu",
      "lastName": "Sekhar",
      "middleName": "Das"
    },
    "Address": {
      "city": "Noida",
      "state": "Uttar pardesh",
      "zipCode": "201303",
      "streetAddress1": "DD-6",
      "streetAddress2": "Gali No-2, Ambedkar Bihar,Sector-37"
    }
  },
  {
    "id": "17",
    "dob": "03/11/1989",
    "Name": {
      "firstName": "sudhir",
      "lastName": "sharma",
      "middleName": ""
    },
    "Address": {
      "city": "Noida",
      "state": "Uttar pardesh",
      "zipCode": "",
      "streetAddress1": "1856",
      "streetAddress2": "monu pg"
    }
  },
  {
    "id": "18",
    "dob": "15/02/1982",
    "Name": {
      "firstName": "Tarun",
      "lastName": "Bansal",
      "middleName": ""
    },
    "Address": {
      "city": "Gurgaon",
      "state": "Haryana",
      "zipCode": "121002",
      "streetAddress1": "Flat # K 1105",
      "streetAddress2": "Main Street, Sector 28"
    }
  }
]

},{}],2:[function(require,module,exports){
const people = require('./people.js');
const dataFile = require('./data.json');

class ReadFile{

    constructor(filePath){
        this.filePath = filePath;
        this.data = '';
        this.peopleInstance={};
    }

    storeAndPrintFile(){
        this.data = dataFile;
    
    }

    printFile(){
         this.peopleInstance = new people.People();
        for(let itr = 0; itr < this.data.length ; itr ++){
            this.peopleInstance.addNewPerson(this.data[itr]);
        }
        this.peopleInstance.sortArrayInfo();
        this.peopleInstance.printInfoOfPerson(this.peopleInstance.personArray);
    }

    filterCity(city){

        let cityArray = this.peopleInstance.personLivingInNoida(city);
    
        this.peopleInstance.printInfoOfPerson(cityArray);

     }

}

const value = document.getElementById('filterCity');
const more = document.getElementById('printAll');
value.addEventListener('click',callCity);
more.addEventListener('click',loadPerson);

function callCity(){
    let city = document.getElementById('city').value;
    fileInstance.filterCity(city);
}

let count = 0;
let prevCityValue = '';
function loadPerson(){
       let cityValue = document.getElementById('city').value;
       if(prevCityValue !== cityValue){
           prevCityValue = cityValue;
           count = 0;
       }
       count += 1;
       let endIdx = 5 * (count + 1);
       if(cityValue === "defaultCity"){
         fileInstance.peopleInstance.printInfoOfPerson(fileInstance.peopleInstance.personArray,endIdx);
         return;
       }
       let cityArray = fileInstance.peopleInstance.personLivingInNoida(cityValue);
       fileInstance.peopleInstance.printInfoOfPerson(cityArray,endIdx);
       return;
}


var fileInstance = new ReadFile('data.json');
fileInstance.storeAndPrintFile();
fileInstance.printFile();
console.log(document.getElementById('city').value);


},{"./data.json":1,"./people.js":3}],3:[function(require,module,exports){
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
            //info += 'Age : ' + String(personObj.age) + '<br>';
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
}

exports.People = People;
},{"./person.js":5}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
}

exports.Person = Person;
},{"./person-attributes.js":4}]},{},[2]);
