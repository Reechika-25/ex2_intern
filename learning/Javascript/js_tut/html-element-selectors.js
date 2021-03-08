
//html file --- dom.html
//single element selectors

let el = document.getElementById('firstdiv');
console.log(el);
console.log(el.className);
console.log(el.childNodes);
console.log(el.parentNode);

el.style.color = 'red';
el.innerText = `Reechika is a good girl`;
console.log(el.innerText);
el.innerHTML = `<h2> Reechika is a good girl </h2>`;
console.log(el.innerHTML);


el = document.querySelector('#firstdiv');
console.log(el);

el = document.querySelector('#myfirst');
console.log(el);

el = document.querySelector('.child');
console.log(el);

el = document.querySelector('.anita');
console.log(el);

el = document.querySelector('div');
console.log(el);

el.style.color = 'green';

el = document.querySelector('b');
console.log(el);


//multi element selectors

el = document.getElementsByClassName('child');
console.log(el);
console.log(el[1]);

el = document.getElementsByClassName('container');
console.log(el);
console.log(el[1]);
console.log(el[0].getElementsByClassName('child'));

//iterating over html collection
for(let idx = 0; idx < el.length ; idx ++){
    console.log(el[idx]);
    el[idx].style.color = 'violet';

}

Array.from(el).forEach(element =>{

    console.log(element);
    element.style.color = 'yellow';

});