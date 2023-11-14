const express = require('express');
const {validateToDo} = require('../middlewares/todo');
const todoController = require("../controllers/todo");

const todoRouter = express.Router();

todoRouter.get('/', todoController.getAll);
todoRouter.post('/', validateToDo, todoController.create);
todoRouter.get('/:id', todoController.getById);
todoRouter.patch('/:id', todoController.update);
todoRouter.delete('/:id', todoController.remove);

module.exports = todoRouter;