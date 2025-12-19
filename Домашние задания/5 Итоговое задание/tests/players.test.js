import Player from "../players/Player.js";
import Warrior from "../players/Warrior.js";
import Archer from "../players/Archer.js";
import Mage from "../players/Mage.js";
import Dwarf from "../players/Dwarf.js";
import Crossbowman from "../players/Crossbowman.js";
import Demiurge from "../players/Demiurge.js";
import Sword from "../weapons/Sword.js";
import LongBow from "../weapons/LongBow.js";
import StormStaff from "../weapons/StormStaff.js";

describe("Players", () => {
  test("Player: takeDamage и isDead", () => {
    const player = new Player(0, "Тест");
    player.takeDamage(50);
    expect(player.life).toBe(50);
    player.takeDamage(100);
    expect(player.life).toBe(0);
    expect(player.isDead()).toBe(true);
  });

  test("Player: getLuck возвращает число в диапазоне", () => {
    const player = new Player(0, "Тест");
    const luck = player.getLuck();
    expect(luck).toBeGreaterThanOrEqual(0);
    expect(luck).toBeLessThanOrEqual(1.2);
  });

  test("Warrior: наследует Sword и init свойства", () => {
    const warrior = new Warrior(0, "Воин");
    expect(warrior.weapon instanceof Sword).toBe(true);
    expect(warrior.life).toBe(120);
    expect(warrior.speed).toBe(2);
  });

  test("Archer: getDamage с формулой distance", () => {
    const archer = new Archer(0, "Лучник");
    const damage = archer.getDamage(1);
    expect(damage).toBeGreaterThan(0);
    expect(archer.getDamage(archer.weapon.range + 1)).toBe(0);
  });

  test("Mage: takeDamage учитывает магию", () => {
    const mage = new Mage(0, "Маг");
    mage.takeDamage(50);
    expect(mage.life).toBeLessThan(70);
    expect(mage.magic).toBeLessThan(100);
  });

  test("Dwarf: каждый 6-й удар в 2 раза меньше", () => {
    const dwarf = new Dwarf(0, "Гном");
    dwarf._hitCounter = 5;
    const prevLife = dwarf.life;
    dwarf.takeDamage(20);
    expect(dwarf.life).toBeGreaterThanOrEqual(prevLife - 20);
  });

  test("Crossbowman и Demiurge: init и getDamage", () => {
    const cross = new Crossbowman(0, "Арбалетчик");
    expect(cross.weapon instanceof LongBow).toBe(true);
    const demi = new Demiurge(0, "Демиург");
    expect(demi.weapon instanceof StormStaff).toBe(true);
    const damage = demi.getDamage(1);
    expect(damage).toBeGreaterThan(0);
  });
});