const repo = require('/home/rjain/rjain-workbranch/express-api/repository/employee-queries.js');

class DBEmployee{

    async getAll(){

        let query = `select EmployeeID,LastName,FirstName from dbo.Employees`;
        let data = await repo.queryDBForEmployees(query);
        return data;
    }

    async addNewEmployee(body){
        let query = `INSERT INTO dbo.Employees (LastName, FirstName)
        VALUES ('${body.LastName}','${body.FirstName}')`

        let data = await repo.queryDBForEmployees(query);
        return data;
    }

    async updateEmployeeData(body){
       let query = `update dbo.Employees set LastName = '${body.LastName}' where FirstName = 'Reechika'`
       let data = await repo.queryDBForEmployees(query);
       return data;
    }

}


let dbEmployeeInstance = new DBEmployee();

async function getAllEmployees(){
     let data = await dbEmployeeInstance.getAll();
     return data;
}

async function addNewEmployee(body){
    let data = await dbEmployeeInstance.addNewEmployee(body);
    return data;
}

async function updateEmployeeData(body){
    let data = await dbEmployeeInstance.updateEmployeeData(body);
    return data;
}

exports.getAllEmployees = getAllEmployees;
exports.addNewEmployee = addNewEmployee;
exports.updateEmployeeData = updateEmployeeData;
