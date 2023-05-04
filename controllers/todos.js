// We have the `s` here because there will be many actions

// require in my Todo
// Because this is a model best practice is to name it uppercase
// We don't need the `.js` here because we are running this in a Node env. Node will assume that all files it is being given are `.js` files
const Todo = require('../models/todo')

function index(req, res) {
    res.render('todos/index', {
        todos: Todo.getAll(),
        title: 'All To-Dos'
    })
    // {
    //     todos: [...todos]
    // }
}

function show(req, res) {
    // console.log(req.params)
    res.render('todos/show', {
        todo: Todo.getOne(req.params.id),
        title: 'To-Do Details'
    })
}

function newTodo(req, res, )  {
    res.render('todos/new', { title: 'New To-do' })
}

function create(req, res) {
    console.log(req.body)
    Todo.create(req.body)
    res.redirect('/todos')
}

function deleteTodo(req, res)  {
    Todo.deleteOne(req.params.id)
    res.redirect('/todos')
}
function edit (req, res)  {
    const todo = Todo.getOne(req.params.id);
    res.render('todos/edit', {
        title: 'Edit To-Do',
        todo
    });
}

function update (req, res)  {
    req.body.done = !!req.body.done;
    Todo.update(req.params.id, req.body);
    res.redirect(`/todos/${req.params.id}`);
}

module.exports = {
    index,
    show,
    newTodo,
    create,
    deleteTodo,
    edit,
    update,
}