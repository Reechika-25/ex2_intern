let newDate = new Date();
console.log(newDate);

newDate = new Date('august 26 1998');
console.log(newDate);

newDate = new Date('18/09/1990');
console.log(newDate);

newDate = new Date('sunday');
console.log(newDate);

newDate = new Date('09/18/1990');
console.log(newDate);

newDate = new Date('13-7-1998 08:56:04');
console.log(newDate);

newDate = new Date('8-9-1998 09:57:00');
console.log(newDate);

newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getHours());
console.log(newDate.getTime()); //number of seconds since 1 jan 1970
console.log(newDate.getMilliseconds());
console.log(newDate.getMonth());

//console.log(newDate.setDay('sunday'));
console.log(newDate);
console.log(newDate.setDate(18));
console.log(newDate);
console.log(newDate.setMonth(8));
console.log(newDate);
console.log(newDate.setFullYear(1998));
console.log(newDate);
console.log(newDate.setMinutes(60));
console.log(newDate);
console.log(newDate.setSeconds(60));
console.log(newDate);
console.log(newDate.setHours(24));
console.log(newDate);

console.log(new Date());
