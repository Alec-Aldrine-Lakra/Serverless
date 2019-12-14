const mongoose = require('mongoose');
const uuid = require('uuid/v1');

module.exports = (req, res) => {

  let message='';
  let url = 'mongodb+srv://melo_alec:AQrIy7ls9MhSOV6F@mflix-jx4le.mongodb.net/test?retryWrites=true&w=majority';
  
  mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => {
    message='Connected'
  }).catch(err => {
    message = 'Could Not Connect'
  })

  res.json({
    body: req.body,
    message: message,
    query: req.query,
    cookies: req.cookies
  })
  
}