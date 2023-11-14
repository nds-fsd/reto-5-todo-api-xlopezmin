const express = require('express');
const logMiddleware = require('../middlewares/log');
const todoRouter = require('./todo');

const router = express.Router();

router.use('/', logMiddleware.addLog);
router.use('/todo', todoRouter);

module.exports = router;
