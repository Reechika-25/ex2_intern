const fs = require('fs');

const text = fs.readFile('notes.txt','utf-8',(err,data)=>{
    console.log(err,data);
});


console.log("printed the text");