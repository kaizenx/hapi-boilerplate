module.exports = function(service) {
    return function() {
        return {
            method: ['GET'],
            path: ('/login/' + service),
            config: {
                auth: service,
                handler: function(request, reply) {

                    // Perform any account lookup or registration, setup local session,
                    // and redirect to the application. The third-party credentials are
                    // stored in request.auth.credentials. Any query parameters from
                    // the initial request are passed back via request.auth.credentials.query.

                    if (request.auth.isAuthenticated) {
                        var profile = request.auth.credentials.profile;

                        /**
                         * @todo:
                         * - retrieve user from DB (existing of create new one)
                         * - pass object to request.auth.session
                         */

                        request.auth.session.set({
                            id: profile.id,
                            username: profile.username,
                            email: profile.email,
                            provider: request.auth.credentials.provider
                        });
                    }

                    return reply.redirect('/');
                }
            }
        }
    }
};
