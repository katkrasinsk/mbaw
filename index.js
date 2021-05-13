const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/public/index.html')
})
app.get('/build/bundle.js', (req, res) => {
  res.sendFile(__dirname+'/public/build/bundle.js')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})