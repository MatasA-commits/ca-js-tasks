//bandomieji kintamieji
//uzduotyse kintamieji yra isimami is pradzios ir pabaigos todel pirmas ir paskutinis elementas veliau nebepasirodo
const array1 = [2, 4, 10, 14, 10, 20, 30];
const array2 = ['hello', 'how', 'are', 'you', 'doing', 'today'];
const array3 = ['%', '$', '@', '_', '+', '^', '#'];

console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  // funkcijos deklaracija
  function getArrayFirstElement(array){
    const firstElement = array[0];
    return firstElement;
  }

  // funkcijos iškvietimai ir saugojimai į rezultatus
  const callArray1 = getArrayFirstElement(array1);
  const callArray2 = getArrayFirstElement(array2);
  const callArray3 = getArrayFirstElement(array3)
  // rezultatų spausdinimas
  console.log(callArray1);
  console.log(callArray2);
  console.log(callArray3);
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  function fetchArrayFirstElement(array){
    const fetchfirstElement = array.splice(0, 1);
    return fetchfirstElement;
  }

  // funkcijos iškvietimai ir saugojimai į rezultatus
  const callArray1 = fetchArrayFirstElement(array1);
  const callArray2 = fetchArrayFirstElement(array2);
  const callArray3 = fetchArrayFirstElement(array3)
  // rezultatų spausdinimas
  console.log(callArray1);
  console.log(array1)
  console.log(callArray2);
  console.log(array2)
  console.log(callArray3);
  console.log(array3)
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  // funkcijos deklaracija
  function getArrayLastElement(array){
    const firstElement = array[array.length-1];
    return firstElement;
  }

  // funkcijos iškvietimai ir saugojimai į rezultatus
  const callArray1 = getArrayLastElement(array1);
  const callArray2 = getArrayLastElement(array2);
  const callArray3 = getArrayLastElement(array3)
  // rezultatų spausdinimas
  console.log(callArray1);
  console.log(callArray2);
  console.log(callArray3);
}
console.groupEnd();

console.group('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  function fetchArrayLastElement(array){
    const lastElement = array.length-1;
    const fetchfirstElement = array.splice(lastElement, lastElement);
    return fetchfirstElement;
  }

  // funkcijos iškvietimai ir saugojimai į rezultatus
  const callArray1 = fetchArrayLastElement(array1);
  const callArray2 = fetchArrayLastElement(array2);
  const callArray3 = fetchArrayLastElement(array3)
  // rezultatų spausdinimas
  console.log(callArray1);
  console.log(array1)
  console.log(callArray2);
  console.log(array2)
  console.log(callArray3);
  console.log(array3)
}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  function getArrayLength(array){
    return array.length;
  }

  // funkcijos iškvietimai ir saugojimai į rezultatus
  const callArray1 = getArrayLength(array1);
  const callArray2 = getArrayLength(array2);
  const callArray3 = getArrayLength(array3)
  // rezultatų spausdinimas
  console.log(callArray1);
  console.log(callArray2);
  console.log(callArray3);
}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function getArrayLastItemIndex(array){
    return array.length - 1;
  }

  // funkcijos iškvietimai ir saugojimai į rezultatus
  const callArray1 = getArrayLastItemIndex(array1);
  const callArray2 = getArrayLastItemIndex(array2);
  const callArray3 = getArrayLastItemIndex(array3)
  // rezultatų spausdinimas
  console.log(callArray1);
  console.log(callArray2);
  console.log(callArray3);
}
console.groupEnd();

console.group('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  function getArrayIndexInRow(array){
    for(let i = 0; i < array.length; i += 1){
      console.log(i)
    }
    console.log('###################################') //Eilute lengvam skirtingu kvietimu atspauzdinimui
  }
  // bandomieji kintamieji
  const array1 = [2, 4, 10, 14, 10, 20, 30];
  const array2 = ['hello', 'how', 'are', 'you'];
  const array3 = ['%', '$', '@'];
  // funkcijos iškvietimai
  getArrayIndexInRow(array1);
  getArrayIndexInRow(array2);
  getArrayIndexInRow(array3)
}
console.groupEnd();

console.group('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  function getArrayValuesInRow(array){
    for(let i = 0; i < array.length; i += 1){
      console.log(array[i])
    }
    console.log('###################################') //Eilute lengvam skirtingu kvietimu atspauzdinimui
  }

  // funkcijos iškvietimai
  getArrayValuesInRow(array1);
  getArrayValuesInRow(array2);
  getArrayValuesInRow(array3)
}
console.groupEnd();

console.group('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function getArrayIndexValuePairsInRow(array){
    for(let i = 0; i < array.length; i += 1){
      console.log(`[${i}] => ${array[i]}`)
    }
    console.log('###################################') //Eilute lengvam skirtingu kvietimu atspauzdinimui
  }

  // funkcijos iškvietimai
  getArrayIndexValuePairsInRow(array1);
  getArrayIndexValuePairsInRow(array2);
  getArrayIndexValuePairsInRow(array3)
}
console.groupEnd();

console.group('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function getArrayValuesInRowReverse(array){
    for(let i = array.length - 1; i >= 0; i += -1){
      console.log(array[i])
    }
    console.log('###################################') //Eilute lengvam skirtingu kvietimu atspauzdinimui
  }

  // funkcijos iškvietimai
  getArrayValuesInRowReverse(array1);
  getArrayValuesInRowReverse(array2);
  getArrayValuesInRowReverse(array3)
}
console.groupEnd();

console.group('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  // funkcijos deklaracija
  function getIndexesInLine(array){
    let indexes = '';
    
    for (let i = 0; i < array.length; i += 1){
      const lastElement = i === array.length - 1;
      indexes += i + (lastElement ? '' : ' ');
    }
    console.log(indexes);
  }

  // funkcijos iškvietimai
  getIndexesInLine(array1);
  getIndexesInLine(array2);
  getIndexesInLine(array3)
}
console.groupEnd();

console.group('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  // funkcijos deklaracija
  function getValuesInLine(array){
    let values = '';
    
    for (let i = 0; i < array.length; i += 1){
      const lastElement = i === array.length - 1;
      values += array[i] + (lastElement ? '' : ' ');
    }
    console.log(values);
  }

  // funkcijos iškvietimai
  getValuesInLine(array1);
  getValuesInLine(array2);
  getValuesInLine(array3)
}
console.groupEnd();

console.group('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  // funkcijos deklaracija
  function getIndexValuePairsInLine(array){
    let pairs = '';
    
    for (let i = 0; i < array.length; i += 1){
      const lastElement = i === array.length - 1;
      pairs += `[${i}]=>${array[i]}`+ (lastElement ? '' : ' ');
    }
    console.log(pairs);
  }

  // funkcijos iškvietimai
  getIndexValuePairsInLine(array1);
  getIndexValuePairsInLine(array2);
  getIndexValuePairsInLine(array3)
}
console.groupEnd();
