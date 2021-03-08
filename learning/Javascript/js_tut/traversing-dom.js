let el = document.querySelector('.container');
console.log(el.childNodes);
console.log(el.children);

//difference between html collection and node list --- https://www.youtube.com/watch?v=uwJyp4ZLVMA

//nodename and nodetype
/* LIST FOR NODETYPES :
   1. element
   2. attribute
   3. text node
   8. comment
   9. document
   10. docType*/

console.log(el.childNodes[0]);
console.log(el.childNodes[0].nodeName);
console.log(el.childNodes[0].nodeType);
el.childNodes.forEach(element =>{

    console.log(element.nodeName);
    console.log(element.nodeType);

});

//can also do nesting to find grandchildren
el = document.querySelector('div.container');
console.log(el.children[5].children)

console.log(el.childNodes);
console.log(el.firstChild);
console.log(el.firstElementChild);
console.log(el.lastChild);
console.log(el.lastElementChild);
console.log(el.childElementCount);


console.log(el.firstElementChild.parentNode);
console.log(el.firstElementChild.nextSibling);
console.log(el.firstElementChild.nextElementSibling);
console.log(el.firstElementChild.nextElementSibling.nextElementSibling);

