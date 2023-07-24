import Character from './index';

export default class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
