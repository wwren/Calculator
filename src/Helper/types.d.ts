// export type NumberKeys = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |9;
// export const NumberKeys = Array.from(Array(9).keys()) as const
export type MathKeys = "minus" | "plus" | "divide" | "multiple";
export interface Evaluation {
  displayNum: number;
}
