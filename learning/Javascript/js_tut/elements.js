
//creating a new element 

//1.
let el = document.createElement('li');
console.log(el);
console.log(typeof el);

el.id = 'elements.js';
console.log(el);
console.log(typeof el);

el.className = 'elements';
console.log(el);
console.log(typeof el);

el.setAttribute('name','Reechikali');
console.log(el);
console.log(typeof el);

el.innerText = `hello this is created by js file`;
console.log(el);
console.log(typeof el);

el.innerHTML = `<b>hello this is created by reechika`;

let parentNode = document.querySelector('ul');
parentNode.appendChild(el);

//2.
el = document.createElement('li');
let text = document.createTextNode(`i am Reechika Jain`);
el.appendChild(text);

parentNode.appendChild(el);

//replacing an element
let newEl = document.createElement('h3');
newEl.appendChild(document.createTextNode('i am great'));

el.replaceWith(newEl);

//replacing child of an element
el.id = 'replace';
parentNode.replaceChild(el,document.getElementById('replace'));


//removing a child
parentNode.removeChild(document.getElementById('replace'));

//extracting info about an element
let extractEl = document.querySelector('div');
console.log(extractEl.getAttribute('class'));
console.log(extractEl.getAttribute('id'));
console.log(extractEl.hasAttribute('class'));
console.log(extractEl.hasAttribute('id'));
console.log(extractEl.removeAttribute('id'));
console.log(extractEl.hasAttribute('id'));
console.log(extractEl.setAttribute('id','myfirstdom'));
console.log(extractEl.hasAttribute('id'));


//homework
let bodyEl = document.querySelector('body');
let heading = document.createElement('h3');
let anchor = document.createElement('a');
let textNode = document.createTextNode('Go to code with harry');
anchor.appendChild(textNode);
anchor.setAttribute('href','https://www.codewithharry.com');
anchor.setAttribute('target','_blank');
heading.appendChild(anchor);
bodyEl.appendChild(heading);