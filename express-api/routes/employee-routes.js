const express = require('express');
const router = express.Router();
const empController = require('/home/rjain/rjain-workbranch/express-api/controllers/employee-controller.js')

router.get('/employees',empController.getDataOfEmployees);

router.post('/addEmployee',empController.addNewEmployee);

exports.router = router;