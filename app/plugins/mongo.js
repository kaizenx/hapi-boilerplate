/* @todo: get models from config */

module.exports = {
    register: require('hapi-mongo-models'),
    options: {
        mongodb: {
            url: 'mongodb://localhost:27017/hapi-mongo-models-test',
            settings: {}
        },
        autoIndex: false,
        models: {
            Users: './app/models/user.js'
        }
    }
};
