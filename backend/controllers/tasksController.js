const express = require('express');
const tasks = express.Router();
const {getAllTasks, getTask} = require('../queries/tasks')

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


// update


// delete

module.exports = tasks