var db = require("../models")
exports.getTodos = function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos)
    })
    .catch(function(error){
      res.send(error);  
    })
}    

exports.createTodo =  function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.json(newTodo); 
    })
    .catch(function(error){
        res.send(error);
    })
}

exports.getTodo = function(req,res){
 db.Todo.findById(req.params.todoId)
 .then(function(foundTodo){
     res.json(foundTodo);
 })
 .catch(function(error){
     console.log(error);
 })
}

exports.updateTodo = function(req, res){
   db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
   .then(function(todo){
       res.json(todo);
   })
   .catch(function(error) {
       console.log(error);
   })
}

exports.deleteTodo =  function(req,res){
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.send("deleted as you wanted")
    })
    .catch(function(error){
        console.log(error)
    })
}
module.exports = exports;