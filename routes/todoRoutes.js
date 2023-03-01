const { getAllTodos, addTodo, updateTodo, deleteTodo } = require("../controller/todoController")

const router = require("express").Router()
const { body } = require("express-validator")
router
    .get("/", getAllTodos)
    .post("/add-todo", addTodo)
    // .post("/add-todo",
    //     [
    //         body("task", "Task must  be more than 10 chars").isLength({ min: 10 }),
    //         body("priority", "Priority must between 1 to 3").isLength({ min: 1, max: 3 }),
    //     ]
    //     , addTodo)
    .put("/modify/:tid", updateTodo)
    .delete("/destroy/:todoId", deleteTodo)
module.exports = router
