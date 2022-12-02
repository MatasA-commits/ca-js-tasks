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
    add(a, b){
      return a + b;
    }

    subtract(a, b){
      return a - b;
    }

    multiply(a, b){
      return a * b;
    }

    divide(a, b){
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
    constructor (firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.fullname = `${firstname} ${lastname}`;
      this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
    }
  }
  emp1 = new Employee("John", "Smith");
  console.log(emp1.fullname);

  emp2 = new Employee("Mary",  "Sue");
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
    getArea(){return this.sideA*this.sideB}
    getPerimeter(){return (this.sideA + this.sideB) *2}
  }
  
  
  class Circle {
  static pi = 3.14159265359;
    constructor(r){
      this.r = r;
      
    }
    
    getArea(){
      return Circle.pi * this.r ** 2;
    }

    getPerimeter(){
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
  // ... code
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  // ... code
}
console.groupEnd();
