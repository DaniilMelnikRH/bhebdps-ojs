import Player from "./Player.js";
import Staff from "../weapons/Staff.js";

export default class Mage extends Player {
  constructor(position, name){
    super(position, name);
    this.life = 70;
    this.magic = 100;
    this.attack = 5;
    this.agility = 8;
    this.description = "Маг";
    this.weapon = new Staff();
  }

  takeDamage(damage){
    if (this.magic > 50){
      this.magic = Math.max(0, this.magic - 12);
      super.takeDamage(damage / 2);
    } else super.takeDamage(damage);
    
  }

}