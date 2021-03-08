//interface //remember to again do tsc basicTypes.ts after modifying to update the js file corresponding it
//It’s worth pointing out that the type checker does not require that these properties come in any sort of order,
// only that the properties the interface requires are present and have the required type.

interface LabeledValue{
    label? : string;
}

function printLabel(labelObj : LabeledValue){
    console.log(labelObj.label);
}

let myObj = {size : 10,label : 'mysize'};
printLabel(myObj);


/*readonly vs const
The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property.
 Variables use const whereas properties use readonly.*/



interface Person{

    readonly name : string
    age : number 
    phone ? : number
}

let p : Person = {name : 'Reechika' ,age : 24 };
console.log(p);

//excess property checks
//corre
interface squareConfig{

    color ? : string
    width ? : number
   //[propName : string] : any;//index signature --this allows any nunber 0f properties in squareconfig
}

function createSquare(obj : squareConfig):{area : number;perimeter:number}{

    return{
        area : obj.width *obj.width,
        perimeter : 4*obj.width
    };
}

let sqobj = {width : 100 ,colour : "red",area : 100};//storing in other object till they hav common properties

let mySquare = createSquare(sqobj);//if i write colour here or any other property not in the interface then it will give error this is called excess property check
console.log(mySquare);

