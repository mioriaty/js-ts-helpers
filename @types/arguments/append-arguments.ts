type AppendArguments<Fn, A> = Fn extends (...args: infer R) => infer T
  ? (...args: [...R, A]) => T
  : never;

type Fn = (a: number, b: string) => number;

type Result = AppendArguments<Fn, { name: string; isValidAge: boolean }>;
// Result: (a: number, b: string, x: { name: string; isValidAge: boolean }) => number
