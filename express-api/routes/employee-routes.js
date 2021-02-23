const express = require('express');
const router = express.Router();
const empController = require('/home/rjain/rjain-workbranch/express-api/controllers/employee-controller.js')

router.get('/employees',empController.getDataOfEmployees);

router.post('/addEmployee',empController.addNewEmployee);

router.put('/updateEmployee',empController.updateEmployeeData);

exports.router = router;