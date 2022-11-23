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
  function getSexSalary(people){
    return {
    sex : people.sex,
    income: people.income
  }
  }
  const sexSalaryArray = people.map(getSexSalary);
  console.table(sexSalaryArray);

}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  function getFullNameSex(people){
    return {
      name: people.name,
      surname: people.surname,
      sex: people.sex
    }
  }
  const fullNameSexArray = people.map(getFullNameSex);
  console.log(fullNameSexArray);
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  function isMale(people){
    return people.sex === 'male';
  }
  console.log(people.filter(isMale))
}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  function isFemale(people){
    return people.sex === 'female';
  }
  console.log(people.filter(isFemale));
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  function doesOwnCar(people){
    return people.hasCar;
  }
  const hasCarArray = people.filter(doesOwnCar);
  console.log(hasCarArray);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  function filterMarried(people){
    return people.married;
  }
  const marriedPeopleArray = people.filter(filterMarried);
  console.log(marriedPeopleArray);
}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
   function isMenOwnsCar(people){
    return people.hasCar && people.sex === 'male';
  } 

  function isFemaleOwnsCar(people){
    return people.hasCar && people.sex === 'female';
  }

  const menOwnsCar = people.filter(isMenOwnsCar);
  const femaleOwnsCar = people.filter(isFemaleOwnsCar);

  const peopleWithCars = {
    men: menOwnsCar.length,
    females: femaleOwnsCar.length
  }

  console.table(peopleWithCars);

}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
   function reformPeoplePropertys(people){
    return [{
    name: people.name,
    surname: people.surname,
    sex: people.sex,
    age: people.age,
    salary: people.income,
    married: people.married,
    hasCar: people.hasCar
    }]
  }

  const reformedPeopleArray = people.map(reformPeoplePropertys);
  console.log(reformedPeopleArray);

}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės');
{
  function removeSexNameSurname(people){
    return {
    age: people.age,
    salary: people.income,
    married: people.married,
    hasCar: people.hasCar
    }
  }

  const removedSexNameSurnameObject = people.map(removeSexNameSurname);
  console.log(removedSexNameSurnameObject);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  function combineNameSurname(people){
    return {
    fullName: `${people.name} ${people.surname}`,
    sex: people.sex,
    age: people.age,
    salary: people.income,
    married: people.married,
    hasCar: people.hasCar
  }
  }

  const combinedNameSurnameObject = people.map(combineNameSurname);
  console.log(combinedNameSurnameObject);
}
console.groupEnd();

