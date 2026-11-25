const Todo = require('../models/todoModels');

exports.getAllTodos = async(req,res) => {
    try{
        const task = await Todo.find().sort({ createdAt: -1});
        res.json(task);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.getTodo = async(req,res) => {
    try {
        const task = await Todo.findById(req.params.id);
        if(!task) {
            res.status(404).json({message: 'Does not exist'});
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.createTodo = async(req,res) => {
    try {
        const task = await new Todo({
            title: req.body.title,
            description: req.body.description,
        });

        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.updateTodo = async (req,res) => {
    try {
        const task = await Todo.findById(req.params.id);
        if(!task) {
            res.status(404).json({message: 'Does not exist'});
        }
        task.title = req.body.title || task.title;
        task.description = req.body.description !== undefined ? req.body.description : task.description;
        task.isCompleted = req.body.isCompleted !== undefined ? req.body.isCompleted : task.isCompleted;
        task.updatedAt = new Date();
        const updateTask = await task.save();
        res.json(updateTask);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.toggleComplete = async (req,res) => {
    try {
        const task = await Todo.findById(req.params.id);
        if(!task) {
            res.status(404).json({message: 'Does not exist'});
        }
        task.isCompleted = !task.isCompleted;
        task.updatedAt = Date.now();
        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.deleteTodo = async (req,res) => {
    try {
        const task = await Todo.findByIdAndDelete(req.params.id);
        if(!task) {
            res.status(404).json({message: 'Does not exist'});
        }
        res.json({message: 'Deleted Successfully'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}