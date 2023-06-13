import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _playerTurn: Fighter;

  constructor(player: Fighter, private player2: Fighter) {
    super(player);
    this._playerTurn = player;
  }

  switchTurn(): void {
    this._playerTurn = (this._playerTurn === this.player)
      ? this.player2 : this.player;
  }

  fight(): number {
    do {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
      this.switchTurn();
    } while (this._playerTurn.lifePoints > -1);

    return super.fight();
  }
}

export default PVP;