interface Compose<A, B, C> {
  f2: (value: B) => C
  f1: (value: A) => B
}

function compose<A, B, C>({ f1, f2 }: Compose<A, B, C>): (value: A) => C {
  return (value) => f2(f1(value))
}

// This a pure functions that does not mutate the original value
// Function to apply a discount to a price
function applyDiscount(price: number): number {
  const discount = 0.9 // 10% discount
  return price * discount
}

// Function to format a price as a string with a currency symbol
function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`
}

// Compose both functions
const formatDiscountedPrice = compose<number, number, string>({
  f1: applyDiscount,
  f2: formatPrice,
})

// Use the composed function to format a discounted price
const originalPrice = 49.99
const result = formatDiscountedPrice(originalPrice)

console.log(result) // "$44.99"
