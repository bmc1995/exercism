const complements: { [key: string]: string } = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

export function toRna(dnaSequence: string) {
  return dnaSequence
    .split("")
    .map((n) => {
      if (!complements[n]) {
        throw new Error("Invalid input DNA.");
      }
      return complements[n];
    })
    .join("");
}
