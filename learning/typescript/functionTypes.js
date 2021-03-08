var mysearch;
mysearch = function (source, substring) {
    var result = source.search(substring);
    return result > -1;
};
console.log(mysearch);
var final = mysearch("ReechikaJain", "Reechika");
console.log(final);
