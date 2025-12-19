import Weapon from "../weapons/Weapon.js";
import Arm from "../weapons/Arm.js";
import Sword from "../weapons/Sword.js";
import Bow from "../weapons/Bow.js";
import Knife from "../weapons/Knife.js";
import Staff from "../weapons/Staff.js";
import LongBow from "../weapons/LongBow.js";
import Axe from "../weapons/Axe.js";
import StormStaff from "../weapons/StormStaff.js";

describe("Weapons", () => {
  test("Weapon: takeDamage и isBroken", () => {
    const weapon = new Weapon("Тест", 10, 50, 1);
    weapon.takeDamage(20);
    expect(weapon.durability).toBe(30);
    weapon.takeDamage(50);
    expect(weapon.durability).toBe(0);
    expect(weapon.isBroken()).toBe(true);
  });

  test("Weapon: getDamage работает корректно", () => {
    const weapon = new Weapon("Тест", 10, 50, 1);
    expect(weapon.getDamage()).toBe(10);
    weapon.takeDamage(40);
    expect(weapon.getDamage()).toBe(5);
    weapon.takeDamage(50);
    expect(weapon.getDamage()).toBe(0);
  });

  const classes = [
    [Arm, "Рука", 1, Infinity, 1],
    [Sword, "Меч", 25, 500, 1],
    [Bow, "Лук", 10, 200, 3],
    [Knife, "Нож", 5, 300, 1],
    [Staff, "Посох", 8, 300, 2],
    [LongBow, "Длинный лук", 15, 200, 4],
    [Axe, "Секира", 27, 800, 1],
    [StormStaff, "Посох Бури", 10, 300, 3],
  ];

  classes.forEach(([Cls, name, attack, durability, range]) => {
    test(`${name}: проверка свойств`, () => {
      const obj = new Cls();
      expect(obj.name).toBe(name);
      expect(obj.attack).toBe(attack);
      expect(obj.range).toBe(range);
      if (durability !== Infinity) {
        expect(obj.durability).toBe(durability);
      }
    });
  });
});