/*
  Užduotis reikia atlikti 2 kartus
    * su while ciklu
    * su for ciklu
*/

const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

console.groupCollapsed('WHILE');
{
  console.group('1. Sukurkite ciklą kuris 5 kartus atspausdintų "Sveikas Pasauli"');
  {
    let i = 0;
    while(i < 5){
      console.log(`Sveikas pasauli`);
      i +=1;
    }
  }
  console.groupEnd();
  console.group('2. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <');
  {
    let i = 1;
    while(i < 6){
      console.log(i)
      i += 1;
    }
  }
  console.groupEnd();
  console.group('3. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <');
  {
    let i = 3;
    while(i < 8){
      console.log(i);
      i += 1;
    }
  }
  console.groupEnd();
  console.group('4. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <');
  {
    let i = -3;
    while(i < 3){
      console.log(i);
      i += 1;
    }
  }
  console.groupEnd();
  console.group('5. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <=');
  {
    let i = 1;
    while(i <= 5){
      console.log(i);
      i += 1;
    }
  }
  console.groupEnd();
  console.group('6. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <=');
  {
    let i = 3;
    while(i <= 7){
      console.log(i);
      i += 1;
    }
  }
  console.groupEnd();
  console.group('7. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <=');
  {
    let i = -3;
    while(i <= 2){
      console.log(i);
      i += 1;
    }
  }
  console.groupEnd();
  console.group('8. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki -3. Naudojant >');
  {
    let i = -3;
    while(3 > i){
      console.log(i);
      i += 1;
    }
  }
  console.groupEnd();
  console.group('9. Sukurkite ciklą kuris atspausdintų nuo -5 iki iki -10. Naudojant >');
  {
    let i = -5;
    while(i > -11){
      console.log(i);
      i -= 1;
    }
  }
  console.groupEnd();
  console.group('10. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki 1. Naudojant >');
  {
    let i = 2;
    while(i > 0){
      console.log(i);
      i -= 1;
    }
  }
  console.groupEnd();
  console.group('11. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki -3. Naudojant >=');
  {
    let i = 2;
    while(i >= -3){
      console.log(i);
      i -= 1;
    }
  }
  console.groupEnd();
  console.group('12. Sukurkite ciklą kuris atspausdintų nuo -5 iki iki -10. Naudojant >=');
  {
    let i = -5;
    while(i >= -10){
      console.log(i);
      i -= 1;
    }
  }
  console.groupEnd();
  console.group('13. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki 1. Naudojant >=');
  {
    let i = 2;
    while(i >= 1){
      console.log(i);
      i -=1 ;
    }
  }
  console.groupEnd();
  console.group('14. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Naudojant žingsnį +2');
  {
    let i = 2;
    while(i <= 10){
      console.log(i);
      i += 2;
    }
  }
  console.groupEnd();
  console.group('15. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Tikrinant ar kintamasis yra lyginis. Naudokite liekanos operatorių');
  {
    let i = 2;
    while(i <= 10){
      if(i%2 === 0){
        console.log(i);
      }
      i += 1;
    }
  }
  console.groupEnd();
  console.group('16. Sukurkite ciklą kuris atspausdintų 4, 1, -2, -5, -8. Naudojant žingsnį -3');
  {
    let i = 4;
    while(i >= -8){
      console.log(i);
      i += -3;
    }
  }
  console.groupEnd();
  console.group('17. Sukurkite ciklą kuris atspausdintų 3, 0, -3, -6, -9. Tikrinant ar kintamojo liekana dalinant iš 3 yra lygi 0?');
  {
    let i = 3;
    while(i >= -9){
      if(i%3 ===0){
        console.log(i);
      }
      i += -1;
    }
  }
  console.groupEnd();
  console.group('18. Sukurkite ciklą kuris atspausdintų 2, 0, -2, -4, -6. Naudojant kintamojo liekaną');
  {
    let i = 2;
    while(i >= -6){
      if(i%2 === 0){
        console.log(i);
      }
      i += -1;
    }
  }
  console.groupEnd();
  console.group('19. Sukurkite ciklą kuris atspausdintų 2, -1, -4, -7, -10. Naudojant kintamojo liekaną');
  {
    let i = 2;
    while(i >= -10){
      if((i+1) % 3 === 0){
        console.log(i);
      }
    i += -1;
    }
  }
  console.groupEnd();
  console.group('20. Atspausdinkite <numbers> masyvo elementus nuo pirmo iki paskutinio');
  {
    let i = 0;
    while(i+1 <= numbers.length){
      console.log(numbers[i]);
      i += 1;
    }
    
  }
  console.groupEnd();
  console.group('21. Atspausdinkite <numbers> masyvo elementus nuo 3 iki paskutinio');
  {
    let i = 2;
    while(i < numbers.length){
      console.log(numbers[i]);
      i += 1;
    }
  }
  console.groupEnd();
  console.group('22. Atspausdinkite <numbers> masyvo elementus nuo 2 iki prieš paskutinio');
  {
    let i = 2;
    const priesPaskutinis = numbers.length - 1;
    while(i < priesPaskutinis){
      console.log(numbers[i]);
      i += 1;
    }
  }
  console.groupEnd();
  console.group('23. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki pirmo');
  {
    let i = numbers.length - 1;
    let iki = 0;
    while(i >= iki){
      console.log(numbers[i]);
      i += -1;
    }
  }
  console.groupEnd();
  console.group('24. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki antro');
  {
    let i = numbers.length - 1;
    let iki = 1;
    while(i >= iki){
      console.log(numbers[i]);
      i += -1;
    }
  }
  console.groupEnd();
  console.group('25. Atspausdinkite <numbers> masyvo elementus nuo prieš paskutinio iki trečio');
  {
    let i = numbers.length - 1;
    let iki = 2;
    while(i >= iki){
      console.log(numbers[i]);
      i += -1;
    }
  }
  console.groupEnd();
  console.group('26. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę');
  {
    let i = 0;
    let iki = numbers.length - 1;
    while(iki > i){
      console.log(numbers[i]);
      i += 2;
    }
  }
  console.groupEnd();
  console.group('27. Atspausdinkite <numbers> masyvo kas trečią elementą iš kairės į dešinę');
  {
    let i = numbers.length - 1;
    let iki = 2;
    while(i >= iki){
      console.log(numbers[i]);
      i += -3;
    }
  }
  console.groupEnd();
  console.group('28. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę, pradedant trečiu');
  {
    let i = 2;
    let iki = numbers.length - 1;
    while(iki > i){
      console.log(numbers[i]);
      i += 2;
    }
  }
  console.groupEnd();
  console.group('29. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės');
  {
    let i = numbers.length - 1;
    const iki = 0;
    while(iki < i){
      console.log(numbers[i]);
      i += -2;
    }
  }
  console.groupEnd();
  console.group('30. Atspausdinkite <numbers> masyvo kas trečią elementą iš dešinės');
  {
    let i = numbers.length - 1;
    const iki = 0;
    while(iki < i){
      console.log(numbers[i]);
      i += -3;
    }
  }
  console.groupEnd();
  console.group('31. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės, pradedant prieš prieš paskutiniu');
  {
    let i = numbers.length - 3;
    const iki = 0;
    while(iki < i){
      console.log(numbers[i]);
      i += -2;
    }
  }
  console.groupEnd();
}
console.groupEnd();

