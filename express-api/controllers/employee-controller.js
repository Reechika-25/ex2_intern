const employee = require('/home/rjain/rjain-workbranch/express-api/service/employee-service.js');

exports.getDataOfEmployees = async (req,res) => {
   let data = await employee.getAllEmployees();
   res.send(data.recordsets[0]);
    
}

exports.addNewEmployee = async (req,res) => {
    console.log('on the way for posting');
    let data = await employee.addNewEmployee();
    res.send(data.recordsets[0]);
}
