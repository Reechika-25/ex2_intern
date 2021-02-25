const employee = require('/home/rjain/rjain-workbranch/express-api/service/employee-service.js');

exports.getDataOfEmployees = async (req,res) => {
   let data = await employee.getAllEmployees();
   res.send(data);
    
}

exports.addNewEmployee = async(req,res) => {
    let data = await employee.addNewEmployee(req.body);
    res.send(data);
}

exports.updateEmployeeData = async(req,res)=>{
    let data = await employee.updateEmployeeData(req.body);
    res.send(data);
}
