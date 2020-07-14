//const MongoClient= require('mongodb').MongoClient
const{MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if (err) {
 return  console.log('Unable to connect to MongoDB Server');
}
console.log('Connected to MongoDB Server');

// db.collection('Todo').findOneAndUpdate({
//   _id: new ObjectID("5f0e143e8baeb3080dfb8229")
// },{
//   $set:{
//     completed:true
//   }
// },{
//    returnOriginal: false
// }).then((result)=>{
//   console.log(result);
// })
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("5f0e17a28baeb3080dfb835a")
},{
  $set:{
    name:'Atilola'
  },
  $inc:{
    age: 1
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
})


//db.close()
})
