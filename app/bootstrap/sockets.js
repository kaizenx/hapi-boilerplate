var Ws  = require('ws');
var _   = require('lodash');

module.exports = function(server) {

    var ws = new Ws.Server({ server: server.listener });

    ws.broadcast = function(data) {

        _.each(this.clients, function(client) {
            client.send(data);
        });
    };

    server.app.ws = ws;
};
