
import {Multiple} from "./multiplesRequirement2.js"

describe("Testing Multiple functionality",()=>{

    it("does Multiple class exists?",()=>{

        let mulInstance = new Multiple();
        expect(mulInstance).toBeDefined();
    });

    it("does isBuzz function exists which prints the number from 1 to 100",()=>{

        let mulInstance = new Multiple();
        expect(mulInstance.isBuzz()).toBeDefined();
    });

    it("does isBuzz function returns an array?",()=>{

        let mulInstance = new Multiple();
        expect(typeof mulInstance.isBuzz()).toBe('object');

    });

    it("does print function exists?",()=>{

        let mulInstance = new Multiple();
        expect(mulInstance.checkFizzBuzz()).toBeDefined();
    });

    it("does print function returns null for non number type",()=>{

        const number = 'reechika';

        let mulInstance = new Multiple();
        expect(mulInstance.checkFizzBuzz(number)).toBe('null');
    });

    it("does print function returns FizzBuzz for number which is a multiple of 3 and 5",()=>{

        const number = 15;

        let mulInstance = new Multiple();
        expect(mulInstance.checkFizzBuzz(number)).toBe("FizzBuzz");
    });

    it("does print function returns Fizz for number which is a multiple of 3 only",()=>{

        const number = 9;

        let mulInstance = new Multiple();
        expect(mulInstance.checkFizzBuzz(number)).toBe("Fizz");
    });

    it("does print function returns Buzz for number which is a multiple of 5 only",()=>{

        const number = 20;

        let mulInstance = new Multiple();
        expect(mulInstance.checkFizzBuzz(number)).toBe("Buzz");
    });

    it("does print function returns FizzBuzz for number which contains 3 and 5 both",()=>{

        const number = 53;

        let mulInstance = new Multiple();
        expect(mulInstance.checkFizzBuzz(number)).toBe("FizzBuzz");
    });

    it("does print function returns Fizz for number which contains 3 only",()=>{

        const number = 31;

        let mulInstance = new Multiple();
        expect(mulInstance.checkFizzBuzz(number)).toBe("Fizz");
    });


    it("does print function returns Fizz for number which contains 5 only",()=>{

        const number = 52;

        let mulInstance = new Multiple();
        expect(mulInstance.checkFizzBuzz(number)).toBe("Buzz");
    });


    it("does print function returns the same number which is not a fizz and not a buzz",()=>{

        const number = 1;

        let mulInstance = new Multiple();
        expect(mulInstance.checkFizzBuzz(number)).toBe("1");
    });

});