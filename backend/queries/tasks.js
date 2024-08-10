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

// update


//delete



module.exports = {getAllTasks, getTask}