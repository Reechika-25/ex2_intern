//function types
interface SearchFunc{

    (src : string ,substr:string) : boolean;//call signature
}

let mysearch : SearchFunc

mysearch = function(source,substring){//if u specify the tyoes that is ok but if u do not the types are inferred using type inference in typescript

    let result = source.search(substring);
    return result > -1;
}

console.log(mysearch);

let final = mysearch("ReechikaJain","Reechika");
console.log(final);