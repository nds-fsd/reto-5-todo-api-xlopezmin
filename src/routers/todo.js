const express = require('express');
const {validatePostToDo, validateUpdateToDo} = require('../middlewares/todo');
const todoController = require("../controllers/todo");

const todoRouter = express.Router();

todoRouter.get('/', todoController.getAll);
todoRouter.post('/', validatePostToDo, todoController.create);
todoRouter.get('/:id', todoController.getById);
todoRouter.patch('/:id', validateUpdateToDo, todoController.update);
todoRouter.delete('/:id', todoController.remove);

module.exports = todoRouter;