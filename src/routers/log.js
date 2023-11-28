const express = require('express');
const logController = require("../controllers/log");

const logRouter = express.Router();
logRouter.get('/', logController.getAll);

module.exports = logRouter;