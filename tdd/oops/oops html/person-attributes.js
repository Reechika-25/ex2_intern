class Name{

    constructor(nameObj = {}){
        this.firstName = nameObj.firstName;
        this.lastName = nameObj.lastName;
        this.middleName = nameObj.middleName;
    }

}

class Address{

    constructor(addressObj = {}){
        this.streetAddress1 = addressObj.streetAddress1;
        this.streetAddress2 = addressObj.streetAddress2;
        this.city = addressObj.city;
        this.state = addressObj.state;
        this.zipCode = addressObj.zipCode;
    }
}

class DateOfBirth{

    static getYearFromShortDate(birthDate = ''){
        let birthArray = birthDate.split('/');
        return birthArray[2];
    }
}

exports.Name = Name;
exports.Address = Address;
exports.DateOfBirth = DateOfBirth;