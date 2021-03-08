let str = 'www';
let newArr = Array.from(document.links);

document.write(`<h1> list of all the links that contain ${str} </h1>`);

newArr.forEach(function (element) {

    if (element.href.includes(str))
        document.write(element.href + '<br>');
});