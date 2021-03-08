let newVar = window;

console.log(newVar);

let j = newVar.alert('hello');
console.log(j);
j = window.alert('hello');
console.log(j);
j = alert('hello');
console.log(j);

let a = newVar.prompt('enter a number');
console.log(a);
a = window.prompt('enter a number');
console.log(a);
a = prompt('enter a number');
console.log(a);

let p = confirm('are you fine?');
console.log(p);
console.log(newVar.confirm('are u fine ?'));
console.log(window.confirm('are u fine ?'));

console.log(newVar.document);
console.log(window.document);
console.log(document);

console.log(window.innerHeight);
console.log(newVar.innerWidth);
console.log(outerHeight);
console.log(outerWidth);


console.log(scrollX);
console.log(newVar.scrollY);

console.log(location);
console.log(location.href);
console.log(typeof location.href)
//console.log(location.reload());
//location.href = '//www.youtube.com';// full form hypertext reference
//console.log(href);
console.log(history);
console.log(history.go(-1));
console.log(history.go(1));


