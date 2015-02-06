var bootstrap = require('require-dir')('./app/bootstrap');

var server = bootstrap.server(require('config'));

bootstrap.views(server);
bootstrap.hooks(server);

bootstrap.plugins(server, function(err) {

    if (err) {
        console.log('Failed loading plugin:', err);
    }

    bootstrap.strategies(server);
    bootstrap.routes(server);

    server.start(function() {

        bootstrap.sockets(server);

        console.log(server.settings.app.get('name') + ' started at ' + server.info.uri);
    });
});
