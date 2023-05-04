var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const todosRouter = require('./routes/todos')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
console.log('Why hello there')

// res.locals is a way to send vars to templates (time in res.locals.time should be called time in todos/index. kale soup here should be called kale soup there. it is just a vars)
res.locals.time = new Date().toLocaleTimeString()
// {time : 11:15}

// to move to the next `app.use` in our flow of this file we need to call next and invoke it
 next()
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))

app.use('/', indexRouter);
app.use('/users', usersRouter);
// Best practice is to name your router start here
app.use('/todos', todosRouter)

// app.get('/hello', function () {
//   // code doing it's do
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
