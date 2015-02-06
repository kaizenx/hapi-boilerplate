module.exports = function(server) {
    server.ext('onPreResponse', function(request, reply) {

        if (request.response.variety === 'view') {
            request.response.source.context = request.response.source.context || {};

            request.response.source.context.path            = request.path;
            request.response.source.context.auth            = request.auth;
            request.response.source.context.session         = request.session;

            request.response.source.context.isDevelopment   = (process.env.NODE_ENV === 'development');
        }

        reply.continue();
    });
}
