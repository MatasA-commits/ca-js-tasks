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
  class Player {
    #hp;
    #maxHp;
    #en;
    #maxEn;
    armor;
    name;
    constructor(name, hp, en, armor) {
      this.hp = hp;
      this.maxHp = hp;
      this.en = en;
      this.maxEn = en;
      this.armor = armor;
      this.name = name;
    }

    set hp(val) {
      if (val < 0 || val > this.#maxHp) {
        console.error("Players hp incorrect");
        return;
      }
      this.#hp = val;
    }

    get hp() {
      return this.#hp;
    }
    set en(val) {
      if (val < 0 || val > this.maxEn) {
        console.error("Players en incorrect");
        return;
      }
      this.#en = val;
    }

    get en() {
      return this.#en;
    }

    set maxHp(val) {
      this.#maxHp = val;
    }

    get maxHp() {
      return this.#maxHp;
    }

    set maxEn(val) {
      this.#maxEn = val;
    }

    get maxEn() {
      return this.#maxEn;
    }

    get hpPerc() {
      const hpPercentage = ((this.hp / this.maxHp) * 100).toFixed(2);
      return Number(hpPercentage);
    }

    learnSkill(skillName, stats) {
      this[skillName] = (enemy) => {
        if (stats.cost > this.en) {
          return (
            `${this.name} attempted to use ${skillName}, ` +
            `but didn't have enough energy!`
          );
        }
        
        this.en = this.en - stats.cost;
        const effArmor = enemy.armor - stats.penetration;
        const damage = stats.damage * ((100 - effArmor) / 100);
        enemy.hp = enemy.hp - damage;
        if (!stats.heal) this.hp = Math.min(100, this.hp + stats.heal);

        return (
          `${this.name} used ${skillName}, ${stats.desc}, against ` +
          `${enemy.name}, doing ${Number(damage.toFixed(2))} damage! ` +
          (!stats.heal ? `${this.name} healed for ${stats.heal} health!` : "") +
          (enemy.hp <= 0
            ? ` ${enemy.name} died. `
            : ` ${enemy.name} is at ${enemy.hpPerc}% health.`)
        );
      };
    }
  }

  const alice = new Player("Alice", 110, 50, 10);
  const bob = new Player("Bob", 100, 60, 20);

  alice.learnSkill("fireball", {
    damage: 23,
    penetration: 1.2,
    heal: 5,
    cost: 15,
    desc: "a firey magical attack",
  });

  console.log(alice.fireball(bob));
  // Alice used fireball, a firey magical attack, against Bob, doing
  // 18.68 damage! Alice healed for 5 health! Bob is at 81.32% health.

  bob.learnSkill("superbeam", {
    damage: 200,
    penetration: 50,
    heal: 50,
    cost: 75,
    desc: "an overpowered attack, pls nerf",
  });

  console.log(bob.superbeam(alice));
  // Bob attempted to use superbeam, but didn't have enough energy!
}
console.groupEnd();
