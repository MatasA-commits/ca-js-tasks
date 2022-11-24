// ----------------------Užduotys--------------------------
const numbers = [1, 2.3, -2.9, 6.5, -5.2, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  const newNumberMultiplyTwoArray = numbers.map(function (number) {
    return number * 2;
  });

  console.log({
    numbers,
    result: newNumberMultiplyTwoArray
  });

}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  const newNumberSquaredArray = numbers.map(function (numbers) {
    return numbers ** 2;
  });

  console.log({
    numbers,
    result: newNumberSquaredArray
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  const newIndexNumberArray = numbers.map(function (number, i) {
    return number * i;
  })

  console.log({
    numbers,
    result: newIndexNumberArray
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{

  console.log({
    numbers,
    result: numbers.filter(function (number) {
      return number > 0;
    })
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{

  console.log({
    numbers,
    result: numbers.filter(function (number) {
      return number < 0;
    })
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  console.log({
    numbers,
    result: numbers.filter(function (number) {
      return number % 2 === 0;
    })
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  console.log({
    numbers,
    result: numbers.filter(function (number) {
      return number % 2 === 1;
    })
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  const positiveNumberArray = numbers.map(function (number) {
    if (number < 0) {
      return number * -1;
    } else return number;
  });

  console.log({
    numbers,
    result: positiveNumberArray
  });


  console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  const numberIncreasedByIndex = numbers.map(function (number, index) {
    return number * index;
  });

  console.log({
    numbers,
    result: numberIncreasedByIndex
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  let naturalNumbersArr = numbers.map(function (number) {
    if (number >= 0 && number % 1 === 0) return number;
  });
  naturalNumbersArr = naturalNumbersArr.filter(function (number) {
    return number !== undefined;
  });

  console.log({
    numbers,
    result: naturalNumbersArr
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  const absArrNumbers = numbers.map(function (number) {
    let remainder = number % 1;
    let whole = number - remainder;
    if (remainder <= -0.5) return whole - 1;
    else if (remainder >= 0.5) return whole + 1;
    else return whole
  });

  console.log({
    numbers,
    result: absArrNumbers
  });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{

  const everySecondElement = (numbers.filter(function (_, index) {
    return index % 2 === 0;
  }));

  console.log({
    numbers,
    result: everySecondElement
  });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  const everyFifthElement = (numbers.filter(function (_, index) {
    return index % 5 === 0;
  }));

  console.log({
    numbers,
    result: everyFifthElement
  });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  numbers.forEach(function (number, i) {
    console.log(`[${i}] => ${number}`)
  });
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  const numbersSum = numbers.reduce(function (prevValue, number) {
    return prevValue + number;
  }, 0);

  console.log({
    numbers,
    result: numbersSum
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  const numbersAverage = numbers.reduce(function (prevValue, number, index, array) {
    if (index === array.length - 1) return (prevValue + number) / array.length
    else return prevValue + number;
  }, 0);

  console.log({
    numbers,
    result: numbersAverage
  });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  const max = numbers.reduce(function (prevNumber, number) {
    if (prevNumber > number) return prevNumber;
    else return number;
  })

  console.log({
    numbers,
    result: max
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  const min = numbers.reduce(function (prevNumber, number) {
    if (prevNumber < number) return prevNumber;
    else return number;
  })

  console.log({
    numbers,
    result: min
  });
}
console.log('---');
console.groupEnd();
