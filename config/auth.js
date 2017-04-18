/**
 * Created by lsyalex on 4/17/2017.
 */
// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here', // your App ID
        'clientSecret'  : 'your-client-secret-here', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '17667259232-7cjv5kk2e9bo5tdkmjtiraopp4vbrb66.apps.googleusercontent.com',
        'clientSecret'  : 'a66_1KnbF5_KlZXE-WXsbbia',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};