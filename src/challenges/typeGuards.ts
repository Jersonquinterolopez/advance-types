// In this example, we define a type guard function called isString that checks if a
// given value is of type string. The function returns a type predicate value is string,
// which narrows down the type of the value parameter within the scope of the function.

const isString = (value: any): value is string => {
  return typeof value === 'string'
}

const isNumber = (value: any): value is number => {
  return typeof value === 'number'
}

function processValue(value: string | number) {
  if (isString(value)) {
    console.log(`The length of the string is: ${value.length}`)
  } else if (isNumber(value)) {
    console.log(`The square of the number is: ${value * value}`)
  }
}

processValue(34)
