

class Name{

    constructor(employeeObj){
        this.prefix = employeeObj.TitleOfCourtesy
        this.firstName = employeeObj.FirstName;
        this.lastName = employeeObj.LastName;
    }
}


class Address{

    constructor(employeeObj){
        this.streetAddress = employeeObj.Address;
        this.city = employeeObj.City;
        this.country = employeeObj.Country;
        this.postalCode = employeeObj.PostalCode;
    }
}

class Region{
    static getRegionIdFromRegion(region){
        if(region === 'Northern')
            return 3;
        if(region === 'Southern')
            return 4;
        if(region === 'Eastern')
            return 1;
        if(region === 'Western')
            return 2;
    }
}

exports.Name = Name;
exports.Address = Address;
exports.Region = Region;