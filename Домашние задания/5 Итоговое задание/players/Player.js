import Arm from "../weapons/Arm.js";
import Knife from "../weapons/Knife.js";

export default class Player {
  constructor(position, name){
    this.life = 100;
    this.magic = 20;
    this.speed = 1;
    this.attack = 10;
    this.agility = 5;
    this.luck = 10;
    this.description = "Игрок";
    this.weapon = new Arm();
    this.position = position;
    this.name = name;
  }

  getLuck(){ 
    return (Math.random() * 100 + this.luck) / 100; 
  }

  getDamage(distance){
    if (distance > this.weapon.range) return 0;
    return (this.attack + this.weapon.getDamage()) *
      this.getLuck() / distance;

  }

  takeDamage(damage){
    this.life = Math.max(0, this.life - damage);
  }

  isDead(){ return this.life === 0; }

  moveLeft(distance){
    this.position -= Math.min(this.speed, Math.abs(distance));
  }

  moveRight(distance){
    this.position += Math.min(this.speed, Math.abs(distance));
  }

  move(distance){
    distance < 0 ? this.moveLeft(distance) : this.moveRight(distance);
  }

  isAttackBlocked(){
    return this.getLuck() > (100 - this.luck) / 100;
  }

  dodged(){
    return this.getLuck() > (100 - this.agility - this.speed * 3) / 100;
  }

  takeAttack(damage){
    if (this.isAttackBlocked()) {
      this.weapon.takeDamage(damage);
      return;
    }

    if (this.dodged()) return;
    this.takeDamage(damage);

  }

  checkWeapon(){
    if (!this.weapon.isBroken()) return;
    this.weapon = this.weapon instanceof Knife ? new Arm() : new Knife();

  }

  chooseEnemy(players){
    return players
      .filter(player => player !== this && !player.isDead())
      .sort((a, b) => a.life - b.life)[0];

  }

  moveToEnemy(enemy){
    if (!enemy) return;
    this.move(enemy.position - this.position);

  }

  tryAttack(enemy){
    const distance = Math.abs(this.position - enemy.position);
    if (distance > this.weapon.range) return;

    const damage = this.getDamage(distance);
    this.weapon.takeDamage(10 * this.getLuck());

    if (distance === 0){
      enemy.moveRight(1);
      enemy.takeAttack(damage * 2);
    } else {
      enemy.takeAttack(damage);
    }

    this.checkWeapon();

  }

  turn(players){
    if (this.isDead()) return;

    const enemy = this.chooseEnemy(players);
    if (!enemy) return;

    this.moveToEnemy(enemy);
    this.tryAttack(enemy);

  }

}