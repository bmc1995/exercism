const earthYearSeconds = 31557600;
const orbitalPeriods = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

export function age(
  planet: keyof typeof orbitalPeriods,
  seconds: number
): number {
  const yearOnEarthSec = orbitalPeriods[planet] * earthYearSeconds;
  return +(seconds / yearOnEarthSec).toFixed(2);
}
