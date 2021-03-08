

function printVar(){

    for(var idx = 0 ; idx < 5; idx ++){//the scope of var is till the next nearest scope
        console.log("inside the loop");
    }

    console.log("outside the loop", idx);
}

printVar();
//console.log(idx);//will throw error in js file also


function printLet(){

    for(let ptr = 0 ; ptr < 5; ptr ++){//will change let to var in js file and no error will be thrown 
        console.log("inside the loop");
    }

    console.log("outside the loop",ptr);
}

printLet();