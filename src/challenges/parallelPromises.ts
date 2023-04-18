const testOne = new Promise((resolve, reject) => {
  resolve('test one')
})

const testTwo = new Promise((resolve, reject) => {
  resolve('test two')
})

const testThree = new Promise((resolve, reject) => {
  resolve('test three')
})

async function parallelExecution() {
  console.time('promise')
  await Promise.all([testOne, testTwo, testThree])
  console.timeEnd('promise')
}

parallelExecution()
