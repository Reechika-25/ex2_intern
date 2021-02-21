import {Roman} from "./romanNumerals"

describe("Testing Roman Functionality",()=>{

    it("Does Roman class exists?",()=>{
        let romanInstance = new Roman();
        expect(romanInstance).toBeDefined();
    });


    it("Does constructor initialises the map?",()=>{
        let romanInstance = new Roman();
        expect(romanInstance.romanMap).toBeDefined();
    });

    it("Does convert function returns correct output for a roman number of length 1",()=>{

        const roman = 'L';

        let romanInstance = new Roman();
        expect(romanInstance.convertRomanToInteger(roman)).toBe(50);
    });

    it("Does convert function returns correct output for roman numerals following additive approach?",()=>{

        const roman = 'MMVI';

        let romanInstance = new Roman();
        expect(romanInstance.convertRomanToInteger(roman)).toBe(2006);

    });

    it("Does convert function returns correct output for roman numbers following subtractive approach?",()=>{

        const roman = 'XL';

        let romanInstance = new Roman();
        expect(romanInstance.convertRomanToInteger(roman)).toBe(40);
    });

    it("Does convert function returns correct output for roman numbers following both +ve and subtractive approach?",()=>{
       
        const roman = 'MCMXLIV';

        let romanInstance = new Roman();
        expect(romanInstance.convertRomanToInteger(roman)).toBe(1944);
    });


});