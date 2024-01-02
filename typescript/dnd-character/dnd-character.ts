export class DnDCharacter {
  public static generateAbilityScore(): number {
    throw new Error("Remove this statement and implement this function");
  }

  public static getModifierFor(abilityValue: number): number {
    // subtract 10, div 2, round down
    return Math.floor((abilityValue - 10) / 2);
  }

  public hitpoints: number = 0;
}
