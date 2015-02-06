var Hapi = require('hapi');

module.exports = function(config) {
    var server = new Hapi.Server({ app: config });

    server.connection({
        host: 'localhost',
        port: config.get('port')
    });

    return server;
};
