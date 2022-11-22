const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  function printPeopleInfo(people){
    const peopleString = `${people.name} ${people.surname} - ${people.sex}, age: ${people.age}, income ${people.income}$, is married: ${people.married}, has a car: ${people.hasCar}`;
    console.log(peopleString);
  }
  people.forEach(printPeopleInfo);
}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
  function printNameSurname(people){
    const nameSurnameString = `${people.name} - ${people.surname}`;
    console.log(nameSurnameString);
  }
  people.forEach(printNameSurname);
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  function printNameSurnameIsMarried(people){
    const nameSurnameIsMarriedString = `${people.name} ${people.surname} is married: ${people.married}`;
    console.log(nameSurnameIsMarriedString);
  }
  people.forEach(printNameSurnameIsMarried);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  function printMales(people){
    if(people.sex === 'male') console.log(`${people.name} ${people.surname} - ${people.sex}, age: ${people.age}, income ${people.income}$, is married: ${people.married}, has a car: ${people.hasCar}`);
  }
  people.forEach(printMales);
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  function printFemales(people){
    if(people.sex === 'female') console.log(`${people.name} ${people.surname} - ${people.sex}, age: ${people.age}, income ${people.income}$, is married: ${people.married}, has a car: ${people.hasCar}`);
  }
  people.forEach(printFemales);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  function printIfHasCar(people){
    if(people.hasCar === true) console.log(`${people.name} ${people.surname} - ${people.sex}, age: ${people.age}, income ${people.income}$, is married: ${people.married}, has a car: ${people.hasCar}`);
  }
  people.forEach(printIfHasCar);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  function printMarried(people){
    if(people.married === true) console.log(`${people.name} ${people.surname} - ${people.sex}, age: ${people.age}, income ${people.income}$, is married: ${people.married}, has a car: ${people.hasCar}`);
  }
  people.forEach(printMarried);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  // ...sprendimas ir spausdinimas
}
console.groupEnd();

