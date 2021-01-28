import {theString} from "./class"

describe("Testing thestring functionality",()=>{

    it("Does thestring class exists?",() =>{

        let stringInstance = new theString();
        expect(stringInstance).toBeDefined();
    });


    it("thestring class should have remove function?",() =>{

        let stringInstance = new theString();
        expect(stringInstance.remove()).toBeDefined();//it checks that function with this name is present and it returns something
    });
    

    it("the remove function should ask to send input when no input send",()=>{
           
        let stringInstance = new theString();
        expect(stringInstance.remove()).toBe("please send input");
    });


    it("remove function of theString returns not valid input in case of input not an array ",() =>{

        const arr = 123;

        let stringInstance = new theString();
        expect(stringInstance.remove(arr)).toBe("send input as array of strings");
    });


    it("the remove function of theString returns not valid input when input is an array but not an array of strings",() =>{

        const arr = ["Jain",123];
        let stringInstance = new theString();
        expect(stringInstance.remove(arr)).toBe("send input as array of strings");
    });


    it("the remove function only removes strings starting with 's' or 'S'",()=>{
             
        const arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
                     "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
                    ];

        let stringInstance = new theString();
        expect(stringInstance.remove(arr)).toStrictEqual(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","t","u","v","w","x","y","z",
                                                 "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","T","U","V","W","X","Y","Z" ]);
    });


    it("the remove function doesn't remove strings starting with numbers",()=>{

        const arr = ["0","1","2","3","4","5","6","7","8","9"];

        let stringInstance = new theString();
        expect(stringInstance.remove(arr)).toStrictEqual(arr);

    });


    it("the remove function doesn't remove strings starting with other than alphabets or numbers",()=>{

        const arr = ["~","!","@","#","$","%","^","&","*","(",")"];

        let stringInstance = new theString();
        expect(stringInstance.remove(arr)).toStrictEqual(arr);
    });


    it("the remove function removes the strings starting with 's' or 'S' completely",()=>{
       
        const arr = ["sanjay","Sanjay"];

        let stringInstance = new theString();
        expect(stringInstance.remove(arr)).toStrictEqual([]);
    });


    it("the remove function removes all the strings starting with 's' or 'S' completely",()=>{

        const arr = ["sanjay","some","sun","Sanjay","Some","Start","abc","defg","Abc","Defg"];

        let stringInstance = new theString();
        expect(stringInstance.remove(arr)).toStrictEqual(["abc","defg","Abc","Defg"]);
    });


    it("the remove function should work fine with null strings",()=>{

        const arr = [""];

        let stringInstance = new theString();
        expect(stringInstance.remove(arr)).toStrictEqual(arr);

    });





});