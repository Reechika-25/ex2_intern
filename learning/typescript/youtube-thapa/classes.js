var Intern = /** @class */ (function () {
    function Intern(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Intern.prototype.getFirstName = function () {
        return this.firstName;
    };
    Intern.prototype.getLastName = function () {
        return this.lastName;
    };
    return Intern;
}());
var Reechika = new Intern('Reechika', 'jain', 25);
console.log(Reechika.getFirstName());
console.log(Reechika.getLastName());
