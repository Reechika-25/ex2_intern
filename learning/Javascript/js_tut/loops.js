

let arr = [1,2,3,4,5];
arr.forEach(function(element) {

    console.log(element);
    
});

arr.forEach(function(element,index,array){

    console.log(element,index,array);

});


let myObj = {//mistake -- do not forget to put commas in between

    name : "Reechika",
    rollno : 41,
    status : "fresher"
};

for(let key in myObj){

    console.log(`the ${key} of the user is ${myObj[key]} \n `);
}