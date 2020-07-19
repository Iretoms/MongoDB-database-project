const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')


let id = '5f0f6db42e01d831a000a7d6'

// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos', todos);
// })
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log('Todo', todo);
// })

// Todo.findById(id).then((todo)=>{
//   if (!todo) {
//   return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e)=>console.log(e))

User.findById(id).then((user)=>{
  if (!user) {
    return console.log('Id not found');
  };
  console.log('User by Id',user);
})
