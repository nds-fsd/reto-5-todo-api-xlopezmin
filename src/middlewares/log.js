const logData = require('../data/log');

const addLog = (req, res, next) => {
    logData.log.push({method: req.method, 
                        url: req.url, 
                        params: req.params, 
                        query: req.query, 
                        body: req.body,
                        requestInstant: new Date() });
    next();
}

module.exports = {
    addLog
}
