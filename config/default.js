var Path = require('path');
var defer = require('config/defer').deferConfig;

var nodePackage = require('../package.json');

module.exports = {

    path: {
        root: Path.resolve(__dirname, '..'),
        app: defer(function (config) {
            return Path.join(config.path.root, 'app')
        }),

        static: {
            dev: 'static/dev',
            dist: 'static/dist'
        }
    },

    views: {
        path: defer(function (config) {
            return Path.join(config.path.app, 'views')
        }),
        layoutPath: defer(function (config) {
            return Path.join(config.path.app, 'views', 'layout')
        }),
        isCached: false,
        layout: true,
        layoutKeyword: 'partial',
        context: {}
    },

    name: nodePackage.name,
    version: nodePackage.version,
    port: process.env.PORT || 8000,

    cache: {
        ttl: {
            static: 86400 * 10
        }
    },

    auth: {
        default: 'session',

        strategies: {
            session: {
                handler: 'cookie',
                config: {
                    password: 'cookie_encryption_password',
                    cookie: 'sid-hapiboilerplate',
                    isSecure: false,
                    clearInvalid: true,
                    ttl: 86400
                }
            },

            facebook: {
                handler: 'bell',
                config: {
                    provider: 'facebook',
                    password: 'cookie_encryption_password',
                    isSecure: false
                }
            },

            google: {
                handler: 'bell',
                config: {
                    provider: 'google',
                    password: 'cookie_encryption_password',
                    clientId: '',
                    clientSecret: '',
                    isSecure: false
                }
            }
        }
    }
}