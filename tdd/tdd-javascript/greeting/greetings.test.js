import { Greeting } from "./greetings";

describe("Testing greeting functionality",()=>{

    it("Does greeting class exist?",()=>{
        
        let greetInstance = new Greeting();
        expect(greetInstance).toBeDefined();

    });


    it("the greeting class should have greet function",()=>{

        let greetInstance = new Greeting();
        expect(greetInstance.greet()).toBeDefined();
    });


    it("greet function should handle nulls by introducing a stand-in",()=>{

        const name = ["",""];

        let greetInstance = new Greeting();
        expect(greetInstance.greet(name)).toBe("Hello, my friend.");

    });


    it("greet function handles shouting of titlecase strings",()=>{

        const name = "Reechika";

        let greetInstance = new Greeting();
        expect(greetInstance.greet(name)).toBe("Hello, Reechika.");
    });


    it("greet function handles shouting of uppercase strings ",()=>{

        const name = "REECHIKA";

        let greetInstance = new Greeting();
        expect(greetInstance.greet(name)).toBe("HELLO REECHIKA!");
    });


    it("greet function should handle two names of input ",()=>{

        const name = ["ANITA",'Reechika'];

        let greetInstance = new Greeting();
        expect(greetInstance.greet(name)).toBe("Hello, Reechika. AND HELLO ANITA!");
    });

    
    it("greet function should handle arbitrary names of input ",()=>{

        const name = ["REECHIKA",'ANITA',"SANJAY"];

        let greetInstance = new Greeting();
        expect(greetInstance.greet(name)).toBe("HELLO REECHIKA, ANITA, AND SANJAY!");
    });


    it("greet function should handle a mix of normal and shouted names" ,()=>{

        const name = ["REECHIKA","Anita","SANJAY"];

        let greetInstance = new Greeting();
        expect(greetInstance.greet(name)).toBe("Hello, Anita. AND HELLO REECHIKA, AND SANJAY!");
    });

    
    it("greet function should split a string containing ',' as its own input",()=>{

        const name = ["Reechika","Anita, Sanjay"];

        let greetInstance = new Greeting();
        expect(greetInstance.greet(name)).toBe("Hello, Reechika, Anita, and Sanjay.");
    });

    it("greet function should allow the input to escape intentional commas",()=>{

        const name = ["Reechika","\"ANITA, SANJAY\""];

        let greetInstance = new Greeting();
        expect(greetInstance.greet(name)).toBe("Hello, Reechika. AND HELLO ANITA, SANJAY!");
    });
});