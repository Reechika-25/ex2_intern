const people = require('./people.js');
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
        this.peopleInstance.personArray = this.peopleInstance.removeDuplicates(this.peopleInstance.personArray);
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

let count = 0;
let prevCityValue = '';
function loadPerson(){
       let cityValue = document.getElementById('city').value;
       if(prevCityValue !== cityValue){
           prevCityValue = cityValue;
           count = 0;
       }
       count += 1;
       let endIdx = 5 * (count + 1);
       if(cityValue === "defaultCity"){
         fileInstance.peopleInstance.printInfoOfPerson(fileInstance.peopleInstance.personArray,endIdx);
         return;
       }
       let cityArray = fileInstance.peopleInstance.personLivingInNoida(cityValue);
       cityArray = fileInstance.peopleInstance.removeDuplicates(cityArray);
       fileInstance.peopleInstance.printInfoOfPerson(cityArray,endIdx);
       return;
}


var fileInstance = new ReadFile('data.json');
fileInstance.storeAndPrintFile();
fileInstance.printFile();

