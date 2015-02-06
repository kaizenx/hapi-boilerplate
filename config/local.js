module.exports = {
    cache: {
        ttl : {
            static: 3600
        }
    },

    jscs: {
        preset: 'airbnb',
        errorFilter: './gulp/extras/jscs.filter.js',

        validateIndentation: 4
    },

    auth: {
        strategies: {
            session: {
                config: {
                    password: 'cookie_encryption_password'
                }
            },

            facebook: {
                config: {
                    password: 'cookie_encryption_password',
                    clientId: '560663340683411',
                    clientSecret: '6da199b7696b3550152f9b717e5ba328',
                }
            },

            google: {
                config: {
                    password: 'cookie_encryption_password',
                    clientId: '966757175092-21k70ur0ek3a17fohdgsf7q1iqisk4df.apps.googleusercontent.com',
                    clientSecret: 'UJovI_Yu2Uf_OzHmomKxfGcy',
                }
            }
        }
    }
}