import Character from '../src/index';
import Bowman from '../src/bowman';
import Swordsman from '../src/swordsman';
import Magician from '../src/magician';
import Daemon from '../src/daemon';
import Undead from '../src/undead';
import Zombie from '../src/zombie';

const damageInput = [
  [40],
  [35],
  [50],
  [60],
  [75],
  [90],
  [100],
];

test('should create proper Bowman', () => {
  const george = new Bowman('George', 'Bowman');
  expect(george).toEqual({
    name: 'George', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('should create proper Swordsman', () => {
  const george = new Swordsman('George', 'Swordsman');
  expect(george).toEqual({
    name: 'George', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('should create proper Magician', () => {
  const george = new Magician('George', 'Magician');
  expect(george).toEqual({
    name: 'George', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  });
});

test('should create proper Daemon', () => {
  const george = new Daemon('George', 'Daemon');
  expect(george).toEqual({
    name: 'George', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  });
});

test('should create proper Undead', () => {
  const george = new Undead('George', 'Undead');
  expect(george).toEqual({
    name: 'George', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  });
});

test('should create proper Zombie', () => {
  const george = new Zombie('George', 'Zombie');
  expect(george).toEqual({
    name: 'George', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  });
});

test('should raise wrong name error', () => {
  /* eslint-disable no-new */
  expect(() => { new Character('Georrrrrrrrrrrrrrrrrrrrrrrrrrrrrge', 'Zombie'); }).toThrow(/Недопустимое имя!/);
/* eslint-enable no-new */
});

test('should raise wrong name error', () => {
  /* eslint-disable no-new */
  expect(() => { new Character('G', 'Zombie'); }).toThrow(/Недопустимое имя!/);
/* eslint-enable no-new */
});

test('should raise wrong name error', () => {
/* eslint-disable no-new */
  expect(() => { new Character('George', 'Dwarf'); }).toThrow(/Недопустимый тип!/);
/* eslint-enable no-new */
});

test('should level up charater', () => {
  const george = new Swordsman('George', 'Swordsman');
  george.levelup();
  expect(george.level).toBe(2);
  expect(george.attack).toBe(48);
  expect(george.defence).toBe(12);
  expect(george.health).toBe(100);
});

test('should raise level up error', () => {
  const george = new Swordsman('George', 'Swordsman');
  george.health = 0;
  expect(() => { george.levelup(); }).toThrow(/Нельзя повысить уровень мертвого персонажа!/);
});

test.each(damageInput)(
  ('character took %i damage'),
  (points) => {
    const george = new Bowman('randomname', 'Bowman');
    const initialHealth = george.health;
    george.damage(points);
    const finalHealth = george.health;
    expect(initialHealth - finalHealth).toBe(points * (1 - george.defence / 100));
  },
);
