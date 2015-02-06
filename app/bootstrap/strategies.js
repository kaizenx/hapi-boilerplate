module.exports = function(server) {

    var strategies = server.settings.app.get('auth.strategies');

    require('lodash').each(strategies, function(strategy, name) {
        server.auth.strategy(
            name,
            strategy.handler,
            strategy.config
        );
    });

    /* default strategy to use */
    server.auth.default(server.settings.app.get('auth.default'));
};
