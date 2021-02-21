//to make the lowerCase and upperCase name strings from array of strings
class Case{

    public count : number;
    public lastIndex : number;
    public lastStringSize : number;
    public concatString : string

    constructor(){
        this.count = 0;
        this.lastIndex = -1;
        this.lastStringSize = 0;
        this.concatString = "";
    }

    increaseCount(): void{
       this.count += 1;
    }

    updateIndex(idx : number): void{
       this.lastIndex = idx;
    }

    updateSize(sz : number){
       this.lastStringSize = sz;
    }

    updateString(str : string){
       this.concatString += str;
    }

    stringSize() : number{
       return this.concatString.length;
    }
}

export class Greeting{

    isUpperCase(name : string): boolean{
       return name === name.toUpperCase();
    }

    shout(name : string): string{
        if(!this.isUpperCase(name))
           return "Hello, " + name + ".";

        return "HELLO " + name + "!";
    }

    modifyFinalString(caseObj : Case,name : string[]):void{
        if(caseObj.count >= 1){
            //removing the last comma
            caseObj.concatString = caseObj.concatString.slice(0,caseObj.stringSize()-2);

            //appending and before the last lowercase string
            if(caseObj.count > 1){
                caseObj.concatString = caseObj.concatString.slice(0,caseObj.stringSize() - caseObj.lastStringSize - 1);
                caseObj.concatString += (this.isUpperCase(caseObj.concatString)?" AND ":" and ")+ name[caseObj.lastIndex];
            }
        }
    }

    //splitting the strings on commas outside quotes
    modifyArray(arr: string[]): string[]{
        let n :number = arr.length;
        let out : string[]= [];
        for(let itr = 0;itr < arr.length;itr++){
            if(arr[itr] !== ""){
            let splitString = arr[itr].match(/(".*?"|[^",\​s]+)(?=\s*,|\s*$)/g);
            for(let ptr = 0;ptr < splitString.length;ptr++){
                 splitString[ptr] = splitString[ptr].trim();
                 splitString[ptr] = splitString[ptr].replace(/^"(.*)"$/, '$1');
                 out.push(splitString[ptr]);
            }
          }
        }
        return out;
    }

    //greet a mix of uppercase and titlecase strings
    shoutArray(name : string[]):string{
        name = this.modifyArray(name);
        let n : number= name.length;
        let lowerCase : Case = new Case();
        let upperCase : Case = new Case();
        for(let itr = 0;itr < n;itr ++){
            if(name[itr].length > 0){

                if(this.isUpperCase(name[itr])){
                    upperCase.increaseCount();
                    upperCase.updateIndex(itr);
                    upperCase.updateSize(name[itr].length);
                    upperCase.updateString(name[itr]+", ");

                }else{
                    lowerCase.increaseCount();
                    lowerCase.updateIndex(itr);
                    lowerCase.updateSize(name[itr].length);
                    lowerCase.updateString(name[itr]+", ");
                
                }
            }
        }

        let finalString : string = "";
        if(lowerCase.count >= 1){
            this.modifyFinalString(lowerCase,name);
            finalString += this.shout(lowerCase.concatString);
        }
        if(upperCase.count >= 1){
            if(lowerCase.count > 0) finalString += " AND ";
            this.modifyFinalString(upperCase,name);
            finalString += this.shout(upperCase.concatString);
        }
        return ((finalString === "") ? this.shout("my friend") : finalString);
    }

    greet(name : any): string{
        if(typeof name === 'string' && name.length > 0){
            let splitString = name.match(/(".*?"|[^",\​s]+)(?=\s*,|\s*$)/g);
            return this.shoutArray(splitString);
        }

        if(typeof name === 'object' && name.length > 0)
          return this.shoutArray(name);

        return this.shout("my friend");
    }
}


