export function play(players){
  while (players.filter(player => !player.isDead()).length > 1){
    players.forEach(player => player.turn(players));
  }

  return players.find(player => !player.isDead());
  
}