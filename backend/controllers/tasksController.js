const express = require('express');
const tasks = express.Router();
const {getAllTasks, getTask, createTask, updateTask, deleteTask} = require('../queries/tasks')
const {checkDescription} = require('../validation/checkTasks');



// index
tasks.get('/', async (req, res) => {

    const allTasks = await getAllTasks()

    if(allTasks[0]){
        res.status(200).json(allTasks)
    }else{
        res.status(500).json({error: 'server error'})
    }
})

// show
tasks.get('/:id', async (req, res) => {

    const {id} = req.params;
    const oneTask = await getTask(id)

    if(!oneTask.message){
        res.status(200).json(oneTask)
    }else{
        res.status(404).json({error: 'task not found'})
    }
})

// create
tasks.post('/', checkDescription, async (req, res) => {
    try {
        const task = await createTask(req.body);
        res.status(201).json(task)
    } catch (error) {
        res.status(400).json({error: 'Unable to add new task'})
    }
})


// update

tasks.put('/:id', checkDescription, async (req, res) => {
    try {
        const {id} = req.params;
        const updatedTask = await updateTask(id, req.body)

        if (updatedTask.id) {
         res.status(200).json(updatedTask)
        } else {
            res.status(404).json({error: "Task not found"});
        }
    } catch (error) {
        res.status(404).json({error: "Invalid request"})
    }
})


// delete

tasks.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const deletedTask = await deleteTask(id)

        if(deletedTask.id){
            res.status(200).json(deletedTask)
        }else{
            res.status(402).json({error: "Task cannot be deleted"})
        }
    } catch (error) {
        res.status(402).json({error: "Invalid request"})
    }
})

module.exports = tasks