
type LastOfArray<T extends any[]> = T["length"] extends 0 ? never : [never, ...T][T["length"]];

type arr_1 = ['a', 'b', 'c']
type arr_2 = [3, 2, 1]

type tail1 = LastOfArray<arr_1> // expected to be 'c'
type tail2 = LastOfArray<arr_2> // expected to be 1