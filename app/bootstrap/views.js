module.exports = function(server) {

    var config = require('lodash').extend({engines: { html: require('handlebars') }}, server.settings.app.get('views'));

    server.views(config);
};
