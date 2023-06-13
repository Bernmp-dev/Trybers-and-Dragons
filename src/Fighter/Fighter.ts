import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;

  special?(enemy: Fighter): void;
  levelUp(): void;
}

// export interface LifePoints {
//   lifePoints: number;
// }

// export interface Strength {
//   strength: number;
// }

// export interface Attack {
//   attack(enemy: Fighter | SimpleFighter): void;
// }

// export interface ReceivedDmg {
//   receiveDamage(attackPoints: number): void;
// }

export default Fighter;