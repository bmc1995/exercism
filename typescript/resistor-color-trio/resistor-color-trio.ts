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

const prefixer = (scaleFactor: number) => {
  return prefixes[Math.floor(scaleFactor / 3)] + "ohms";
};

const colorCode = (color: string) => {
  return COLORS.indexOf(color);
};

const colorCodeValue = (colorStrArr: number[]) => {
  const value = Number(
    `${colorStrArr[0]}${colorStrArr[1]}${"0".repeat(colorStrArr[2])}`
  );
  const scaleFactor = Math.floor(Math.log10(value));
  const metricNum = value.toString().slice(0, (scaleFactor % 3) + 1);

  return `${metricNum} ${prefixer(scaleFactor)}`;
};

export function decodedResistorValue(colorTrioArr: string[]) {
  const color1 = colorCode(colorTrioArr[0]);
  const color2 = colorCode(colorTrioArr[1]);
  const color3 = colorCode(colorTrioArr[2]);

  if (!color1 && !color2) return "0 ohms";

  const value = colorCodeValue([color1, color2, color3]);
  return value;
}
