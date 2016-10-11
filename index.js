const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('port',(process.env.PORT||5000))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('Hello Node Heroku,Express');
});
app.listen(app.get('port'),function(){
  console.log('runing on port',app.get('port'));
})
//1
console.log("Hello_Node");