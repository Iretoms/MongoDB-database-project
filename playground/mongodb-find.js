//const MongoClient= require('mongodb').MongoClient
const{MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if (err) {
 return  console.log('Unable to connect to MongoDB Server');
}
console.log('Connected to MongoDB Server');

db.collection('Todo').find({
  completed:true
}).toArray().then((docs)=>{
  console.log('Todos');
  console.log(JSON.stringify(docs, undefined, 2));
},(err)=>{
  console.log('Unable to fetch Todos', err);
})
// db.collection('Todo').find().count ().then((count)=>{
//   console.log(`Todos count: ${count}`);
//
// },(err)=>{
//   console.log('Unable to fetch Todos', err);
// })

//db.close()
})
