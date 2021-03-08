let str = "Reechika";

//--concat
str = str.concat("Jain");

//--length upper lower indexing
console.log(str);
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str);
console.log(str[0]);  //indexing starts from 0

//--index of function
console.log(str.indexOf("Jain"));
console.log(str.indexOf("Anita"));
console.log(str.indexOf('a'));
console.log(str.indexOf('A'));
console.log(str.indexOf(true));
console.log(str.indexOf(123));
console.log(str.indexOf("anita"));

//--last index of 
console.log(str.lastIndexOf('a'));
console.log(str.lastIndexOf('A'));

//--char at
console.log(str.charAt(2));
console.log(str.charAt(12));
console.log(str.charAt(100));

//--endswith
console.log(str.endsWith('Jain'));
console.log(str.endsWith(' Jain'));
console.log(str.endsWith(123));

//--includes
console.log(str.includes('eechika'));

//--substring (first parameter is the starting index and second parameter is ending index + 1
console.log(str.substring(-1,133));
console.log(str.substring(0,4));
console.log(str.substring(-1,12));
console.log(str.substring(0,13));
console.log(str.substring(-4));
console.log(str.substring(12));

//--slice
console.log(str.slice(-4));
console.log(str.slice(13));
console.log(str.slice(-1,133));
console.log(str.slice(0,4));
console.log(str.slice(-3,-2));
console.log(str.slice(0,13));
console.log(str.slice(-1,10));

//difference between slice and substring function -- https://www.geeksforgeeks.org/javascript-difference-between-string-slice-and-string-substring/

//--split
console.log(str.split('a'));

//--replace
console.log(str.replace('a','an'));//only replaces the first occurence of 'a'
console.log(str);

//template literals  -- Template literals are string literals allowing embedded expressions.
const fruit1 = 'orange';
const fruit2 = 'apple';
/*--will print only i like an orange
str = "i like an " + fruit1
"i like " + fruit2 ;
console.log(str);*/

str = "i like an " + fruit1 +
"i like " + fruit2 ;
console.log(str);

//--best way is use backticks and $
str = `i like an ${fruit1}
i like ${fruit2}`;
console.log(str);
