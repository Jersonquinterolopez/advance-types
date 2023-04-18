// This contidional type is similar to the ternary operator. It will remove all the undefined or null from a type
type NonNullable<T> = T extends null | undefined ? never : T

// Let's define an example type
type ExampleType = string | number | null | undefined

// Use NonNullable to remove null and undefined from ExampleType
type NonNullableExampleType = NonNullable<ExampleType>

const validString: NonNullableExampleType = 'hello' // Ok
const validNumber: NonNullableExampleType = 42 // Ok

// Trying to assign null or undefined to NonNullableExampleType will result in a type error
// const inValidNull: NonNullableExampleType = null // ❌ Error
// const invalidUndefined: NonNullableExampleType = undefined // ❌ Error
