const express = require('express');
const router = express.Router();
const empController = require('/home/rjain/rjain-workbranch/express-api/controllers/employee-controller.js')

router.get('/',empController.getDataOfEmployees);

router.post('/',empController.addNewEmployee);

exports.router = router;