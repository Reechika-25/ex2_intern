const employee = require('./employee.js');
const attribute = require('./employee-attributes.js');

class EmployeeCollection{

    constructor(){
        this.employeeArr = [];
    }

    addNewEmployee(employeeObj){
        this.employeeArr.push(new employee.Employee(employeeObj));
    }

    filterByRegionId(regionId){
        return this.employeeArr.filter(employeeObj => employeeObj.regionId === regionId);
    }

    static printEmployees(array){
       let info = '';
       for(let obj of array){
           info += `EmployeeID : ${obj.employeeId}<br>
                    Name : ${obj.name.prefix} ${obj.name.firstName} ${obj.name.lastName}<br>
                    Address : ${obj.address.streetAddress} ${obj.address.city} ${obj.country} ${obj.postalCode}<br>
                    Title : ${obj.title}<br>
                    <br><br>
                     `
       }

       document.getElementById('content').innerHTML = info;
    }
}

const newCollectionInstance = new EmployeeCollection();

function storeEmployeeData(data){

    for(let employeeObj of data)
       newCollectionInstance.addNewEmployee(employeeObj);
    EmployeeCollection.printEmployees(newCollectionInstance.employeeArr);

}

exports.storeEmployeeData = storeEmployeeData;

document.getElementById('submit').addEventListener('click',function(){

    let region = document.getElementById('region').value;
    let regionId = attribute.Region.getRegionIdFromRegion(region);
    let filteredArr = newCollectionInstance.filterByRegionId(regionId);
    EmployeeCollection.printEmployees(filteredArr);

});