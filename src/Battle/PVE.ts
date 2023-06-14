import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    player: Fighter,
    private monsters: (SimpleFighter | Fighter)[],
  ) {
    super(player);
  }

  battleResult(): boolean {
    const playerLost = this.player.lifePoints <= 0;
    const monstersLost = this.monsters
      .every(({ lifePoints }) => lifePoints <= 0);

    return playerLost || monstersLost;
  }

  target(): Fighter | SimpleFighter {
    const liveTargets = this.monsters
      .filter(({ lifePoints }) => lifePoints > 0);

    const target = liveTargets
      .reduce((a, c) => (c.lifePoints < a.lifePoints ? c : a));

    return target;
  }

  fight(): number {
    while (!this.battleResult()) {
      const target = this.target();

      this.player.attack(target);
      target.attack(this.player);
    }

    return super.fight();
  }
}

export default PVE;