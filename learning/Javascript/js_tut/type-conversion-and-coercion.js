//type conversion to string
let newVar;
newVar = 34;
console.log(newVar + ' ' + typeof newVar);
console.log(newVar.toString() + ' ' + typeof newVar);

newVar = String(34);
console.log(newVar + ' ' + typeof newVar);

let booleanVar = false;
console.log(booleanVar + ' ' + typeof booleanVar);
console.log(booleanVar.toString() + ' ' + typeof booleanVar);

booleanVar = String(true);
console.log(booleanVar + ' ' + typeof booleanVar);

let dateVar = new Date();
console.log(dateVar + ' ' + typeof dateVar);
console.log(dateVar.toString() + ' ' + typeof dateVar);

dateVar = String(new Date());
console.log(dateVar + ' ' + typeof dateVar);

let arrVar = [1,2,3,4,5,false,"Reechika"]
console.log(arrVar + ' ' + arrVar.length + ' ' + typeof arrVar);
console.log(arrVar.toString() + ' ' + arrVar.length + ' ' + typeof arrVar);

arrVar = String([1,2,3,4,5,false,"Reechika"]);
console.log(arrVar + ' ' + arrVar.length + ' ' + typeof arrVar);//square brackets not counted in length of string


//type converson to number
let str = "3434";
console.log(str + ' ' + typeof str);

str = Number("3434");
console.log(str + ' ' + typeof str);

str = Number("34d4");
console.log(str + ' ' + typeof str);

str = Number(true);
console.log(str + ' ' + typeof str);

str = Number(false);
console.log(str + ' ' + typeof str);

str = Number([1,2,3,4,5]);
console.log(str + ' ' + typeof str);


//parseint and parsefloat
let no = Number("34.098");
console.log(no + ' ' + typeof no);

no = parseInt("34,098");
console.log(no + ' ' + typeof no);

no = parseInt("34098");
console.log(no + ' ' + typeof no);

no = parseInt("34.098");
console.log(no.toFixed(2) + ' ' + typeof no);

no = parseInt(34.098);
console.log(no + ' ' + typeof no);


no = parseFloat("34,098");
console.log(no + ' ' + typeof no);

no = parseFloat("34098");
console.log(no + ' ' + typeof no);

no = parseFloat("34.098");
console.log(no + ' ' + typeof no);

no = parseFloat(34.098);
console.log(no.toFixed(20) + ' ' + typeof no);

no = parseInt(true);
console.log(no + ' ' + typeof no);

no = parseInt(false);
console.log(no + ' ' + typeof no);

no = parseInt([1,2,3,4,false,"string"]);
console.log(no + ' ' + typeof no);

no = parseFloat(true);
console.log(no + ' ' + typeof no);

no = parseFloat(false);
console.log(no + ' ' + typeof no);

no = parseFloat([1,2,3,4,5,false,"string"])
console.log(no + ' ' + typeof no);


//type coercion -- when we concatenate a number and a string the number gets converted to string 
str = "789";
let number = 01;
console.log((str + ' ' +number) + ' ' + typeof (str + number));

let sum = number + str;
console.log(sum + ' ' + typeof sum);
console.log(typeof number);

sum = str + number;
console.log(sum + ' ' + typeof sum);

str = 789;
console.log(str + number + ' ' + typeof (str + number));

str = true;
console.log(str + number + ' ' + typeof (str + number));

str = [1,2,3,4,5];
console.log(str + number + ' ' + typeof (str + number));

//difference between type conversion and type coercion
/*The word conversion refers to either implicitly or explicitly changing a value from one data type to another, e.g. a 16-bit integer to a 32-bit integer.

The word coercion is used to denote an implicit conversion.

The word cast typically refers to an explicit type conversion (as opposed to an implicit conversion), regardless of whether this is a re-interpretation of a bit-pattern or a real conversion.*/








