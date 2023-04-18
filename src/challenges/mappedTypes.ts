// Mapped Types

type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

interface Point {
  x: number
  y: number
}

type ReadonlyPoint = Readonly<Point>

const point: ReadonlyPoint = {
  x: 1,
  y: 2,
}

// TS Error - Cannot assign to 'x' because it is a read-only property.
// point.x = 4

console.log(point)
