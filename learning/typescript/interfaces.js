//interface //remember to again do tsc basicTypes.ts after modifying to update the js file corresponding it
//It’s worth pointing out that the type checker does not require that these properties come in any sort of order,
// only that the properties the interface requires are present and have the required type.
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { size: 10, label: 'mysize' };
printLabel(myObj);
var p = { name: 'Reechika', age: 24 };
console.log(p);
function createSquare(obj) {
    return {
        area: obj.width * obj.width,
        perimeter: 4 * obj.width
    };
}
//excess property checks can be handled by tyoe assertion
var mySquare = createSquare({ width: 100, colour: "red" }); //if i write colour here or any other property not in the interface then it will give error this is called excess property check
console.log(mySquare);
