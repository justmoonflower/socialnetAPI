const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/socialnetAPI', {

  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})

mongoose.set("debug", true);

module.exports = mongoose.connection;