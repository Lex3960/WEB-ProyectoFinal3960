/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'proyecto-final3960',
    environment,
    rootURL: '/',
    locationType: 'auto',

    torii: {
      sessionServiceName: 'session'
    },
    
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
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
    ENV.firebase = {
      apiKey: "AIzaSyCiqklaZKq_2_4C4vF_YoP3VMi9gc-kI8w",
      authDomain: "proyectofinal-3960.firebaseapp.com",
      databaseURL: "https://proyectofinal-3960.firebaseio.com",
      projectId: "proyectofinal-3960",
      storageBucket: "proyectofinal-3960.appspot.com",
      messagingSenderId: "177397279862"
    }


  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
