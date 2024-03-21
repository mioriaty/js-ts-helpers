type Options<D, C, M> = {
  data: (this: never) => D;
  computed: { [K in keyof C]: (this: D, ...args: unknown[]) => C[K] };
  methods: {
    [K in keyof M]: (
      this: D & C & { [K in keyof M]: (...args: unknown[]) => M[K] }
    ) => M[K];
  };
};

declare function SimpleVue<
  D extends Record<string, unknown>,
  C extends Record<string, unknown>,
  M extends Record<string, unknown>
>(options: Options<D, C, M>): any;

const instance = SimpleVue({
  data() {
    return {
      lastName: "Hello",
      firstName: "World",
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
  },
  methods: {
    sayHello() {
      console.log("Hello", this.fullName.toUpperCase());
    },
  },
});
