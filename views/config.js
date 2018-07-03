// config.js
var config = {
    development: {
        port: 3000,
        // anything else
    },
    production: {
        port: process.env.PORT,
        // anything else
    }
};

module.exports = config;