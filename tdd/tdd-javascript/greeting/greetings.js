//to make the lowerCase and upperCase name strings from array of strings
class Case{
    constructor(){
        this.count = 0;
        this.lastIndex = -1;
        this.lastStringSize = 0;
        this.concatString = "";
    }

    increaseCount(){
       this.count += 1;
    }

    updateIndex(idx){
       this.lastIndex = idx;
    }

    updateSize(sz){
       this.lastStringSize = sz;
    }

    updateString(str){
       this.concatString += str;
    }

    stringSize(){
       return this.concatString.length;
    }
}

export class Greeting{

    isUpperCase(name){
       return name === name.toUpperCase();
    }

    shout(name){
        if(!this.isUpperCase(name))
           return "Hello, " + name + ".";

        return "HELLO " + name + "!";
    }

    modifyFinalString(caseObj,name){
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
    modifyArray(arr){
        let n = arr.length;
        let out = [];
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
    shoutArray(name){
        name = this.modifyArray(name);
        let n = name.length;
        let lowerCase = new Case();
        let upperCase = new Case();
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

        let finalString = "";
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

    greet(name){
        if(typeof name === 'string' && name.length > 0){
            let splitString = name.match(/(".*?"|[^",\​s]+)(?=\s*,|\s*$)/g);
            return this.shoutArray(splitString);
        }

        if(typeof name === 'object' && name.length > 0)
          return this.shoutArray(name);

        return this.shout("my friend");
    }
}


