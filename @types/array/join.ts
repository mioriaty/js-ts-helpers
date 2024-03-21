type Join<T extends string[], U extends string | number> =
  T extends [infer L extends string, ...infer R extends string[]]
    ? R['length'] extends 0
      ? L
      : `${L}${U}${Join<R, U>}`
    : ''

type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
type Res3 = Join<["o"], "u">; // expected to be 'o'