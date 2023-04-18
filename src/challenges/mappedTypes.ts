// Mapped Types

type Readonly<T> = {
  readonly [P in keyof T]: T[P]
}

interface Point {
  x: number
  y: number
}

type ReadonlyPoint = Readonly<Point>

const regularPoint: Point = {
  x: 5,
  y: 10,
}

const readonlyPoint: ReadonlyPoint = {
  x: 20,
  y: 30,
}

const point: ReadonlyPoint = {
  x: 1,
  y: 2,
}

// TS Error - Cannot assign to 'x' because it is a read-only property.
// point.x = 4

regularPoint.x = 15 // This works as 'x' is mutable in the 'Point' interface
console.log(regularPoint) // Output: { x: 15, y: 10 }

// readonlyPoint.x = 25; // Error: Cannot assign to 'x' because it is a read-only property
console.log(readonlyPoint) // Output: { x: 20, y: 30 }

function movePoint(p: Point, dx: number, dy: number): Point {
  return { x: p.x + dx, y: p.y + dy }
}

const movedRegularPoint = movePoint(regularPoint, 3, 4)
console.log(movedRegularPoint) // Output: { x: 18, y: 14 }

// const movedReadonlyPoint = movePoint(readonlyPoint, 3, 4); // Error: Argument of type 'ReadonlyPoint' is not assignable to parameter of type 'Point'

console.log(point)
