const checkDescription = (req, res, next) => {
    if (!req.body.description || req.body.description.trim() === '') {
        res.status(400).json({ error: "description is required" });
    } else {
        next();
    }
};


module.exports = { checkDescription };
