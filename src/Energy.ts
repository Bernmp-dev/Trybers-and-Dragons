export type EnergyType = {
  type_: 'mana' | 'stamina';
};

export default interface Energy {
  type_: EnergyType;
  amount: number;
}