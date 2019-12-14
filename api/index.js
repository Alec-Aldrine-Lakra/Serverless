const mongoose = require('mongoose');
const uuid = require('uuid/v1');

module.exports = (req, res) => {
  console.log(uuid());
  let url = 'mongodb+srv://melo_alec:AQrIy7ls9MhSOV6F@mflix-jx4le.mongodb.net/test?retryWrites=true&w=majority';
  
  mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true }).then(() => {
    console.log('Connected')
  }).catch(err => {
    console.log('connect: error')
  })

  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  })
}