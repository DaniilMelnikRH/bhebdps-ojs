import Warrior from "./players/Warrior.js";
import Archer from "./players/Archer.js";
import Mage from "./players/Mage.js";
import Dwarf from "./players/Dwarf.js";
import Crossbowman from "./players/Crossbowman.js";
import Demiurge from "./players/Demiurge.js";

import { play } from "./game/play.js";

const players = [
  new Warrior(0, "Алёша Попович"),
  new Archer(4, "Мильва"),
  new Mage(7, "Дж'зарго"),
  new Dwarf(10, "Золтан"),
  new Crossbowman(14, "Изран"),
  new Demiurge(18, "Толфдир")
];

const winner = play(players);

console.log(`Победитель: ${winner.name} (${winner.description})!`);