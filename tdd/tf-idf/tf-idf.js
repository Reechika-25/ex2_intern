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
        this.fileInstanceMap.get(filePath).tfIdfMap
    }

    async printTfIdfForAll(){

        for(let [key,value] of this.fileInstanceMap){
            console.log(key + '\n');
            await this.getTfIdf(key);
            console.log(value.tfIdfMap);

        }
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


