const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || '9VIHxT7S#AAjNCJqH5RS31yCKF73VnImJm9CXOLtGWP3NJYnL-Ew,
PORT: process.env.PORT || '3000',
MONGODB: process.env.MONGODB || 'mongodb://mongo:LQKsGHlAcVyEHpAiVLcSUGmGMdIdjIaD@interchange.proxy.rlwy.net:36972'
};
