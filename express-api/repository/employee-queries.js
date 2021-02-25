
const sql = require('/home/rjain/rjain-workbranch/express-api/config/sql-connect.js');

async function queryDBForEmployees(query){
    const request = await sql.connectToMSSQL();
    let data = await request.query(query);
    return data.recordsets[0];
}

exports.queryDBForEmployees = queryDBForEmployees;

async function getAllEmployees(){

    let query = `select EmployeeID,LastName,FirstName from dbo.Employees`
    let data = await queryDBForEmployees(query);
    return data;
}

async function addNewEmployees(body){

    let query = `INSERT INTO dbo.Employees (LastName, FirstName)
           VALUES ('${body.LastName}','${body.FirstName}')`

    let data = await repo.queryDBForEmployees(query);
    return data;
}

async function updateEmployees(body){

    let query = `update dbo.Employees set LastName = '${body.LastName}' where FirstName = 'Reechika'`;
    let data = await queryDBForEmployees(query);
    return data;
}

exports.getAllEmployees = getAllEmployees;
exports.updateEmployees = updateEmployees;
exports.addNewEmployees = addNewEmployees;