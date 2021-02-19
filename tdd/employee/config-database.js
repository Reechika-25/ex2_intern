const { SSL_OP_NO_QUERY_MTU } = require('constants');
const express = require ('express');
const sql = require("mssql");
const app = express();
const apino = 2000;
const fs = require('fs');

data = fs.readFileSync('/home/rjain/rjain-workbranch/tdd/oops- refactored/data.json',(err,data)=>data);

app.listen(apino,()=>{
    console.log(`running at ${apino}`);
});
app.get('/',(req,res)=>{
    const config = {
        server: 'EXIDB01',
        database:'Training',
        authentication: { type: 'default', options: { userName: 'extrain', password: 'Train@2021'} },
        options: { encrypt: false }
    }
    sql.connect(config,err=>{
        if(!err){
           console.log("connected");
        }
        
        const request = new sql.Request();
        request.query('Select RegionID,HT.EmployeeID,FirstName,LastName,Title,BirthDate,HireDate,Address,City,PostalCode,Country,TitleOfCourtesy,HomePhone from dbo.Employees as E inner join helperTable as HT on E.EmployeeID=HT.EmployeeID order BY RegionID', function (err, result) {
            if (err) console.log(err)
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(result);
        });
        
    });
    
});
