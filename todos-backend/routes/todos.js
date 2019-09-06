const express = require("express");
const router = express.Router();
const Todo = require("../models/todos");

router.get("/", function(req, res, next) {
  Todo.find({})
    .then(todos => res.send(todos))
    .catch(err => next(err));
});

router.post("/", function(req, res, next) {
  Todo.create(req.body)
    .then(todo => res.status(201).send(todo))
    .catch(err => next(err));
});

router.put('/:id', function(req, res, next) {
    Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedTask => res.json(updatedTask))
    .then(data => console.log(data))
    .catch(err => next(err));
})

router.delete("/:id", function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id)
    .then(todo => res.send(todo))
    .catch(err => next(err));
});

module.exports = router;