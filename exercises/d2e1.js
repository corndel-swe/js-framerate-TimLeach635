import express from 'express'

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'exercises/views')

app.get('/d2e1', (req, res) => {
  res.render('d2e1')
})

// TODO: Open d2e1.ejs and follow the instructions

export default app
