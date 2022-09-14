const express = require('express')
const todoRouter = express.Router()
const {v4: uuid4} = require("uuid")

const todos = [
    {
        title: "Gettum Firewood",
        description: "Squuaaawww, gettum firewood!",
        assignedBy: "Heap Big Chief's Wife",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid4()
    },
    {
        title: "Never Grow Up",
        description: "We wanna be like Peter Pan...",
        assignedBy: "Peter Pan",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid4()
    },
    {
        title: "Kill Wendy",
        description: "Get that $%&*) away from Peter...",
        assignedBy: "Tinkerbell",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid4()
    },
    {
        title: "Get Revenge on Pan",
        description: "If it's the last thing you do...",
        assignedBy: "Captain Hook",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid4()
    },
    {
        title: "Eat a nice brisket",
        description: "There's just no telling when you'll eat another one as good as this, Captain!",
        assignedBy: "Smee",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuid4()
    }
]

//ROUTES

//GET ALL

todoRouter.get("/", (req, res) => {
    res.send(todos)
})

//GET ONE

todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

//GET BY NAME

todoRouter.get("/search/name", (req, res) => {
    const name = req.query.name
    const filteredtodos = todos.filter(todo => todo.name === name)
    res.send(filteredtodos)
})

//POST

todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuid4()
    console.log(newTodo)
    todos.push(newTodo)
    res.send(`Successfully added ${newTodo.title} to the database!`)
})

//PUT

todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updateObject = req.body
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], updateObject)
    res.send(updatedTodo)
})

//DELETE
 
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send(`Successfully removed from the database!`)
})

module.exports = todoRouter