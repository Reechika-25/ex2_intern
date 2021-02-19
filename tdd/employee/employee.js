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