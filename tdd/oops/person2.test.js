import { Person } from './person2';
import { PersonCollection } from './person2';
describe('Testing Person functionality', () => {
  it('does person class exists', () => {
    let personInstance = new Person();
    expect(personInstance).toBeDefined();
  });
  it('does name address age initialised in constructor', () => {
    const name = 'Reechika';
    const address = '110A/6,Faridabad';
    const age = 21;
    let personInstance = new Person(name, address, age);
    expect(personInstance.name).toBeDefined();
    expect(personInstance.address).toBeDefined();
    expect(personInstance.age).toBeDefined();
  });
  it('does personcollection class exists', () => {
    let colInstance = new PersonCollection();
    expect(colInstance).toBeDefined();
    expect(colInstance.personArray).toBeDefined();
  });
  it('does add person and print info function exits in class', () => {
    let colInstance = new PersonCollection();
    expect(colInstance.addPerson()).toBeDefined();
    expect(colInstance.printInfo()).toBeDefined();
    expect(typeof colInstance.printInfo()).toBe('object');
  });
  it('does add function works properly ?', () => {
    let colInstance = new PersonCollection();
    expect(colInstance.addPerson('sanjay', 'fbd', 18)).toBeDefined();
  });
  it('print function work properly', () => {
    let colInstance = new PersonCollection();
    colInstance.addPerson('Reechika', 'fbd', 25);
    colInstance.addPerson('sanjay', 'fbd', 21);
    expect(colInstance.printInfo()).toStrictEqual([
      { name: 'Reechika', address: 'fbd', age: 25 },
      { name: 'sanjay', address: 'fbd', age: 21 }
    ]);
  });
  it('does person born after 1990 function work properly', () => {
    let colInstance = new PersonCollection();
    colInstance.addPerson('Reechika', 'fbd', 25);
    colInstance.addPerson('sanjay', 'fbd', 21);
    expect(colInstance.personsBornAfter1990()).toStrictEqual([
      { address: 'fbd', age: 25, name: 'Reechika' },
      { address: 'fbd', age: 21, name: 'sanjay' }
    ]);
  });
  it('does person name starts with s function work properly ', () => {
    let colInstance = new PersonCollection();
    colInstance.addPerson('Reechika', 'fbd', 25);
    colInstance.addPerson('sanjay', 'fbd', 21);
    expect(colInstance.personNameStartsWithS()).toStrictEqual([
      { name: 'sanjay', address: 'fbd', age: 21 }
    ]);
  });
  it('does person living in noida function work properly', () => {
    let colInstance = new PersonCollection();
    colInstance.addPerson('Reechika', 'Noida', 25);
    colInstance.addPerson('sanjay', 'Noida', 21);
    expect(colInstance.printInfo()).toStrictEqual([
      { name: 'Reechika', address: 'Noida', age: 25 },
      { name: 'sanjay', address: 'Noida', age: 21 }
    ]);
  });
});