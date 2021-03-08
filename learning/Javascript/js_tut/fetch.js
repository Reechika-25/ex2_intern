
//Cross origin resource sharing (CORS) -- https://www.youtube.com/watch?v=YAvnt-32W8M
//const cors = require('cors');

//FETCH FUNCTION IS ASYNCHRONOUS

//1. get request from local text file
function getData(){
    const url = 'js_tut/fetch-data.txt';//give relative path in url
    fetch(url).then(response => response.text()).then(data => console.log(data));
}

console.log('before fetching data');
getData();
console.log('after fetching data');


//2.get request from json file
function getJSONData(){
    fetch('https://api.github.com/users').then(response => response.json()).then(data => console.log(data));
}

getJSONData();


//3.get request through xmlhttprequest
function getData1(){//works also fine when does not opened with live server

    let xhr = new XMLHttpRequest();
    xhr.open('GET','js_tut/fetch-data.txt',true);
    xhr.onload = () => console.log(xhr.responseText);
    xhr.send();
}

console.log('before fetching data');
getData1();
console.log('after fetching data');


//4.post request through fetch
function postData(){

    const url = 'http://dummy.restapiexample.com/api/v1/create';
    const data = `{name : 'Reechika', age : 31 }`; 
    const params = {
        method : 'post',
        'Access-Control-Allow-Headers' :{
            'Content-Type' : 'application/json'
        },
        body : data
    }

    fetch(url,params).then(response => response.json()).then(data => console.log(data));
}

postData();


/* doubt --- how to enable cors mechanism on your machine for any host or specific host
             why fetch fails on live server but xhr does not though having the same origin policy
             not able to post data
             access-control-allow-origin*/