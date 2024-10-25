/**
 * Given a generic tuple type T extends unknown[], write a type which produces all permutations of T as a union.
 * 
 * PermutationsOfTuple<[1, number, unknown]>
 * Should return:
 * | [1, number, unknown]
 * | [1, unknown, number]
 * | [number, 1, unknown]
 * | [unknown, 1, number]
 * | [number, unknown, 1]
 * | [unknown, number ,1]
 */ 

type Insert<T extends unknown[], U> = T extends [infer F, ...infer L] 
  ? [F, U, ...L] | [F, ...Insert<L, U>]
  : [U];

type PermutationsOfTuple<T extends unknown[], R extends unknown[] = []> = T extends [infer F, ...infer L] 
  ? PermutationsOfTuple<L, Insert<R, F> | [F, ...R]>
  : [R];


type Test = PermutationsOfTuple<[1, number, unknown]>
