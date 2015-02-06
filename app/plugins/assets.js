module.exports = {
    register: require('hapi-assets'),
    options: {
        development: {
            js: ['static/scripts/main.js'],
            css: ['static/styles/main.css']
        },
        production: {
            js: ['static/scripts/main.min.js'],
            css: ['static/styles/main.min.css']
        }
    }
}, function(err) {
    if (err) {
        console.log('Failed loading plugin hapi-assets');
    }
}
