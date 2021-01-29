import { exportAllDeclaration, isTSAnyKeyword } from "@babel/types";
import {Multiple} from "./multiples.js"

describe("Testing Multiple functionality",()=>{

    it("does Multiple class exists?",()=>{

        let mulInstance = new Multiple();
        expect(mulInstance).toBeDefined();
    });

    it("does isBuzz function exists which prints the number from 1 to 100",()=>{

        let mulInstance = new Multiple();
        expect(mulInstance.isBuzz()).toBeDefined();
    });

    it("does print function exists?",()=>{

        let mulInstance = new Multiple();
        expect(mulInstance.print()).toBeDefined();
    });

    it("does print function returns null for non number type",()=>{

        const number = 'reechika';

        let mulInstance = new Multiple();
        expect(mulInstance.print(number)).toBe('null');
    });

    it("does print function returns FizzBuzz for multiples of 3 and 5",()=>{

        const number = 15;

        let mulInstance = new Multiple();
        expect(mulInstance.print(number)).toBe("FizzBuzz");
    });

    it("does print function returns Fizz for multiples of 3",()=>{

        const number = 9;

        let mulInstance = new Multiple();
        expect(mulInstance.print(number)).toBe("Fizz");
    });

    it("does print function returns null for non number type",()=>{

        const number = 25;

        let mulInstance = new Multiple();
        expect(mulInstance.print(number)).toBe("Buzz");
    });


    it("does print function returns the same number for number not mutiples of 3 and 5",()=>{

        const number = 14;

        let mulInstance = new Multiple();
        expect(mulInstance.print(number)).toBe(14);
    });

});