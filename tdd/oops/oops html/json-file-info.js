const people = require('./people.js');
const fs = require('fs');
const path = require('path');
const dataFile = require('./data.json');

class ReadFile{

    constructor(filePath){
        this.filePath = filePath;
        this.data = '';
        this.peopleInstance={};
    }

    storeAndPrintFile(){
        this.data = dataFile;
    
    }

    printFile(){
         this.peopleInstance = new people.People();
        for(let itr = 0; itr < this.data.length ; itr ++){
            this.peopleInstance.addNewPerson(this.data[itr]);
        }
        this.peopleInstance.sortArrayInfo();
        this.peopleInstance.printInfoOfPerson(this.peopleInstance.personArray);
    }

    filterCity(city){

        let cityArray = this.peopleInstance.personLivingInNoida(city);
    
        this.peopleInstance.printInfoOfPerson(cityArray);
     }

}

const value = document.getElementById('filterCity');
const more = document.getElementById('printAll');
value.addEventListener('click',callCity);
more.addEventListener('click',loadPerson);

function callCity(){
    let city = document.getElementById('city').value;
    fileInstance.filterCity(city);
}


function loadPerson(){
    fileInstance.peopleInstance.printInfoOfPerson(fileInstance.peopleInstance.personArray);
}


var fileInstance = new ReadFile('data.json');
fileInstance.storeAndPrintFile();
fileInstance.printFile();

