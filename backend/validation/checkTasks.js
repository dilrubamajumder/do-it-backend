const checkDescription = (req, res, next) => {
    if(!req.body.task || req.body.task.trim() === ''){
        res.status(400).json({error: "description is required"})

    }else{
        next();        
    }
}

//const checkStatus

module.exports = {checkDescription}