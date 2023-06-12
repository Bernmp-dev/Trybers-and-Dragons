abstract class Race {
  private static racesInstace = 0;

  constructor(
    private _name: string,
    private _dexterity: number,
  ) {
    Race.racesInstace += 1;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    if (Race.racesInstace > 0) {
      return Race.racesInstace;
    }
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number;
}

export default Race;