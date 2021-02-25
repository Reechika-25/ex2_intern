const repo = require('/home/rjain/rjain-workbranch/express-api/repository/employee-queries.js');

class DBEmployee{

    async getAll(){

        let data = await repo.getAllEmployees();
        return data;
    }

    async addNewEmployee(body){

        let data = await repo.addNewEmployees(body);
        return data;
    }

    async updateEmployeeData(body){
       let data = await repo.updateEmployees(body);
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
