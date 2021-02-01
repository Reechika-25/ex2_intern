import {Person} from "./person.js"

describe("Testing Person functionality",()=>{

    it("does person class exists",()=>{

        let personInstance = new Person();
        expect(personInstance).toBeDefined();
    });

    it("does name address age initialised in constructor",()=>{

        const name = "Reechika";
        const address = "110A/6,Faridabad"
        const age = 21;

        let personInstance = new Person(name,address,age);
        expect(personInstance.name).toBeDefined();
        expect(personInstance.address).toBeDefined();
        expect(personInstance.age).toBeDefined();
    });


});