import {Person} from "./person.js"

describe("Testing Person class Functionality",()=>{

    it("Does person class exists",()=>{

        let personInstance = new Person();
        expect(personInstance).toBeDefined();
    });

    it("Does person class have data members name , address and age",()=>{
       
        let personInstance = new Person();
        expect(personInstance.name).toBeDefined();
        expect(personInstance.address).toBeDefined();
        expect(personInstance.age).toBeDefined();
    });

    it("Does person class stores data members name , address and age of a person correctly",()=>{

        const person = {
            "id": "1",
            "dob": "25/08/1998",
            "Name": {
              "firstName": "Reechika",
              "lastName": "Jain",
              "middleName": ""
            },
            "Address": {
              "city": "faridabad",
              "state": "haryana",
              "zipCode": "121004",
              "streetAddress1": "110A/6",
              "streetAddress2": "Brahmana Wara"
            }
        }

        let personInstance = new Person(person);
        expect(personInstance.name).toEqual( {
            "firstName": "Reechika",
            "lastName": "Jain",
            "middleName": ""
          });
        expect(personInstance.address).toEqual( {
            "city": "faridabad",
            "state": "haryana",
            "zipCode": "121004",
            "streetAddress1": "110A/6",
            "streetAddress2": "Brahmana Wara"
        });
        expect(personInstance.age).toEqual(23);
    });
});