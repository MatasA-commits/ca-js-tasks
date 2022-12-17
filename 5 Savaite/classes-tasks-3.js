console.groupCollapsed("https://edabit.com/challenge/2FF7RKw9RLwc3EBY9");
{
  class Challenge {
    // Build class Challenge: constructor + getter
    id;
    level;
    constructor(id, level) {
      this.id = id;
      this.level = level;
    }

    get points() {
      if (this.level === "VE") return 5;
      else if (this.level === "EA") return 10;
      else if (this.level === "ME") return 20;
      else if (this.level === "HA") return 40;
      else if (this.level === "VH") return 80;
      else if (this.level === "EX") return 120;
      else return `${this.level} is not correct`;
    }
  }
  class User {
    name;
    xp;
    log;
    constructor(name, xp, log) {
      this.name = name;
      this.xp = xp;
      this.log = log;
    }

    newSolvedChallange(challange) {
      this.log.push(challange.id);

      this.xp += challange.points;
      return this.log;
    }
  }

  const user1 = new User("Madam", 0, []);
  const user2 = new User("Steve", 0, []);
  const challenge1 = new Challenge(1, "VE");
  const challenge2 = new Challenge(2, "EA");
  const challenge3 = new Challenge(3, "ME");
  const challenge4 = new Challenge(4, "HA");
  const challenge5 = new Challenge(5, "VH");
  const challenge6 = new Challenge(6, "EX");

  user1.newSolvedChallange(challenge1);
  user1.newSolvedChallange(challenge4);
  user1.newSolvedChallange(challenge6);
  user2.newSolvedChallange(challenge5);
  user2.newSolvedChallange(challenge3);
  user2.newSolvedChallange(challenge2);
  console.log(user1.xp);
  console.log(user2.xp);
  console.log(user1.log);
  console.log(user2.log);
  console.log(user1.xp > user2.xp);
  // 1. Declare the class instances (two users and six challenges)
  // 2. Set the challenges solved by the users
}
console.groupEnd();

console.group("https://edabit.com/challenge/ifDM26p25bqS8EsFu");
{
  class Player{
    #hp;
    #maxHp;
    #en;
    #maxEn;
    armor;
    name;
    constructor(name, hp, en, armor){
      this.hp = hp;
      this.maxHp = hp;
      this.en = en;
      this.maxEn = en;
      this.armor = armor;
      this.name = name;
    }

    set hp(val){
      if(val < 0 || val > this.#maxHp){
        console.error('Players hp incorrect');
        return;
      }
      this.#hp = val;
    }

    get hp(){
      return this.#hp;
    }
    set en(val){
      if(val < 0 || val > this.maxEn){
        console.error('Players en incorrect');
        return;
      }
      this.#en = val;
    }

    get en(){
      return this.#en;
    }

    set maxHp(val){
      this.#maxHp = val;
    }

    get maxHp(){
      return this.#maxHp;
    }

    set maxEn(val){
      this.#maxEn = val;
    }

    get maxEn(){
      return this.#maxEn
    }

    get hpPerc(){
      const hpPercentage = ((this.hp / this.maxHp) * 100).toFixed(2);
      return Number(hpPercentage);
    }
  }

  const alice = new Player("Alice", 110, 50, 10);
  const bob = new Player("Bob", 100, 60, 20);

  console.log(bob);
  console.log(alice.en);

}
console.groupEnd();
