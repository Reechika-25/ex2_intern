
const sql = require('/home/rjain/rjain-workbranch/express-api/config/sql-connect.js');

async function queryDBForEmployees(query){
    const request = await sql.connectToMSSQL();
    let data = await request.query(query);
    return data;
}

exports.queryDBForEmployees = queryDBForEmployees;