const express = require('express')
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')


// rutas
app.get('/', function (req, res) {
  res.send('Hello word');
});


//middleware 
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// middleware vue router history
const history = require('connect-history-api-fallback')
app.use(express.static(path.join(__dirname, 'public')))
app.use(history());

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
  console.log('Example app listening on port'+ app.get('puerto'));
}); 