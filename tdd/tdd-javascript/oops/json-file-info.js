const people = require('./people.js');

class ReadFile{

    constructor(filePath){
        this.filePath = filePath;
        this.data = '';
    }

    async storeAndPrintFile(){
        let response = await fetch(this.filePath);
        this.data = await response.json();
        await this.printFile();
    }

    printFile(){
        let peopleInstance = new people.People();
        for(let itr = 0; itr < this.data.length ; itr ++){
            peopleInstance.addNewPerson(this.data[itr]);
        }
        peopleInstance.sortArrayInfo();
        peopleInstance.printInfoOfPerson(peopleInstance.personArray);
    }

}

let fileInstance = new ReadFile('./data.json');
fileInstance.storeAndPrintFile();