var _ = require('lodash');

module.exports = function(server, cb) {

    var plugins = require('require-dir')('../plugins');

    server.register(_.map(plugins, function(value) {
        return value;
    }), cb);
};
