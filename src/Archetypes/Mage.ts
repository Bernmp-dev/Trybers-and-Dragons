import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _mageInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._mageInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    if (Mage._mageInstances > 0) {
      return Mage._mageInstances;
    }
    throw new Error('Not implemented');
  }
}