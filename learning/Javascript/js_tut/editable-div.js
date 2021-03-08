
let heading = document.querySelector('h1');
let textDiv = document.createTextNode('this is div');
let divEl = document.createElement('div');
divEl.id = 'newDiv';
divEl.appendChild(textDiv);
heading.appendChild(divEl);

document.getElementById('newDiv').addEventListener('click',e =>{
    let inputEl = document.createElement('input');
    let divEl = document.getElementById('newDiv');
    inputEl.type = "text";
    inputEl.id = divEl.id;
    divEl.replaceWith(inputEl);
});

document.getElementById('newDiv').addEventListener('mouseleave',e =>{
    console.log('value');
    let divEl = document.createElement('div');
    let inputEl = document.getElementById('newDiv');
    divEl.id = inputEl.id;
    divEl.innerText = inputEl.value;
    inputEl.replaceWith(divEl);

});