const express = require('express')
const router = express.Router()

const todoController = require('../controllers/todos')

// URL in the browser to localhost:3000/todos/kaleSoup
// GET request localhost:3000/todos
router.get('/', todoController.index)

// Needs to be between home '/', and ':id' because js is top down and if id is first the you will necer reach new
// localhost:3000/todos/new
router.get('/new', todoController.newTodo)

//localhost:3000/todos/123123123 would always run before new if placed above todos/new
// GET request localhost:3000/todos/125223
// Since this is a GET request we need to get the user `id` somehow. This how is with a url param
// We can name `:id` whatever we want just as long as we then refer to it as what we named it
// req.params.id

router.get('/:id', todoController.show)

// GET /todos/:id/edit
router.get('/:id/edit', todoController.edit)

router.post('/', todoController.create)

router.delete('/:id', todoController.deleteTodo)

// PUT /todos/:id

router.put('/:id', todoController.update)



// If there is only 1 export you don't need the object
module.exports = router

// GET - gives back information, Index show all data from a model, Show request show a single item from that model.

// GET - WE CANNOT SEND WHAT IS CALLED A BODY, we cannot accept user information

// PUT, PATCH - If we need to intake user information (ei. from a form) we need to have access to the body so we can send that information. We get access to the body when sending a put or patch


// DELETE