console.groupCollapsed('FOR');
{
  console.group('1. Sukurkite ciklą kuris 5 kartus atspausdintų "Sveikas Pasauli"');
  {
    for(let i = 1; i <= 5; i += 1){
      console.log("Sveikas Pasauli")
    }
  }
  console.groupEnd();
  console.group('2. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <');
  {
    for(let i = 1; i < 6; i += 1){
      console.log(i);
    }
  }
  console.groupEnd();
  console.group('3. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <');
  {
    for(let i = 3; i < 8; i += 1){
      console.log(i);
    }
  }
  console.groupEnd();
  console.group('4. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <');
  {
    for(let i = -3; i < 3; i += 1){
      console.log(i);
    }
  }
  console.groupEnd();
  console.group('5. Sukurkite ciklą kuris atspausdintų nuo 1 iki 5. Naudojant <=');
  {
    for(let i = 1; i <= 5; i += 1){
      console.log(i);
    }
  }
  console.groupEnd();
  console.group('6. Sukurkite ciklą kuris atspausdintų nuo 3 iki 7. Naudojant <=');
  {
    for(let i = 3; i <= 7; i += 1){
      console.log(i);
    }
  }
  console.groupEnd();
  console.group('7. Sukurkite ciklą kuris atspausdintų nuo -3 iki 2. Naudojant <=');
  {
    for(let i = -3; i <= 2; i += 1){
      console.log(i);
    }
  }
  console.groupEnd();
  console.group('8. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki -3. Naudojant >');
  {
    for(let i = 2; i > -4; i += -1){
      console.log(i);
    }
  }
  console.groupEnd();
  console.group('9. Sukurkite ciklą kuris atspausdintų nuo -5 iki iki -10. Naudojant >');
  {
    for(let i = -5; i > -11; i += -1){
      console.log(i);
    }
  }
  console.groupEnd();
  console.group('10. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki 1. Naudojant >');
  {
    for(let i = 2; i > 0; i += -1){
      console.log(i);
    }
  }
  console.groupEnd();
  console.group('11. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki -3. Naudojant >=');
  {
    for(let i = 2; i >= -3; i += -1){
      console.log(i);
    }
  }
  console.groupEnd();
  console.group('12. Sukurkite ciklą kuris atspausdintų nuo -5 iki iki -10. Naudojant >=');
  {
    for(let i = -5; i >= -10; i += -1){
      console.log(i);
    }
  }
  console.groupEnd();
  console.group('13. Sukurkite ciklą kuris atspausdintų nuo 2 iki iki 1. Naudojant >=');
  {
    for(let i = 2; i >= 1; i += -1){
      console.log(i);
    }
  }
  console.groupEnd();
  console.group('14. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Naudojant žingsnį +2');
  {
    for(let i = 2; i <= 10; i += 1){
      console.log(i);
    }
  }
  console.groupEnd();
  console.group('15. Sukurkite ciklą kuris atspausdintų 2, 4, 6, 8, 10. Tikrinant ar kintamasis yra lyginis. Naudokite liekanos operatorių');
  {
    for(let i = 2; i <= 10; i += 1){
      if(i % 2 === 0){
        console.log(i);
      }
    }
  }
  console.groupEnd();
  console.group('16. Sukurkite ciklą kuris atspausdintų 4, 1, -2, -5, -8. Naudojant žingsnį -3');
  {
    for(let i = 4; i >= -8; i += -3){
      console.log(i);
    }
  }
  console.groupEnd();
  console.group('17. Sukurkite ciklą kuris atspausdintų 3, 0, -3, -6, -9. Tikrinant ar kintamojo liekana dalinant iš 3 yra lygi 0?');
  {
    for(let i = 3; i >= -9; i += -1){
      if(i % 3 === 0){
        console.log(i);
      }
    }
  }
  console.groupEnd();
  console.group('18. Sukurkite ciklą kuris atspausdintų 2, 0, -2, -4, -6. Tikrinant ar kintamojo liekana');
  {
    for(let i = 2; i >= -6; i += -1){
      if((i) % 2 === 0){
        console.log(i);
      }
    }
  }
  console.groupEnd();
  console.group('19. Sukurkite ciklą kuris atspausdintų 2, -1, -4, -7, -10. Tikrinant ar kintamojo liekana');
  {
    for(let i = 2; i >= -10; i += -1){
      if((i+1) % 3 === 0){
        console.log(i);
      }
    }
  }
  console.groupEnd();
  console.group('20. Atspausdinkite <numbers> masyvo elementus nuo pirmo iki paskutinio');
  {
    for(let i = 0; i < numbers.length; i += 1){
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
  console.group('21. Atspausdinkite <numbers> masyvo elementus nuo 3 iki paskutinio');
  {
    for(let i = 3; i < numbers.length; i += 1){
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
  console.group('22. Atspausdinkite <numbers> masyvo elementus nuo 2 iki prieš paskutinio');
  {
    for(let i = 2; i <= numbers.length - 2; i += 1){
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
  console.group('23. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki pirmo');
  {
    for(let i = numbers.length-1; i >= 0; i += -1){
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
  console.group('24. Atspausdinkite <numbers> masyvo elementus nuo paskutinio iki antro');
  {
    for(let i = numbers.length - 1; i >= 1; i += -1){
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
  console.group('25. Atspausdinkite <numbers> masyvo elementus nuo prieš paskutinio iki trečio');
  {
    for(let i = numbers.length - 2; i >= 2; i += -1){
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
  console.group('26. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę');
  {
    for(let i = 0; i <= numbers.length - 1; i += 2){
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
  console.group('27. Atspausdinkite <numbers> masyvo kas trečią elementą iš kairės į dešinę');
  {
    for(let i = 0; i <= numbers.length - 1; i += 3){
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
  console.group('28. Atspausdinkite <numbers> masyvo kas antrą elementą iš kairės į dešinę, pradedant trečiu');
  {
    for(let i = 2; i <= numbers.length - 1; i += 2){
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
  console.group('29. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės');
  {
    for(let i=numbers.length-1; i >= 0; i += -2){
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
  console.group('30. Atspausdinkite <numbers> masyvo kas trečią elementą iš dešinės');
  {
    for(let i = numbers.length - 1; i >= 0; i += -3){
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
  console.group('31. Atspausdinkite <numbers> masyvo kas antrą elementą iš dešinės, pradedant prieš prieš paskutiniu');
  {
    for(let i = numbers.length-2; i >= 0; i += -2){
      console.log(numbers[i]);
    }
  }
  console.groupEnd();
}
console.groupEnd();
