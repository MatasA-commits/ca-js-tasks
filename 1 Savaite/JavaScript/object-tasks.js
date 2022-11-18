console.group('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
  drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ];

  function sortDrinkByPrice(drinks) {
   return drinks.sort((a, b) => (a.price > b.price) ? 1 : -1);
  }
  
  console.log(sortDrinkByPrice(drinks));
}
console.groupEnd();

console.group('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{

  function addName(obj, name, value) {
    //Mano sprendimas
    return Object.assign(obj, {[name]: value});
    //labiau patikes atsakymas is ats puslapio
    /* obj[name] = value; 
    return obj; */
  }
  console.log(addName({}, "Brutus", 300));
  console.log(addName({piano: 500}, "Brutus", 400));
  console.log(addName({piano: 500}, "Brutus", 400));
  console.log(addName({piano: 500, stereo: 300}, "Caligula", 440));
}
console.groupEnd();

console.group('3 - https://edabit.com/challenge/48EJWLhF224na8po3'); 
{
  function generation (x, y){

  const mother = "mother";
  const grand = "grand";
  const great = "great";
  const father = "father";
  const me = "me!";
  const son = "son";
  const daughter = "daughter";
  let name = '';

    if (x === 0){
      name += me;
    }
    if (x === -3 || x === 3){
      name += great + " ";
    }
    if (x <= -2 || x >= 2){
      name += grand;
    }
    if (y == 'm' && x < 0){
      name += father;
    } else if (y == 'f' && x < 0){
      name += mother;
    }
    if (y == 'm' && x > 0){
      name += son;
    } else if (y == 'f' && x > 0){
      name += daughter;
    }
    return name;
  }
  console.log(generation(-3, "m"))
}
console.groupEnd();

console.group('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
  function maximumScore(tileHand) {
    let sum = 0;
    for (let i = 0; i < tileHand.length; i += 1){
      sum += tileHand[i].score;
    }
    return sum;
  }

  console.log(maximumScore([{tile: 'M', score: 3}, {tile: 'Q', score: 10},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}]));
}
console.groupEnd();

console.group('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
  function calculateDifference(obj, limit) {

    const values = Object.values(obj);
    let sum = 0;

    for (let i = 0; i <= values.length - 1; i += 1)
    {
      sum += values[i];
    }
    const difference = sum - limit;

    return difference;
  }


  console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
}
console.groupEnd();

console.group('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
   function toArray(obj){
    const entries = Object.entries(obj);
    return entries;
  }

  const arr1 = toArray({a: 1, b:2, c:6});
  const arr2 = toArray({shrimp: 1, tots:2, lydeka:6});

  console.log(arr1);
  console.log(arr2); 
  //pvz
  /* function toArray(obj){
    const result = [];
    let i = 0;
    for (const key in obj) {
      result[i] = [key, obj[key]];
      i += 1
    }
    return result;
  }

  const arr1 = toArray({a: 1, b:2, c:6});
  const arr2 = toArray({shrimp: 1, tots:2, lydeka:6});

  console.log(arr1);
  console.log(arr2); */
}
console.groupEnd();

console.group('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
  function inkLevels(inks) {
    const arr = Object.values(inks);
    const min = Math.min(...arr);
    return min;
  }

  console.log(inkLevels({
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
  }));
}
console.groupEnd();

console.group('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
  const stolenItems = {
    tv: 30,
    skate: 20,
    stereo: 50,
  }

  function calculateLosses(stolenItems) {
    const values = Object.values(stolenItems);
    let sum = 0;
    if (values.length === 0){
      return "Lucky you!"
    } else{
      for(let i = 0; i <= values.length - 1; i += 1){
        sum += values[i];
      }
      return sum;
    }
  }

  console.log(calculateLosses(stolenItems));
}
console.groupEnd();
