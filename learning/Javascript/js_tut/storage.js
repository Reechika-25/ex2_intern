//three main ways to store data inside a browser -- differences screenshot
//1.local storage
//2.session storage
//3.cookies

//checking supprot for locala nd session storage
if(typeof Storage === 'undefined'){
    console.log('storage not supported');
}else{
    console.log('storage supported');
}

console.log(localStorage);
localStorage.setItem('Name','Reechika');
console.log(localStorage);
console.log(typeof localStorage);
console.log(localStorage.Name);
console.log(localStorage.clear());
console.log(localStorage.setItem('Name','Reechika'));
console.log(localStorage.setItem('name1','anita'));
console.log(localStorage.removeItem('name1'));
console.log(localStorage.length);
console.log(localStorage.getItem('name')); //case sensitive
console.log(localStorage.getItem('Name'));

//storing arrays in localStorage
console.log(localStorage.setItem('family',JSON.stringify(['reechika','anita','santosh'])));
console.log(JSON.parse(localStorage.getItem('family')));

//session storage works the same way as localstorage 
sessionStorage.clear();
localStorage.clear();