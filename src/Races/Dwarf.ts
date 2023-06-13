import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _orcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._orcInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._orcInstances;
  }
}

export default Dwarf;
