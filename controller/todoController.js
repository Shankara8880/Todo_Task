const Todo = require("../model/Todo")


/*
    add         create
    get         find
    update      findByIdAndUpdate
    delete      findByIdAndDelete
*/
// const { validationResult } = require("express-validator")
exports.getAllTodos = async (req, res) => {
    try {
        const data = await Todo.find()
        res.json({
            message: "Todo Fetch Success",
            result: data
        })
    } catch (error) {
        console.log(error)
        res.json({ message: "error ", error })
    }
}
exports.addTodo = async (req, res) => {
    try {
        // const { errors } = validationResult(req)
        // // console.log(err)
        // if (errors.length > 0) {
        //     let msg = ""
        //     errors.forEach(err => {
        //         msg += `${err.value}:${err.msg}`
        //     });
        //     return res.json({
        //         message: msg
        //     })
        // }
        console.log(req.body);
        const result = await Todo.create(req.body)
        res.json({
            message: "Create Todo  Success",
        })
    } catch (error) {
        console.log(error)
        res.json({ message: "error ", error })
    }

}
exports.updateTodo = async (req, res) => {
    try {
        const { tid } = req.params
        const result = await Todo.findByIdAndUpdate(tid, req.body, {
            new: true
        })
        res.json({
            message: "Todo Modify Success",
            result
        })
    } catch (error) {
        console.log(error)
        res.json({ message: "error ", error })
    }
}
exports.deleteTodo = async (req, res) => {
    try {
        const { todoId } = req.params
        const result = await Todo.findByIdAndDelete(todoId)
        res.json({
            message: "todo Deleted"
        })
    } catch (error) {
        res.json({
            message: "Error ", error
        })
    }
}