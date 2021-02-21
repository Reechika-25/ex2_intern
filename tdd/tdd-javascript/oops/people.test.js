import {People} from "./people.js"

describe("Testing People Functionality",()=>{

    it("Does people class exists",()=>{

        let peopleInstance = new People();
        expect(peopleInstance).toBeDefined();
        expect(peopleInstance.personArray).toBeDefined();
    });

    it("Does people class have the required functions ?",()=>{

        let peopleInstance = new People();
        expect(peopleInstance.personBornAfter1990()).toBeDefined();
        expect(peopleInstance.personFirstNameStartsWithS()).toBeDefined();
        expect(peopleInstance.personLivingInNoida()).toBeDefined();
        expect(peopleInstance.printInfoOfPerson()).toBeDefined();
        expect(peopleInstance.sortArrayInfo()).toBeDefined();
        expect(peopleInstance.addNewPerson()).toBeDefined();
    });

    
});