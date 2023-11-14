const express = require('express');
const logData = require('../data/log');

const getAll = (req, res) => {
    res.status(200).json(logData.log);
}

module.exports = { getAll };