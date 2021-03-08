/*What are Generators?
You can think of generators as processes (pieces of code) that you can pause and resume while executing that particular code :
Usecase of Generators:
There are many use cases for generators ,
simpler asynchronous code
we can execute simple asynchronous block of code.
2. receiving asynchronous data using generators*/


function * valueGenerator(){
    let i = 0;

    yield 1;
    yield 2;
    yield 3;
    yield 4;
}


const value = valueGenerator();
console.log(value.next());
console.log(value.next().value);
console.log(value.next());
console.log(value.next().value);
console.log(value.next());
console.log(value.next().value);


function* valueGenerator1(){

    for(let i = 0; i< 10; i++)
        yield i+1;
}

const value1=valueGenerator1();
let res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);

res = value1.next();
console.log(res);
console.log(res.value);


