export type Prettify<T> = {
  [K in keyof T]: T[K];
} & NonNullable<unknown>;

interface Address {
  street: string;
  city: string;
}
interface Person {
  name: string;
  age: number;
  address: Address;
}

let person1: Person | null = null;
let person2: Prettify<Person> | null = null;
