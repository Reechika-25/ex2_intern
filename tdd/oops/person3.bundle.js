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


class PersonData{

    constructor(){
      this.personData = require('./data.json');
    }


    updateHTMLContent(){

        this.personData = this.personData.sort((person1,person2) => {
            if (
                person1.Name.firstName.toLowerCase() >
                person2.Name.firstName.toLowerCase()
              ) {
                return 1;
              } else if (
                person1.Name.firstName.toLowerCase() <
                person2.Name.firstName.toLowerCase()
              ) {
                return -1;
              } else {
                if (
                  person1.Address.city.toLowerCase() >
                  person2.Address.city.toLowerCase()
                ) {
                  return 1;
                } else {
                  return -1;
                }
              }
        
        });

        return '';
     }

    displayResult(){

      let items='';
      this.personData.forEach((element)=>
       {
           items+=JSON.stringify(element)+'<br>'
       })
      document.write(items)
    }


}


let personDataInstance = new PersonData();
personDataInstance.updateHTMLContent();
personDataInstance.displayResult();
exports.PersonData = PersonData;









},{"./data.json":1}]},{},[2]);
