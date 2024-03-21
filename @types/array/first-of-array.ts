
type FirstOfArray<T extends any[]> = T['length'] extends 0 ? never : T[0];

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = []

type head1 = FirstOfArray<arr1> // expected to be 'a'
type head2 = FirstOfArray<arr2> // expected to be 3
type head3 = FirstOfArray<arr3> // expected to be never
