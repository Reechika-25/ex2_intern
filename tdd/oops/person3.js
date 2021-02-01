const http = require('http');
let personData = require('./data.json')

class PersonData{


    updateHTMLContent(){

        personData = personData.sort((person1,person2) => {
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
        
        return personData;
    }
}


let personDataInstance = new PersonData();
let sortedArray = personDataInstance.updateHTMLContent();
console.log(sortedArray)

http
  .createServer(function (req, res) {
    res.write(""); //write a response to the client
    res.end(`<html><body>${JSON.stringify(personData)}</body></html>`); //end the response
  })
  .listen(8000, () => {
    console.log("server running");
  });







