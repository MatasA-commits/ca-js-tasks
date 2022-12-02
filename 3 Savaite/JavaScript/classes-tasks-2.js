console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    getAge() {
      return `${this.name} is age ${this.age}`;
    }

    getHeight() {
      return `${this.name} is ${this.height}cm`;
    }

    getWeight() {
      return `${this.name} weighs ${this.weight}kg`;
    }
  }
  p1 = new Player("David Jones", 25, 175, 75);
  const getAge = p1.getAge();
  console.log(getAge);
  const getHeight = p1.getHeight();
  console.log(getHeight);
  const getWeight = p1.getWeight();
  console.log(getWeight);
  console.groupEnd();
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {
    add(a, b) {
      return a + b;
    }

    subtract(a, b) {
      return a - b;
    }

    multiply(a, b) {
      return a * b;
    }

    divide(a, b) {
      return a / b;
    }

  }

  var calculator = new Calculator();

  const added = calculator.add(10, 5);
  console.log(added);

  const subtracted = calculator.subtract(10, 5);
  console.log(subtracted);

  const multiplyed = calculator.multiply(10, 5);
  console.log(multiplyed);

  const divided = calculator.divide(10, 5);
  console.log(divided);

}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.fullname = `${firstname} ${lastname}`;
      this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
    }
  }
  emp1 = new Employee("John", "Smith");
  console.log(emp1.fullname);

  emp2 = new Employee("Mary", "Sue");
  console.log(emp2.email);

  emp3 = new Employee("Antony", "Walker");
  console.log(emp3.firstname);
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      if (this.age < other.age) return `${other.name} is older than me.`;
      else if (this.age > other.age) return `${other.name} is younger than me.`;
      else return `${other.name} is the same age as me.`;
    }
  }

  p1 = new Person("Samuel", 24)
  p2 = new Person("Joel", 36)
  p3 = new Person("Lily", 24)

  console.log(p1.compareAge(p2));
  console.log(p2.compareAge(p1));
  console.log(p1.compareAge(p3));


}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA
      this.sideB = sideB
    }
    getArea() { return this.sideA * this.sideB }
    getPerimeter() { return (this.sideA + this.sideB) * 2 }
  }


  class Circle {
    static pi = 3.14159265359;
    constructor(r) {
      this.r = r;

    }

    getArea() {
      return Circle.pi * this.r ** 2;
    }

    getPerimeter() {
      return 2 * Circle.pi * this.r;
    }

  }


  // unquote and use run to test these cases:

  let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());

}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
    fname;
    lname;
    fullname;
    initials;
    constructor(fname, lname,) {

      this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
      this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();

      this.fullname = `${this.fname} ${this.lname}`;
      this.initials = `${this.fname[0]}.${this.lname[0]}`;

    }

  }
  a1 = new Name("john", "SMITH");
  console.log(a1.fname);
  console.log(a1.lname);
  console.log(a1.fullname);
  console.log(a1.initials);
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  class IceCream {
    constructor(flavor, numSprinkles) {
      this.flavor = flavor
      this.numSprinkles = numSprinkles
    }


  }
  function sweetestIcecream(arr) {
    const sweetest = arr.reduce((max, { flavor, numSprinkles }) => {
      if (flavor === 'Plain') numSprinkles += 0;
      else if (flavor === 'Vanilla' || flavor === 'ChocolateChip') {
        numSprinkles += 5;
      } else if (flavor === 'Strawberry' || flavor === 'Chocolate') {
        numSprinkles += 10;
      }
      if (max < numSprinkles) max = numSprinkles;
      return max;
    }, 0)
    return sweetest;
  }

  ice1 = new IceCream("Chocolate", 13)         // value of 23
  ice2 = new IceCream("Vanilla", 0)           // value of 5
  ice3 = new IceCream("Strawberry", 7)        // value of 17
  ice4 = new IceCream("Plain", 18)             // value of 18
  ice5 = new IceCream("ChocolateChip", 3)

  const findSweetest = sweetestIcecream([ice1, ice2, ice3, ice4, ice5]);
  console.log(findSweetest);
  console.log(sweetestIcecream([ice3, ice1]));
  console.log(sweetestIcecream([ice3, ice5]))
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  class OnesThreesNines {
    number;
    #ones;
    #threes;
    #nines;
    constructor(number) {
      this.number = number;
      this.#ones = number;
      this.#threes = Math.floor(number / 3);
      this.#nines = Math.floor(number / 9);
    }

    get ones() {
      return this.#ones;
    }
    get threes() {
      return this.#threes;
    }
    get nines() {
      return this.#nines;
    }

  }
  let n1 = new OnesThreesNines(10);
  console.log(n1.nines);
  console.log(n1.ones);
  console.log(n1.threes);
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  class User {
    static userCount = 0
    username;

    constructor(username) {
      User.userCount += 1;
      this.username = username;
    }
  }

  u1 = new User("johnsmith10");
  console.log(u1.username);
  console.log(User.userCount);

  u2 = new User("marysue1989");
  console.log(u2.username);
  console.log(User.userCount);

  u3 = new User("milan_rodrick");
  console.log(u3.username);
  console.log(User.userCount);
}
console.groupEnd();

console.group('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  function Book(title, author) {
    this.title = title;
    this.author = author;
    this.getTitle = function(){
      return 'Title: ' + this.title;
    }
    this.getAuthor = function(){
      return 'Author: ' + this.author;
    }
  }
  

  const PP = new Book('Pride and Prejudice', 'Jane Austen');
  console.log(PP.author);
  const H = new Book('Hamlet', 'William Shakespeare');
  console.log(H.getAuthor());
  const WP = new Book('War and Peace', 'Leo Tolstoy');
  console.log(WP.getTitle());
  
  // Instantiate your Book constructor here
}
console.groupEnd();
