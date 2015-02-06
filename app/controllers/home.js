module.exports = function(server) {
    return {
        method: ['GET'],
        path: '/',
        config: {
            description: 'Home page',
            auth: {
                mode: 'try'
            }
        },
        handler: function(request, reply) {
            return reply.view('index');
        }
    }
};
