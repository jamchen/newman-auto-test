var express = require('express')
var app = express()

function errorHandler (err, req, res, next) {
  console.log(err);
  res.status(500);
  res.send({ 
    error: err.message,
  });
}
app.use(errorHandler);

app.get('/add', function (req, res, next) {
  try {
    res.send({
      answer: parseInt(req.query.a) + parseInt(req.query.b),
    });
  } catch(err) {
    next(err);
  }
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port ', port);
});