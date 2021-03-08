function printVar() {
    for (var idx = 0; idx < 5; idx++) {
        console.log("inside the loop");
    }
    console.log("outside the loop", idx);
}
printVar();
//console.log(idx);//will throw error in js file also
function printLet() {
    for (var ptr = 0; ptr < 5; ptr++) {
        console.log("inside the loop");
    }
    console.log("outside the loop", ptr);
}
printLet();
