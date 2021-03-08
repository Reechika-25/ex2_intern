
let numberArr = [1,2,3,4];
let stringArr = ["Reechika","Anita","Deepanshu"];
let booleanArr = [false,true,false];
let arrayArr = [[1,2],[3,4,5],stringArr];
let mixedArr = [1,"Santosh",true,[4,5,6,7],{name : "Reechika", rollno : 123}];

console.log(numberArr);
console.log(numberArr.length);
console.log(stringArr);
console.log(stringArr.length);
console.log(booleanArr);
console.log(booleanArr.length);
console.log(arrayArr);
console.log(arrayArr.length);
console.log(mixedArr);
console.log(mixedArr.length);

let newArr = new Array([1,2],false,1); //mistake -- do not put square brackets
console.log(newArr.length);
console.log(Array.isArray(mixedArr));
console.log(Array.isArray("abcde"));

//indexing starts from 0
console.log(newArr);
newArr[0] = 1;
console.log(newArr);
console.log(newArr.indexOf(1)); //--returns the first occurrence of 1
console.log(newArr.lastIndexOf(1));//-- returns the last occurence of 1
console.log(newArr.indexOf(2));

//mutating or modifying arrays
let modifyArr = [23,34,87,45,567,7890];
console.log(modifyArr.push(26));//returns the length of array
console.log(modifyArr);
console.log(modifyArr.push());//pushes nothing in modifyArr
console.log(modifyArr);

console.log(modifyArr.reverse());//returns the reversed array only
console.log(modifyArr);

console.log(modifyArr.unshift(1));//returns the length of array
console.log(modifyArr);

console.log(modifyArr.unshift());//does nothing
console.log(modifyArr);

console.log(modifyArr.pop()); // returns the popped element from the back
console.log(modifyArr);

console.log(modifyArr.shift());//returns the popped element from the front
console.log(modifyArr);

console.log(modifyArr.splice(18,2));//first parameter -- starting index and second parameter -- number of elements to be removed
console.log(modifyArr);
console.log(modifyArr.splice(-1,4));
console.log(modifyArr);
console.log(modifyArr.splice(1,8));
console.log(modifyArr);

let modifyArr2 = [1,4,6];
console.log(modifyArr.concat(modifyArr2));//returns the concatenated array
console.log(modifyArr);
console.log(modifyArr2);

modifyArr2 = modifyArr.concat(modifyArr2);
console.log(modifyArr);
console.log(modifyArr2);


//objects for key value pairs
let myObj = {
    name : "Reechika",
    'date of birth' : '25/08/1998',
    'rollno' : 41
}

console.log(myObj);
console.log(myObj['date of birth']); //can not access date of birth using . operator
console.log(myObj.name);
console.log(myObj['name']);
console.log(myObj.rollno);
console.log(myObj['rollno']);







