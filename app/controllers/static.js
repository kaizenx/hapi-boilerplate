var Path = require('path');

module.exports = function(server) {
    return {
        method: ['GET'],
        path: '/static/{path*}',
        config: {
            description: 'Static assets',
            auth: false,
            cache: {
                expiresIn: server.settings.app.get('cache.ttl.static')
            },
            handler: {
                directory: {
                    path: Path.join(server.settings.app.get('path.root'), server.settings.app.get('path.static.dist')),
                    index: false
                }
            }
        }
    }
};
