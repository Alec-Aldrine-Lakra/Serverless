const mongoose = require('mongoose');
const uuid = require('uuid/v1');

let message='';
let url = 'mongodb+srv://melo_alec:AQrIy7ls9MhSOV6F@mflix-jx4le.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true }).then(() => {
  message = 'Connected';
  console.log(message);
}).catch(err => {
  message = 'Could Not Connect';
  console.log(message);
})


module.exports = (req, res) => {
  res.json({
    uid: uuid(),
    query: req.query,
    cookies: req.cookies
  })
}