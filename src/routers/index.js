const express = require('express');
const logMiddleware = require('../middlewares/log');
const todoRouter = require('./todo');
const logRouter = require('./log');

const router = express.Router();

router.use('/', logMiddleware.addLog);
router.use('/todos', todoRouter);
router.use('/logs', logRouter);

module.exports = router;
