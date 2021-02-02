export class Person {
    constructor(name, address, age) {
      this.name = name;
      this.address = address;
      this.age = age;
    }
  }
  export class PersonCollection {
    constructor() {
      this.personArray = [];
      this.person
    }
    addPerson(name, address, age) {
      this.personArray.push(new Person(name, address, age));
      return '';
    }
    printInfo() {
      let out = [];
      for (let itr = 0; itr < this.personArray.length; itr++)
        out.push({
          name: this.personArray[itr].name,
          address: this.personArray[itr].address,
          age: this.personArray[itr].age
        });
      return out;
    }
    personsBornAfter1990() {

      let out = this.personArray.filter(obj => obj.age <= 30)
      return out;
      /*let out = [];
      for (let itr = 0; itr < this.personArray.length; itr++) {
        if (this.personArray[itr].age <= 30)
          out.push({
            address: this.personArray[itr].address,
            age: this.personArray[itr].age,
            name: this.personArray[itr].name
          });
      }
      return out;*/
    }
    personNameStartsWithS() {
      let out = [];
      for (let itr = 0; itr < this.personArray.length; itr++) {
        let str = this.personArray[itr].name;
        if (str[0] === 'S' || str[0] === 's')
          out.push({
            name: this.personArray[itr].name,
            address: this.personArray[itr].address,
            age: this.personArray[itr].age
          });
      }
      return out;
    }
    personLivingInCityNoida() {
      let out = [];
      for (let itr = 0; itr < this.personArray.length; itr++) {
        if (this.personArray[itr].address.contains('Noida'))
          out.push(this.personArray[itr]);
      }
      return out;
    }
  }
  