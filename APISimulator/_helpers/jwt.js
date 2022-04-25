const expressJwt = require('express-jwt');
const userService = require('../services/user.service');
const config = require('../config.json');

module.exports = jwt;

//expressJwt(...) returns a function that takes three paramaters req, res and next. Thus, this will register as middleware.
function jwt() {
const secret = config.secret;
    return new expressJwt({ secret , isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/',
            '/user/register',
            '/user/authenticate'
        ]
    });}


async function isRevoked(req, payload, done) {
   // console.log("isRevoked():", req.body, payload);

    const user = await userService.getByUsername(payload.sub);



   // console.log("user in JWT",user);
    // revoke token if user no longer exists
    if (!user) {

        return done(null, true);
    }

    // done (Function) - A function with signature function(err, secret) to be invoked when the secret is retrieved.
    done();
};
