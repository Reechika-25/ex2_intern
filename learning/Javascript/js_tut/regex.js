//regex literals //
//string literals ``
//object literals {}

let regex = /Reechika/;

console.log(regex);
console.log(regex.source);//aapne apne regex literals ke beech mein kya likha hai

let str = `hey reechikA !reecHIKA i hope u are great reechika and having fun Reechika`;
//FUNCTIONS TO MATCH EXPRESSIONS -- ki reechika kha par aa rha hai string mein
//1.exec -- this function returns an array for match and null for no match
console.log(regex.exec(str));
console.log(regex.exec(str));
console.log(str.match(regex));
console.log(str.search(regex));
console.log(str.search(/rich/));
console.log(str.replace(regex,'Reechika'));
console.log(str);
let result = regex.exec(str);
if (result) {
    console.log(result.index);
    console.log(result['0']);
    console.log(result.input);
}

regex = /Reechika/g;//global flag to find all the occurrences of regex in the given string
console.log(regex.exec(str));
console.log(regex.exec(str));
console.log(regex.exec(str));
console.log(str.match(regex));
console.log(str.search(regex));
console.log(str.search(/rich/));
console.log(str.replace(regex,'Reechika'));
console.log(str);

regex = /Reechika/ig; //case insensitive flag
console.log(regex.exec(str));
console.log(regex.exec(str));
console.log(regex.exec(str));
console.log(regex.exec(str));
console.log(regex.exec(str));
console.log(str.match(regex));
console.log(str.search(regex));
console.log(str.search(/rich/));
console.log(str.replace(regex,'Reechika'));
console.log(str);
console.log(str.replace(/rich/,'Rich'));
console.log(str);

//2.test()  --- returns true or false
console.log(regex.test(str));
console.log(/rich/.test(str));

//3.match() -- it will return an array of results or NUll
regex = /reeChiKa/i
console.log(str.match(regex));
console.log(str.search(regex));
console.log(str.search(/rich/));
console.log(str.replace(regex,'Reechika'));//will not modify the original string
console.log(str);

//4.search()  -- returns index of first match else -1

//5.replace() -- returns new replaced string with all the replacements  
//-- will not modify the original string -- will replace only the first match if no global flag else replaces all the matches
