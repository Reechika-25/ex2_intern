(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class Character{
    static isAlpha(ch){
        return ((ch >= 'a'  && ch <= 'z') ||
                (ch >= 'A'  && ch <= 'Z') ||
                (ch >= '0'  && ch <= '9') ||
                (ch === '\''));
    }
}

exports.Character = Character;
},{}],2:[function(require,module,exports){

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
},{"./tf-idf-class-character.js":1,"./tf-idf-class-hashmap.js":3}],3:[function(require,module,exports){
class HashMap{

    static incCount(myMap,key){

        if(myMap.has(key))
           myMap.set(key,myMap.get(key) + 1);

        else
           myMap.set(key,1);
    }
}


exports.HashMap = HashMap;

},{}],4:[function(require,module,exports){
const file = require('./tf-idf-class-file.js');
const { HashMap } = require('./tf-idf-class-hashmap.js');

class TfIdf{

    constructor(){

        this.documents = 0;
        this.idfMap = new Map();
        this.fileInstanceMap = new Map();
    }

    async addFile(filepath){

        let fileInstance = new file.File(filepath);
        this.fileInstanceMap.set(filepath,fileInstance);

        await fileInstance.makeTfMap();
        this.documents += 1;
        await this.updateIdfMap(fileInstance);
        
    }

    updateIdfMap(fileInstance){
        for(let [key,value] of fileInstance.tfMap)
             HashMap.incCount(this.idfMap,key);
    }

    async getTfIdf(filePath){

        if(!this.fileInstanceMap.has(filePath))
             await this.addFile(filePath);
        await this.fileInstanceMap.get(filePath).updateTfIdfMap(this.idfMap,this.documents);
        await this.printTfIdfTable(filePath);
    }

    printTfIdfTable(filePath){
        document.write('<h1>' + filePath +'</h1>' + '<br><br>');
        let value = this.fileInstanceMap.get(filePath);
        let tfidf = '';
        for(let [first,second] of value.tfIdfMap)
                tfidf += (String(first) + '  :  ' + String(second) + '<br>');
        document.write(tfidf);
    }

    async printTfIdfForAll(){
        for(let [key,value] of this.fileInstanceMap)
            await this.getTfIdf(key);
    }
}


async function start(){

    let tfidfInstance = new TfIdf();
    await tfidfInstance.addFile('./data/cricket.txt');
    await tfidfInstance.addFile('./data/algorithm.txt');
    await tfidfInstance.addFile('./data/elon-musk.txt');
    await tfidfInstance.addFile('./data/poet.txt');
    await tfidfInstance.addFile('./data/telegram.txt');
    await tfidfInstance.addFile('./data/thermodynamics.txt');
    await tfidfInstance.printTfIdfForAll();
}

start();



},{"./tf-idf-class-file.js":2,"./tf-idf-class-hashmap.js":3}]},{},[4]);
