const express = require('express');
const logMiddleware = require('../middlewares/log');
const todoRouter = require('./todo');
const logRouter = require('./log');

const router = express.Router();

router.use('/', logMiddleware.addLog);
router.use('/todo', todoRouter);
router.use('/log', logRouter);

module.exports = router;
