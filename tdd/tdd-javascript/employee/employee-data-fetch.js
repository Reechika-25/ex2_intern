const empCollect = require('./employee-collection.js');


async function readData(){

    let url = 'http://localhost:2000/';
    let response = await fetch(url);
    let jsonData = await response.json();
    empCollect.storeEmployeeData(jsonData.recordset);

}

readData();


