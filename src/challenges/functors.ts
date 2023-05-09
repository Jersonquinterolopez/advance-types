interface Functor<A> {
  value: A
  map<B>(this: Functor<A>, transform: (value: A) => B): Functor<B>
}

function createFunctor<A>(value: A): Functor<A> {
  return {
    value,
    map<B>(this: Functor<A>, transform: (value: A) => B): Functor<B> {
      return createFunctor(transform(this.value))
    },
  }
}

function sanitize(input: string): string {
  return input.replace(/[^\w\s]/gi, '')
}

function capitalizeFirstLetter(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1)
}

function appendSuffix(input: string): string {
  return `${input} - Processed`
}

const userInput = 'HeLlo, W@rld!'

const processedInput = createFunctor(userInput)
  .map(sanitize)
  .map(capitalizeFirstLetter)
  .map(appendSuffix).value

console.log(processedInput) // "Hello world - Processed"
