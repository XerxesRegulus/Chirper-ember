/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicy:{
      'script-src': "'self' 'unsafe-eval' http://*:35729 https://apis.google.com",
      'font-src': "'self' https://fonts.gstatic.com",
      'connect-src': "'self' *",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
    },
    modulePrefix: 'chirper-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.host = 'http://localhost:3000';
    ENV.namespace = 'api/v1';

    ENV['simple-auth'] = {
      session: 'session:custom',
      authorizer: 'simple-auth-authorizer:devise',
      store: 'simple-auth-session-store:local-storage'
    };
    ENV['simple-auth-devise'] = {
    tokenAttributeName: 'token',
    identificationAttributeName: 'email',
    session: 'session:custom'
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
