const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routes = require('./routes/index')
const users = require('./routes/user')

const app = express()

const env = process.env.NODE_ENV || 'development'
app.locals.ENV = env
app.locals.ENV_DEVELOPMENT = env == 'development'

// database setup
mongoose.connect('mongodb://localhost/test', { useMongoClient: true })
mongoose.Promise = global.Promise

const User = require('./models/User')
const Poll = require('./models/Poll')
const Answer = require('./models/Answer')

// view engine setup

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)
app.use('/users', users)

app.post('/poll', (req, res, next) => {
  const poll = new Poll({ title: '<title here>' })
})

/// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err,
      title: 'error',
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {},
    title: 'error',
  })
})

module.exports = app
