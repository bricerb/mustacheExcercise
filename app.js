const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  res.render('todo',
  {list: [
    {item: 'Learn Node Basics', status: true},
    {item: 'Learn Express Basics', status: true},
    {item: 'Learn Mustache Basics', status: true},
    {item: 'Learn HTML Forms with Express', status: false},
    {item: 'Learn about authentication', status: false},
    {item: 'Learn how to connect with PostgreSQL', status: false},
    {item: 'Learn how to create databases', status: false},
    {item: 'Learn SQL', status: false},
    {item: 'Learn how to connect to PostgreSQL from Node', status: false},
    {item: 'Learn how to use Sequelize', status: false}
  ]});
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
