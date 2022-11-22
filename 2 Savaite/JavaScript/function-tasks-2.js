// ----------------------Užduotys--------------------------
const numbers = [1, 2.3, -2.9, 6.5, -5.2, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrBy2(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i += 1){
      result.push(arr[i] * 2)
    }
    return result;
  }
  console.log({
    numbers,
    result: mulArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function powerArrBy2(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i += 1){
      result.push(arr[i] ** 2)
    }
    return result;
  }
  console.log({
    numbers,
    result: powerArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrElementsByIndex(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i += 1){
      result[i] = arr[i] * i;
    }
    return result;
  }
  console.log({
    numbers,
    result: mulArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i += 1){
      arr[i] > 0 ? result.push(arr[i]) : 0 ;
    }
    return result;
  }
   console.log({
     numbers,
     result: filterPositives(numbers)
   });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i += 1){
      arr[i] < 0 ? result.push(arr[i]) : 0 ;
    }
    return result;
  }
   console.log({
     numbers,
     result: filterNegatives(numbers)
   });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i += 1){
      element = arr[i];
      if(element%2 === 0) result.push(element);
    }
    return result;
  }
   console.log({
     numbers,
     result: filterEquals(numbers)
   });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i += 1){
      element = arr[i];
      if(element%2 !== 0) result.push(element);
    }
    return result;
  }
   console.log({
     numbers,
     result: filterOdds(numbers)
   });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  function arrAbsoluteValues(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i += 1){
      let element = arr[i];
      if(element < 0) element *= -1;

      result.push(element);
    }

    return result;
  }

  console.log('---');
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers)
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i += 1){
      let element = arr[i] ** i;
      result.push(element);
    }
    return result;
  }
   console.log({
     numbers,
     result: powArrElementsByIndex(numbers)
   });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i += 1){
      arr[i] >= 0 && arr[i] % 1 === 0 ? result.push(arr[i]) : 0 ;
    }
    return result;
  }
   console.log({
     numbers,
     result: filterNaturals(numbers)
   });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  function absArrElements(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i += 1){
    let remainder = arr[i] % 1;
    let whole = arr[i] - remainder;
    if(remainder <= -0.5) result.push(whole - 1);
    else if(remainder >= 0.5) result.push(whole + 1) ;
    else result.push(whole);
    }
    return result;
    
  }
   console.log({
     numbers,
     result: absArrElements(numbers)
   });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i += 2){
      result.push(arr[i]);
    }
    return result;
  }
   console.log({
     numbers,
     result: filterEverySecond(numbers)
   });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i += 5){
      result.push(arr[i]);
    }
    return result;
  }
   console.log({
     numbers,
     result: filterEveryFifth(numbers)
   });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(arr) {
    for(let i = 0; i < arr.length; i += 1){
      console.log(`[${i}] => ${arr[i]}`);
    }
  }
  printArr(numbers);
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i += 1){
      sum += arr[i];
    }
    return sum;
  }

   console.log({
     numbers,
     result: sumArr(numbers)
   });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i += 1){
      sum += arr[i];
    }
    return sum / arr.length;
  }

   console.log({
     numbers,
     result: avgArr(numbers)
   });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i += 1){
      arr[i] > max ? max = arr[i] : 0;
    }
    return max;
  }

   console.log({
     numbers,
     result: arrMax(numbers)
   });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i += 1){
      arr[i] < min ? min = arr[i] : 0;
    }
    return min;
  }

   console.log({
     numbers,
     result: arrMin(numbers)
   });
}
console.log('---');
console.groupEnd();
