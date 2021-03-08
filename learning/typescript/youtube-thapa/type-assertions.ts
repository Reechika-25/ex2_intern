//telling the compiler explicitly that the variable should be of which type
//type assertion does not change the type at runtime it is only for compile time to use the datatype methods and all

let thapatechnical ;
thapatechnical = "subscribe";

//type assertion using angular bracket
console.log((<string>thapatechnical).charAt(0));

//type assertion using as 
console.log((thapatechnical as string).length);