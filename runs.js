
const cypress = require('cypress')
const fs = require('fs-extra');

async function readResults(){
  cypress.run({
    spec: './cypress/integration/nav.spec.js'
  })
    .then((results) => {
      console.log(results)
      const resultsData = JSON.stringify(results)
      fs.writeFileSync(`./results.json`, resultsData)
   
    })
    .catch((err) => {
      console.error(err)
    })

}

async function readData(){
  const data = await readResults()
  fs.readFileSync('./results.json', (data) => {
    let suiteName = data
    console.log(suiteName)
  
  })
}

readData()








