const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
const prefixes = ["", "kilo", "mega", "giga"];

const prefixer = (scaleFactor: number): string => {
  return prefixes[Math.floor(scaleFactor / 3)] + "ohms";
};

const colorCode = (color: string): number => {
  return COLORS.indexOf(color);
};

const colorCodeValue = (colorValArr: number[]): string => {
  const value = Number(
    `${colorValArr[0]}${colorValArr[1]}${"0".repeat(colorValArr[2])}`
  );
  let scaleFactor = value ? Math.floor(Math.log10(value)) : 0;

  const metricNum = value.toString().slice(0, (scaleFactor % 3) + 1);

  return `${metricNum} ${prefixer(scaleFactor)}`;
};

export function decodedResistorValue(colorTrioArr: string[]): string {
  const colorCodes = colorTrioArr.map(colorCode);
  const value = colorCodeValue(colorCodes);
  return value;
}
