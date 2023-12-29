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
const colorCode = (color: string) => {
  return COLORS.indexOf(color);
};
export function decodedValue(colorDuoArr: string[]) {
  const color1 = colorCode(colorDuoArr[0]);
  const color2 = colorCode(colorDuoArr[1]);
  return Number(`${color1}${color2}`);
}
