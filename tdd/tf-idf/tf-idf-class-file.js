
const hashmap = require('./tf-idf-class-hashmap.js')
const character = require('./tf-idf-class-character.js')

class File{

    constructor(filePath){
        this.filePath = filePath;
        this.tfMap = new Map();
        this.tfIdfMap = new Map();
        this.data = '';
        this.fileWords = 0;
    }

    async makeTfMap(){

        let response = await fetch(this.filePath);
        this.data = await response.text();
        this.data = this.data.toLowerCase();

        let fileSize = this.data.length;
        if(fileSize === 0)   return;
        let nextWord = "";
        for(let filePtr = 0;filePtr < fileSize;filePtr++){
             
             let nonAlphaPtr = -1;
             for(nonAlphaPtr = filePtr ; nonAlphaPtr < fileSize && !character.Character.isAlpha(this.data[nonAlphaPtr]) ; nonAlphaPtr ++);
             if(filePtr == fileSize)   
                break;
             nextWord = " ";

             let alphaPtr = -1;
             for( alphaPtr = nonAlphaPtr;alphaPtr < fileSize && character.Character.isAlpha(this.data[alphaPtr]);alphaPtr++){
                     nextWord += this.data[alphaPtr];
             }
             nextWord += " ";
             this.fileWords += 1;
             hashmap.HashMap.incCount(this.tfMap,nextWord);
             if( filePtr == fileSize)
                  break;
             filePtr = alphaPtr;          
        
         }
         await this.updateTfMap();
     }

     updateTfMap(){
      for(let [key,value] of this.tfMap)
             this.tfMap.set(key , value / this.fileWords);
     }

     updateTfIdfMap(idfMap,docNo){
        for(let [key,value] of this.tfMap){
           let finalVal = parseFloat(Math.log2(docNo/(idfMap.get(key))));
           this.tfIdfMap.set(key ,parseFloat(value * finalVal)) ;
        }
        this.tfIdfMap = new Map([...this.tfIdfMap.entries()].sort((a, b) => b[1] - a[1]));
      }
}

exports.File = File;