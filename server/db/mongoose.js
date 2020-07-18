const mongoose = require('mongoose');

mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true ,useUnifiedTopology: true}).
then(()=>{
console.log('Connected to Database');
}).
catch((err)=>{
  console.log('Could not connect to Database',err);
});

module.exports={mongoose}
