export function score(x: number, y: number): number {
  const outerRadius = 10;
  const midRadius = 5;
  const innerRadius = 1;

  const distance = Math.sqrt(x ** 2 + y ** 2);

  switch (true) {
    case distance >= 0 && distance <= innerRadius:
      return 10;
    case distance > innerRadius && distance <= midRadius:
      return 5;
    case distance > midRadius && distance <= outerRadius:
      return 1;
    default:
      return 0;
  }
}
