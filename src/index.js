export default class Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Недопустимое имя!');
    }
    if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      this.type = type;
    } else {
      throw new Error('Недопустимый тип!');
    }
    this.health = 100;
    this.level = 1;
  }

  levelup() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить уровень мертвого персонажа!');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
  }
}
