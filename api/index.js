const express = require('express')
const app = express()

const ping = require('./ping')
app.use(ping)

if (require.main === module) {
  const port = 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

module.exports = app