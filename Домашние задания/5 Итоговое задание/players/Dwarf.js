import Warrior from "./Warrior.js";
import Axe from "../weapons/Axe.js";

export default class Dwarf extends Warrior {
  constructor(position, name){
    super(position, name);
    this.life = 130;
    this.attack = 15;
    this.luck = 20;
    this.description = "Гном";
    this.weapon = new Axe();
    this._hitCounter = 0;
  }

  takeDamage(damage){
    this._hitCounter++;

    if (this._hitCounter % 6 === 0 && this.getLuck() > 0.5){
      super.takeDamage(damage / 2);
    } else super.takeDamage(damage);
    
  }

}