type Split<S extends string, SEP extends string> = string extends S
  ? string[]
  : S extends `${infer A}${SEP}${infer B}`
  ? [A, ...(B extends "" ? [] : Split<B, SEP>)]
  : SEP extends ""
  ? []
  : [S];

type result = Split<"Hi! How are you?", " ">; // should be ['Hi!', 'How', 'are', 'you?']
