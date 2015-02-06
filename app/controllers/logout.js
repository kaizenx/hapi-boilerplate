module.exports = function(server) {
    return {
        method: ['GET'],
        path: '/logout',
        config: {
            handler: function(request, reply) {

                request.auth.session.clear();

                return reply.redirect('/');
            }
        }
    }
};
