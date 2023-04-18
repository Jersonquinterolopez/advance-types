interface Person {
  name: string
  age: number
  email: string
}

// This type makes all Person types optional
type PartialPerson = Partial<Person>

const partialPerson: PartialPerson = {
  name: 'John Doe',
}

// This type makes all Person types readOnly
type ReadonlyPerson = Readonly<Person>

const readonlyPerson: ReadonlyPerson = {
  name: 'Jane Doe',
  age: 30,
  email: 'jane@example.com',
}

// readonlyPerson.age = 31; // ❌ Error: Cannot assign to 'age' because it is a read-only property

// This type picks specific properties of the Person in this case "age" and "email"
type NameAndAge = Pick<Person, 'name' | 'age'>

const nameAndAge: NameAndAge = {
  name: 'John Smith',
  age: 25,
  // email: 'jane@example.com' // ❌ Error
}

// This type omit specific properties of the Person. in this case the "email"
type WithoutEmail = Omit<Person, 'email'>

const withoutEmail: WithoutEmail = {
  name: 'Jane Smith',
  age: 28,
  // email: "solorsanolopez" // ❌ Error
}
