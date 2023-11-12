//importamos el fichero con los datos que necesita nuestro Router
// const {todos} = require('../data/index');

const express = require('express');
const todoController = require("../controllers/todo");

const todoRouter = express.Router();

todoRouter.get('/todo', todoController.getAll);
todoRouter.post('/todo', todoController.create);
todoRouter.get('/todo/:id', todoController.getById);
todoRouter.patch('/todo/:id', todoController.update);
todoRouter.delete('/todo/:id', todoController.remove);

module.exports = todoRouter;