export class Person {
    constructor(name = '', address = '', age = '') {
      this.name = name;
      this.address = address;
      this.age = age;
    }
  }
  export class PersonCollection {
    constructor() {
      this.personArray = [];
    }

    addPerson(name, address, age) {
      this.personArray.push(new Person(name, address, age));
      return '';
    }

    printInfo() {
      return this.personArray;
    }

    personsBornAfter1990() {
      return this.personArray.filter(obj => obj.age <=30);
    }

    personNameStartsWithS() {
      return  this.personArray.filter(obj => (obj.name.charAt(0) === 's'||
                                               obj.name.charAt(0) === 'S'));
    }

    personLivingInCityNoida() {
      return this.personArray.filter(obj => (obj.address.toLowerCase().contains('noida')));
    }
  }
  