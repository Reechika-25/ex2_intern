const express = require('express');
const app = express();
const apino = 3000;
const routes = require('./routes/employee-routes.js');

app.listen(apino,()=>{
    console.log(`running at ${apino}`);
});


app.use('/',routes.router);






