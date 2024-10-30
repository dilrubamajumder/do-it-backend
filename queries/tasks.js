const db = require('../db/dbConfig');

//
const getAllTasks = async () => {
    try {
        const allTasks = await db.any('SELECT * FROM tasks');
        return allTasks
    } catch (error) {
        return error
    }
};

// show

const getTask = async (id) => {
    try{
        const oneTask = await db.one('SELECT * FROM tasks WHERE id=$1', id)
        return oneTask

    }catch(error){
        return error
    }
};

// create

const createTask = async (task) =>{
    try {
        const newTask = await db.one(
            'INSERT INTO tasks (description, due_date, status) VALUES ($1, $2, $3) RETURNING *',
            [
                task.description, 
                task.due_date, 
                task.status
            ]
        );
        return newTask

    } catch (error) {
        return error
    }
}

// update

const updateTask = async(id, task) => {
    try {
        const changedTask = await db.one(
            'UPDATE tasks SET description=$1, due_date=$2, status=$3 WHERE id=$4 RETURNING *',
            [
                task.description, 
                task.due_date, 
                task.status, 
                id
            ]
        );
        return changedTask

    } catch (error) {
        return error
    }
}


//delete
const deleteTask = async(id) =>{
    try {
        const deletedTask = await db.one(
            'DELETE FROM tasks WHERE id=$1 RETURNING *',
            id
        )
        return deletedTask
    } catch (error) {
        return error
    }
}


module.exports = {
    getAllTasks, 
    getTask, 
    createTask, 
    updateTask,
    deleteTask
}