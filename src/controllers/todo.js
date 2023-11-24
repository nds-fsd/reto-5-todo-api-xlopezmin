const express = require('express');
const todoData = require('../data/index');

const getAll = (req, res) => {
    if (Object.keys(req.query).length > 0) {
        const response = todoData.todos.find( (element) => {
            return element.done = req.query.done;
        });
        res.status(200).json(response);
    } else {
        res.status(200).json(todoData.todos);
    }    
}

const create = (req, res) => {
    const ids = todoData.todos.map( (element) => {
        return element.id;
    } );
    const id = Math.max(...ids);
    
    const todo = req.body;
    todo.id = id + 1;

    todoData.todos.push(todo);
    res.status(201).json(todo);
}

const getById = (req, res) => {
    const todo = todoData.todos.find( (element) => {
        return element.id === Number(req.params.id);
    } );
    
    if (todo) res.status(200).json(todo)
    else res.status(404).send();
}

const update = (req, res) => {
    
    const todoRequest = req.body;

    let todoResponse = todoData.todos.find( (element) => {
        return element.id === Number(req.params.id);
    } );

    if (todoResponse) {
        Object.assign(todoResponse, todoRequest);
        console.log("todo.update(200):", todoRequest, todoResponse);
        res.status(200).json(todoResponse);
    } 
    else {
        res.status(404).send();
    }
}

const remove = (req, res) => {
    if (req.params.id !== "") {
        const index = todoData.todos.findIndex( (element) => {
            return element.id === Number(req.params.id);
        } );
    
        if (index >= 0) {
            todoData.todos.splice(index, 1);
            res.status(204).send();
        } 
        else {
            res.status(404).send();
        }
    } else {
        res.status(400).send();
    }
}

module.exports = { getAll, create, getById, update, remove };

