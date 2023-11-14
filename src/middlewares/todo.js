const express = require('express');


function validateDate(todoDate) {
    const pattern = new RegExp("[0-9]{4}-[0-9]{2}-[0-9]{2}");
    // const pattern = new RegExp("^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$");  -- este comentario es para consultar con los profes
    return pattern.test(todoDate);
}

function validateDone(done) {
    return (String(done).toLowerCase() === "false" || String(done).toLowerCase() === "true");
}


const validateToDo = (req, res, next) => {
    const todo = req.body;

    if (todo.text === undefined || todo.text.length === 0) {
        res.status(400).send({message: "text required"});
        return;
    }
    if (todo.fecha === undefined || todo.fecha.length === 0) {
        res.status(400).send({message: "date required"});
        return;
    }
    if (!validateDate(todo.fecha)) {
        res.status(400).send({message: "invalid date"});
        return;
    }
    if (todo.done === undefined || todo.done.length === 0) {
        res.status(400).send({message: "done required"});
        return;
    }
    if (!validateDone(todo.done) || !(typeof(todo.done) === "boolean")){
        res.status(400).send({message: "invalid done"});
        return;
    }

    next();
}

module.exports = {
    validateToDo
}