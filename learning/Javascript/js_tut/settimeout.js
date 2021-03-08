console.log('tutorial for asynchronous programming');

//The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
setTimeout(() => {

    for(let idx = 0;idx < 1000;idx ++){
        console.log(`the no is ${idx + 1}`)
    }
    
},100);

console.log(`done printing till 1000`);