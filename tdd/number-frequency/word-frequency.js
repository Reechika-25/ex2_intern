class Character{
     
    static isAlpha(ch){
        return ((ch >= 'a' && ch <= 'z') ||
                (ch >= 'A' &&  ch <= 'Z') ||
                (ch >= '1' &&  ch <= '9'));
    }
}

class HashMap{

    static getObjArrayFromMap(myMap){
        
        let myMapArray = [];
        for(let myObj in myMap){
            myMapArray.push({word : myObj,count : myMap[myObj]});
        }
        return myMapArray;

    }
}

class File{

    constructor(filePath){
        this.filePath= filePath;
        this.wordFreqMap = new Map();
        this.data = "";
    }


    checkValidCharactersInFilePath(){

        const isValid = require('is-valid-path');
        return isValid(this.filePath);
    }



    readAndStoreFile(){

        const fs = require('fs');
        if(fs.existsSync(this.filePath)){
            this.data = fs.readFileSync(this.filePath,'utf-8');
            return true;
        }
        return false;
    }

    makewordFreqMapOfFile(){

        let fileSize = this.data.length;
        if(fileSize === 0)   return;
        let nextWord = "";
        for(let filePtr = 0;filePtr < fileSize;filePtr++){
             
             let nonAlphaPtr = -1;
             for(nonAlphaPtr = filePtr ; nonAlphaPtr < fileSize && !Character.isAlpha(this.data[nonAlphaPtr]) ; nonAlphaPtr ++);
             if(filePtr == fileSize)   
                break;
             nextWord = "";

             let alphaPtr = -1;
             for( alphaPtr = nonAlphaPtr;alphaPtr < fileSize && Character.isAlpha(this.data[alphaPtr]);alphaPtr++){
                     nextWord += this.data[alphaPtr];
             }
             (this.wordFreqMap[nextWord])?this.wordFreqMap[nextWord] += 1:this.wordFreqMap[nextWord] = 1;
             if( filePtr == fileSize)
                  break;
             filePtr = alphaPtr;          
        
         }
    }

    sortedWordsAccordingToFreq(){
        
        let wordFreqMapItrObj = HashMap.getObjArrayFromMap(this.wordFreqMap);
        wordFreqMapItrObj.sort((wordCountObj1,wordCountObj2)=>wordCountObj2.count - wordCountObj1.count);
        return wordFreqMapItrObj;
     }
}

export class UserDemands{

    printWordsSortedAccordingToFrequency(filePath){
        if(typeof filePath === 'string'){

            let fileInstance = new File(filePath);
            if(!fileInstance.checkValidCharactersInFilePath())
                return "Invalid characters in filePath";
            if(!fileInstance.readAndStoreFile())
                return "File Not Found";
            fileInstance.makewordFreqMapOfFile();
            return fileInstance.sortedWordsAccordingToFreq();
    }
    return 'null';
   }
}

