
//METACHARACTERS
let regex = /^is/;//^ str starts with that character

let str1 = 'reechika is ? the best';
let str2 = 'is everything fine ?'

function check(regex){
    console.log(regex.exec(str1));
    console.log(regex.exec(str2));
}

check(regex);

regex = /\?$/;  // $ str ends with that character
check(regex);

regex = /re.chika/  //. represents that there should be a character but it can be any character
check(regex);

regex = /i?s? \?/   //? represents optional charcter eother the given charcter should be present or no charcter should be present
check(regex);

regex = /a/;  //remember that *a is same as a only
check(regex);

regex = /ree*/   //* means any number of charcters and any character
check(regex);


//CHARACTER SETS
regex = /r[a-z]ee/   //the char can be anything between a - z
check(regex);

regex = /r[a-zA-Z]ee/   //the char can be anything between a-z or A-Z
check(regex);

regex = /r[^eac]/     //the char can be anything but not eac
check(regex);

regex = /r[^ea]ch[ik]/  //there can be multiple character sets in regex
check(regex);


//QUANTIFIERS -- to tell the frequency of character
regex = /re{2}ch/;   //freq should be exactly 2 of e
check(regex); 

regex = /re{1,3}?/   //freq can be between 1 - 3
check(regex);

//GROUPINGS  -- to specify the frequency of group
str1 = 'reereechika is thethe best';
regex = /(ree){2}/
check(regex);

//CHARACTER CLASSES
regex = /\wis/    //\w means a word character either an _ or alphabet or number
check(regex);

regex = /\w+eec/   //\w+ means one or more than one word characters
check(regex);

regex = /\Wis/    //\W means a non word char
check(regex);

regex = /\W+is/   //\W means one or more than one non word char
check(regex);

regex = /\dis/    //\d means a digit char from 0-9
check(regex);

regex = /\d+is/   //\d+ means one or more than 1 digit
check(regex);

regex = /\Dis/   //\D means a non digit char
check(regex);

regex = /\D+is/  //\D+ means one or more than one non digit char
check(regex);

regex = /\sis/  //\s means a whitespace char(it can be a \t also)
check(regex);

regex = /\s+is/;  //\s+ means one or more than one whitespace char
check(regex);

regex = /\Sis/;   //\S means a non white space char
check(regex);

regex = /\S+is/;  //\S+ means one or more than one non white space char
check(regex);


regex = /a\b/  //\b checks for a word boundary
check(regex);

//ASSERTIONS
regex = /e(?=c)/    //after e c should come
check(regex);

regex = /e(?!e)/    //after e anything but e comes
check(regex);










