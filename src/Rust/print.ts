export function run() {
  function printOut(item: number[]) {
    for (const i of item) {
      console.log(i)
    }
  }

  const item = [1, 2, 3]

  printOut(item)
  printOut(item)
}

run()
