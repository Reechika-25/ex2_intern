const repo = require('/home/rjain/rjain-workbranch/express-api/repository/employee-queries.js');

class DBEmployee{

    async getAll(){

        let query = `select EmployeeID,LastName,FirstName from dbo.Employees`;
        let data = await repo.queryDBForEmployees(query);
        return data;
    }

    async addNewEmployee(){

        let query = `INSERT INTO dbo.Employees(EmployeeID, LastName, FirstName)
        VALUES (100, 'Jain', 'Reechika')`

        let data = await repo.queryDBForEmployees(query);

        console.log("query posted");
        return data;
    }

}


let dbEmployeeInstance = new DBEmployee();

async function getAllEmployees(){
     let data = await dbEmployeeInstance.getAll();
     return data;
}

async function addNewEmployee(){
    let data = await dbEmployeeInstance.addNewEmployee();
    return data;
}

exports.getAllEmployees = getAllEmployees;
exports.addNewEmployee = addNewEmployee;
