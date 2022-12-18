console.group("1 Dalis");
// 1 uzduotis
const people = [
  {
    name: "Vardenis",
    surname: "Pavardenis",
    age: 26,
    height: 1.9,
    weight: 60,
    sex: "male",
  },
  {
    name: "Juozas",
    surname: "Juozaitis",
    age: 70,
    height: 1.72,
    weight: 70,
    sex: "male",
  },
  {
    name: "Kestas",
    surname: "Kestaitis",
    age: 80,
    height: 1.72,
    weight: 100,
    sex: "male",
  },
  {
    name: "Ugne",
    surname: "Ugnaite",
    age: 23,
    height: 1.56,
    weight: 50,
    sex: "female",
  },
  {
    name: "Vardene",
    surname: "Pavardene",
    age: 20,
    height: 1.73,
    weight: 81,
    sex: "female",
  },
  {
    name: "Moka",
    surname: "Mokaite",
    age: 15,
    height: 1.6,
    weight: 90,
    sex: "female",
  },
];

console.table(people);

console.groupCollapsed("2 uzduotis");
people.forEach((person) => console.log(person));
people.forEach((person) => console.log(person.name + " " + person.surname));
people.forEach((person) => console.log(person.weight / person.height ** 2));
console.groupEnd();

console.groupCollapsed("3 uzduotis");
const longName = people.filter((person) => person.name.length > 6);
console.table(longName);
const heavyWeight = people.filter((person) => person.weight > 80);
console.table(heavyWeight);
const tallPeople = people.filter((person) => person.height > 1.85);
console.table(tallPeople);
console.groupEnd();

console.groupCollapsed("4 uzduotis");

const reformatedPeopleArray = people.map((person) => ({
  heights: person.height,
  weights: person.weight,
  height_weight_age: [person.height, person.weight, person.age],
  KMI_index: Math.round(person.weight / person.height ** 2),
  KMI_index_age: `${Math.round(person.weight / person.height ** 2)} ${
    person.age
  }`,
}));
console.table(reformatedPeopleArray);

console.groupEnd();
console.groupCollapsed("5 uzduotis");

const weightAvg = people.reduce((weightSum, { weight }, index, arr) => {
  if (index !== arr.length - 1) return weightSum + weight;
  else return ((weightSum + weight) / arr.length).toFixed(2);
}, 0);
console.log(Number(weightAvg));

const heightAvg = people.reduce((heightSum, { height }, index, arr) => {
  if (index !== arr.length - 1) return heightSum + height;
  else return ((heightSum + height) / arr.length).toFixed(2);
}, 0);
console.log(Number(heightAvg));

console.groupEnd();

console.group("2 Dalis");

class Person {
  name;
  surname;
  age;
  height;
  weight;
  sex;
  constructor({ name, surname, age, height, weight, sex }) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.sex = sex;
  }

  getBMI() {
    return this.weight / this.height ** 2;
  }

  toString() {
    return `name: ${this.name} surname: ${this.surname} age: ${this.age} height: ${this.height} weight: ${this.weight} sex: ${this.sex}`;
  }
}

console.groupCollapsed('0 uzduotis');

const peopleArr = people.map((person) => new Person(person));
console.log(peopleArr);
peopleArr.forEach((person) => console.log(person.getBMI()));
peopleArr.forEach((person) => console.log(person.toString()));

console.groupEnd();
console.groupCollapsed('1 uzduotis');

const youngHevierThan70Woman = peopleArr.filter(({weight, sex}) => sex === 'female' && weight > 70);
console.log(youngHevierThan70Woman);

console.groupEnd();

console.groupCollapsed('2 uzduotis');

const underWeightMales = peopleArr.filter((person) => person.sex === 'male' && person.age > 25 && person.getBMI() < 18.5);
console.table(underWeightMales);

console.groupEnd();

console.groupCollapsed('3 uzduotis');

const overweightChildren = peopleArr.filter((person) => person.age < 18 && person.getBMI() > 30);
console.log(overweightChildren);

console.groupEnd();

console.groupCollapsed('4 uzduotis');

const overweightPensioner = peopleArr.filter((person) => person.age > 62 && person.getBMI() > 30);
console.log(overweightPensioner);

console.groupEnd();
console.groupCollapsed('5 uzduotis')

const notNormalWeightPeople = peopleArr.filter((person) => 18.5 <= person.getBMI() && person.getBMI() <= 25);
console.table(notNormalWeightPeople);

console.groupEnd();
console.groupEnd();
console.groupEnd();
