export function isPangram(str: string) {
  return new Set(str.toLowerCase().replace(/[^a-z]/g, "")).size === 26;
}
