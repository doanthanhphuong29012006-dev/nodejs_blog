const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars.engine({
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})