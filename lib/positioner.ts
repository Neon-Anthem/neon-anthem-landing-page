/**
 * Lexicorp ordering: sort by length first, then alphabetically.
 * Order: a, b, ..., z, aa, ab, ..., zz, aaa, aab, ...
 */

export function comparePositions(a: string, b: string): number {
  if (a.length !== b.length) return a.length - b.length;
  return a < b ? -1 : a > b ? 1 : 0;
}

export function sortByPosition<T extends { position: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => comparePositions(a.position, b.position));
}

export function firstPosition(): string {
  return "a";
}

export function nextPosition(pos: string): string {
  const chars = pos.split("");
  for (let i = chars.length - 1; i >= 0; i--) {
    if (chars[i] !== "z") {
      chars[i] = String.fromCharCode(chars[i].charCodeAt(0) + 1);
      return chars.join("");
    }
    chars[i] = "a";
  }
  return "a".repeat(pos.length + 1);
}

export function positionAfter(items: { position: string }[]): string {
  if (items.length === 0) return firstPosition();
  const sorted = sortByPosition(items);
  return nextPosition(sorted[sorted.length - 1].position);
}
