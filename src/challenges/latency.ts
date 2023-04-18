const fetch = require('node-fetch')

// A helper function for sleeping
const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

async function timeRetrieve(url: string) {
  const start = Date.now()
  try {
    await fetch(url)
  } catch {
    return -1
  }
  return Date.now() - start
}

async function retrieveAll(urls: string[], sum: number[], count: number[]) {
  for (let index = 0; index < urls.length; index++) {
    const latency = await timeRetrieve(urls[index])
    if (latency < 0) {
      // this will remove the url from the array
      urls.splice(index, 1)
      index--
    } else {
      sum[index] += latency
      count[index]++
    }
  }
}

async function main() {
  let urls = process.argv.slice(2)

  const sum: number[] = []
  const count: number[] = []

  urls.forEach((value, index) => {
    sum[index] = 0
    count[index] = 0
  })

  for (let index = 0; index < 10; index++) {
    await retrieveAll(urls, sum, count)
    await sleep(1000)
  }

  urls.forEach((url, index) => {
    console.log(`${url}: ${sum[index] / count[index]}ms`)
  })

  console.log(sum, count)
}

main()

export {}
