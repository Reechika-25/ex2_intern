document.getElementById('heading').addEventListener('click',function(e){//there is mouseover event also

    console.log('hi welcome to the tutorial page');
    //redirecting to a different page when clicking
    //location.href = `https://www.geeksforgeeks.org/dom-document-object-model/`;
    console.log(e);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.classList);
    console.log(e.target.id);
    console.log(Array.from(e.target.classList));
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.clientX);
    console.log(e.clientY);


});

document.getElementById('btn').addEventListener('click',func1);
function func1(e){
    console.log('thanks its a click');
    console.log(e);
}

document.getElementById('btn').addEventListener('dblclick',e =>{//double click also fores click

    console.log('thans its a double click');
    console.log(e);

});

document.getElementById('btn').addEventListener('mousedown',e=>{//anything other than left click on mouse

    console.log('thanks its a mouse down');
    console.log(e);
});

document.getElementById('btn').addEventListener('mouseenter',e =>{

    console.log('thanks the mouse has entered');
    console.log(e);

});

document.getElementById('btn').addEventListener('mouseleave',e=>{
    console.log('bad news the mouse has left');
    console.log(e);
});

document.getElementById('btn').addEventListener('mousemove',e =>{
    console.log('mouse is moving inside');
    console.log(e);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX}${e.offsetY})`;
});

document.getElementById('st').addEventListener('click',e =>{
    console.log('thanks');
    console.log(e);
    e.preventDefault();
});

document.getElementById('st1').addEventListener('click',function(e){

    console.log('thanks');
    console.log(e);
    e.preventDefault();

});