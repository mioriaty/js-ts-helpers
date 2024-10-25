type TypeProperty = 'string' | 'number' | 'boolean' | 'object' | 'array'

type Properties = {
  [K in string]?: JSONSchema
}

type JSONSchema = {
  type: TypeProperty
  enum?: unknown[]
  items?: JSONSchema,
  properties?: Properties
  required?: string[]
}

type Primitive = {
  string: string
  boolean: boolean
  number: number
}

type JSONSchema2TS<T extends JSONSchema> = T['enum'] extends any[] ? T['enum'][number] : T['type'] extends keyof Primitive ? Primitive[T['type']] : T['type'] extends 'array' ? T['items'] extends JSONSchema ? JSONSchema2TS<T['items']>[] : unknown[] : T['type'] extends 'object' ? T['properties'] extends Properties ? Omit<{
  [K in Exclude<keyof T['properties'], T['required'] extends string[] ? T['required'][number] : never>]?: T['properties'][K] extends JSONSchema ? JSONSchema2TS<T['properties'][K]> : never
} & {
  [K in Extract<keyof T['properties'], T['required'] extends string[] ? T['required'][number] : never>]: T['properties'][K] extends JSONSchema ? JSONSchema2TS<T['properties'][K]> : never
}, never> : Record<string, unknown> : never