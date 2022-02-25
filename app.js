const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('template', {
    meta: {
      title: "Web boilerplate",
      description: "Web boilerplate with express + pug + vanilla javascript"
    }
  })
})
app.get('/about', (req, res) => {
  res.render('pages/about')
})
app.get('/listing', (req, res) => {
  res.render('pages/listing')
})
app.get('/detail/:', (req, res) => {
  res.render('pages/single')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
