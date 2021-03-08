//what is document object model ? why is it needed?

//difference between class and id

//how to find the element for a particular feature on a web page (right click on it and select inspect)

console.log(document);

//document.all is an array type object but not an array
console.log(document.all);  //all returns the collection of all the tags

console.log(document.body);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms[1]);
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[1]);
console.log(document.links.href);
console.log(document.links[0].href);

//iterating document.all
let newDoc = document.all;
Array.from(newDoc).forEach(function(element){

    console.log(element);

});

let imageContained = document.images;
console.log(document.images);

Array.from(imageContained).forEach(function(element){

    console.log(element);

});


let scriptsContained = document.scripts;
console.log(document.scripts);

Array.from(scriptsContained).forEach(function(element){

     console.log(element);

});