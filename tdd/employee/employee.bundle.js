(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


class Name{

    constructor(employeeObj){
        this.prefix = employeeObj.TitleOfCourtesy
        this.firstName = employeeObj.FirstName;
        this.lastName = employeeObj.LastName;
    }
}


class Address{

    constructor(employeeObj){
        this.streetAddress = employeeObj.Address;
        this.city = employeeObj.City;
        this.country = employeeObj.Country;
        this.postalCode = employeeObj.PostalCode;
    }
}

class Region{
    static getRegionIdFromRegion(region){
        if(region === 'Northern')
            return 3;
        if(region === 'Southern')
            return 4;
        if(region === 'Eastern')
            return 1;
        if(region === 'Western')
            return 2;
    }
}

exports.Name = Name;
exports.Address = Address;
exports.Region = Region;
},{}],2:[function(require,module,exports){
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
},{"./employee-attributes.js":1,"./employee.js":4}],3:[function(require,module,exports){
const empCollect = require('./employee-collection.js');


async function readData(){

    let url = 'http://localhost:2000/';
    let response = await fetch(url);
    let jsonData = await response.json();
    empCollect.storeEmployeeData(jsonData.recordset);

}

readData();



},{"./employee-collection.js":2}],4:[function(require,module,exports){
const attribute = require('./employee-attributes.js')

class Employee{

    constructor(employeeObj){
        this.name = new attribute.Name(employeeObj);
        this.address = new attribute.Address(employeeObj);
        this.title = employeeObj.Title;
        this.employeeId = employeeObj.EmployeeID;
        this.regionId = employeeObj.RegionID;
        this.dateOfBirth = employeeObj.BirthDate;
        this.hiringDate = employeeObj.HireDate;
        this.phone = employeeObj.HomePhone;

    }

}

exports.Employee = Employee;
},{"./employee-attributes.js":1}]},{},[3]);
