//making connection string
const apiBase = 'https://api.github.com'
const conStrBase = `/repos/${repo}`
const conStrParamsArr = makeConStringWithDate(period, date)

// console.dir(config.GITHUB_PERSONAL_ACCESS_TOKEN)

const conParams = {
  responseType: 'stream',
  baseURL: apiBase,
  headers: {
    Authorization: `token ${config.GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
}

let chunksLength = 0
let statsObj = {}
let resourceCounter = 0

async function fetchData(conStrParam) {
  //instantiating stream for filtering and writing data
  const createProcessingStream = require('./streamModifier')

  const input =
    conStrParam !== '/rate_limit' ? conStrBase + conStrParam : conStrParam

  await axios
    .get(input, conParams)
    .then(response => {
      resourceCounter++
      let contLength = response.headers['content-length']
      let processingStream = createProcessingStream(
        contLength,
        resourceCounter,
        chunksLength,
        statsObj,
        period,
      )
      response.data
        .pipe(parser())
        .pipe(resourceCounter !== 5 ? streamArray() : streamValues())
        .pipe(processingStream)
    })
    .catch(errorHandler)
}

async function init() {
  for (const conStrParam of conStrParamsArr) {
    await fetchData(conStrParam)
  }
}
