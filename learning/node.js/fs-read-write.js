const fs = require('fs');

let text = fs.readFileSync('notes.txt','utf-8');
console.log(text);

text = text.replace("LESSON","TUTORIAL"); //only replaces the first occurrence
fs.writeFileSync('notes.txt',text);