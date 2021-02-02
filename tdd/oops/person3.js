

class PersonData{

    constructor(){
      this.personData = require('./data.json');
    }


    updateHTMLContent(){

        this.personData = this.personData.sort((person1,person2) => {
            if (
                person1.Name.firstName.toLowerCase() >
                person2.Name.firstName.toLowerCase()
              ) {
                return 1;
              } else if (
                person1.Name.firstName.toLowerCase() <
                person2.Name.firstName.toLowerCase()
              ) {
                return -1;
              } else {
                if (
                  person1.Address.city.toLowerCase() >
                  person2.Address.city.toLowerCase()
                ) {
                  return 1;
                } else {
                  return -1;
                }
              }
        
        });

        return '';
     }

    displayResult(){

      let items='';
      this.personData.forEach((element)=>
       {
           items+=JSON.stringify(element)+'<br>'
       })
      document.write(items)
    }


}


let personDataInstance = new PersonData();
personDataInstance.updateHTMLContent();
personDataInstance.displayResult();
exports.PersonData = PersonData;








