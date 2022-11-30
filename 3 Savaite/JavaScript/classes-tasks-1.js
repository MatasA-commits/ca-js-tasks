/*
1. Sukurti klasę Automobilis
  - sukurti konstruktorių, su 3 argumentais:
    - marke, modelis, kaina

  - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
    - this.brand
    - this.model
    - this.price

2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:
  - const car1 = new Automobilis(..., ..., ...);
  - const car2 = new Automobilis(..., ..., ...);
  - const car3 = new Automobilis(..., ..., ...);

3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai

4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
  modelius:
    - console.log(car1.model);
    - console.log(car2.model);
    - console.log(car3.model);
  markes:
    - console.log(car1.brand);
    - console.log(car2.???);
    - console.log(???);
  kainas:
    - console.log(???);
    - console.log(???);
    - console.log(???);

5. Padidinkite Automobilis objektų kainas šimtu.
  car1.price = car1.price + 100;
  car2.price = ??? + 100;
  ???

6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.

*/
/* Taks 1 */
class Car {
  constructor(brand, model, price){
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

}

const car1 = new Car('BMW', 'E400', 3000);
const car2 = new Car('Audi', 'quatro', 20000);
const car3 = new Car('Toyota', 'Avensis', 5000);

console.log(car1);
console.log(car2);
console.log(car3);

console.log('-----')

console.log('___Brandai___');
console.log(car1.brand);
console.log(car2.brand);
console.log(car3.brand);

console.log('___Modeliai___');
console.log(car1.model);
console.log(car2.model);
console.log(car3.model);

console.log('___Kainos___');
console.log(car1.price);
console.log(car2.price);
console.log(car3.price);

const increasePriceBy100 = (price) => {
  return price += 100;
}

const priceIncreased1 = increasePriceBy100(car1.price);
car1.price = priceIncreased1;

const priceIncreased2 = increasePriceBy100(car2.price);
car2.price = priceIncreased2;

const priceIncreased3 = increasePriceBy100(car3.price);
car3.price = priceIncreased3;

/* car1.price = car1.price + 100;
car2.price = car2.price + 100;
car3.price = car3.price + 100; */

console.log(car1);
console.log(car2);
console.log(car3);