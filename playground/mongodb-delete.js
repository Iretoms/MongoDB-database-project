//const MongoClient= require('mongodb').MongoClient
const{MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if (err) {
 return  console.log('Unable to connect to MongoDB Server');
}
console.log('Connected to MongoDB Server');

//deleteMany
// db.collection('Users').deleteMany({name:'Iretoms'}).then((result)=>{
//   console.log(result);
//  })

//deleteOne
// db.collection('Todo').deleteOne({text:'eat lunch'}).then((result)=>{
//   console.log(result);
// })

//findOneAndDelete
db.collection('Users').findOneAndDelete({
  _id: new ObjectID("5f0e17878baeb3080dfb834e")
}).then((result)=>{
  console.log(result);
})

//db.close()
})
