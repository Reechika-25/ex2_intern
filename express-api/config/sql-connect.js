const config = require('./db-config.js');
const sql = require('mssql');


async function connectToMSSQL(){

    await sql.connect(config.config);
    console.log("connected");
    let request = await new sql.Request();
    return request;
}

exports.connectToMSSQL=connectToMSSQL;