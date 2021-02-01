import {PersonData} from "./person3"

describe("Testing PersonData functionality",()=>{

    it("Does person data class exists?",()=>{

        let personDataInstance = new PersonData();
        expect(personDataInstance).toBeDefined();
        expect(personDataInstance.personData).toBeDefined();
        expect(personDataInstance.updateHTMLContent()).toBeDefined();

    });
});