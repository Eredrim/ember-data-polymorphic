'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    emberData: {
      debug: {
        LOG_PAYLOADS       : true, // data store received to update cache with
        LOG_OPERATIONS     : false, // updates to cache remote state
        LOG_MUTATIONS      : false, // updates to cache local state
        LOG_NOTIFICATIONS  : false,
        LOG_REQUESTS       : false,
        LOG_REQUEST_STATUS : false,
        LOG_IDENTIFIERS    : true,
        LOG_GRAPH          : false,
        LOG_INSTANCE_CACHE : false
      }
    },
  });

  return app.toTree();
};
