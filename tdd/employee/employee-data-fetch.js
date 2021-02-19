const empCollect = require('./employee-collection.js');


async function readData(){

    let url = 'http://localhost:2000/';
    let response = await fetch(url);
    let jsonData = await response.json();
    console.log(jsonData.recordset);
    empCollect.storeEmployeeData(jsonData.recordset);

}

readData();


