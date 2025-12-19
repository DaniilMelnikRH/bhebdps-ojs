import Player from "./Player.js";
import Sword from "../weapons/Sword.js";

export default class Warrior extends Player {
  constructor(pos, name){
    super(pos, name);
    this.life = 120;
    this.speed = 2;
    this.description = "Воин";
    this.weapon = new Sword();
  }

  takeDamage(damage){
    if (this.life < 60 && this.getLuck() > 0.8
     && this.magic > 0){
      this.magic = Math.max(0, this.magic - damage);
    } else super.takeDamage(damage);
    
  }

}