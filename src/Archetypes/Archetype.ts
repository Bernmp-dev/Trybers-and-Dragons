import { EnergyType } from '../Energy';

abstract class Archetype {
  private _special: number;
  private _cost: number;
  private static ArchetypeInstances = 0;

  constructor(private _name: string) {
    this._special = 0;
    this._cost = 0;
    Archetype.ArchetypeInstances += 1;
  }

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    if (Archetype.ArchetypeInstances > 0) {
      return Archetype.ArchetypeInstances;
    }
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;