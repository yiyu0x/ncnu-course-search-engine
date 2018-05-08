// config.js
var config = {
    development: {
        port: 3000,
        // anything else
    },
    production: {
        port: process.env.PORT || config.port,
        // anything else
    }
};

module.exports = config;