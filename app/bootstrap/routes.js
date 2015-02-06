var _ = require('lodash');

module.exports = function(server) {

    var routes      = [];
    var controllers = require('require-dir')('../controllers');

    _.each(controllers, function(controller) {
        if (_.isFunction(controller)) {
            routes.push(controller(server));
        }
    });

    server.route(routes);
};
