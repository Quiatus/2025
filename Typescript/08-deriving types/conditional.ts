type StringArray = string[]
// type ElementType<T extends any[]> = T[number]

// type Example = ElementType<StringArray>

let text = 'tyrest'

type GetElementType<T> = T extends any[] ? T[number] : never

type Example1 = GetElementType<StringArray>
type Example2 = GetElementType<typeof text>