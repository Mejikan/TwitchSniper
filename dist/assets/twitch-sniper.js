"use strict";



define('twitch-sniper/adapters/channel', ['exports', 'twitch-sniper/adapters/twitch'], function (exports, _twitchSniperAdaptersTwitch) {
  exports['default'] = _twitchSniperAdaptersTwitch['default'].extend({
    pathForType: function pathForType() {
      return 'channels';
    }
  });
});
define('twitch-sniper/adapters/stream', ['exports', 'twitch-sniper/adapters/twitch'], function (exports, _twitchSniperAdaptersTwitch) {
  exports['default'] = _twitchSniperAdaptersTwitch['default'].extend({
    pathForType: function pathForType() {
      return 'streams';
    }
  });
});
define('twitch-sniper/adapters/totalchannel', ['exports', 'twitch-sniper/adapters/twitch'], function (exports, _twitchSniperAdaptersTwitch) {
  exports['default'] = _twitchSniperAdaptersTwitch['default'].extend({
    pathForType: function pathForType() {
      return 'channels';
    }
  });
});
define('twitch-sniper/adapters/totalstream', ['exports', 'twitch-sniper/adapters/twitch'], function (exports, _twitchSniperAdaptersTwitch) {
  exports['default'] = _twitchSniperAdaptersTwitch['default'].extend({
    pathForType: function pathForType() {
      return 'streams';
    }
  });
});
define('twitch-sniper/adapters/twitch', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    host: 'https://api.twitch.tv',
    namespace: 'kraken/search',
    headers: {
      'Accept': 'application/vnd.twitchtv.v5+json',
      'Client-ID': '24vg2u8o4aj2ddz79ps5j0y0em1krv'
    }
  });
});
define('twitch-sniper/app', ['exports', 'ember', 'twitch-sniper/resolver', 'ember-load-initializers', 'twitch-sniper/config/environment'], function (exports, _ember, _twitchSniperResolver, _emberLoadInitializers, _twitchSniperConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _twitchSniperConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _twitchSniperConfigEnvironment['default'].podModulePrefix,
    Resolver: _twitchSniperResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _twitchSniperConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('twitch-sniper/components/channel-result', ['exports', 'ember'], function (exports, _ember) {
  var Component = _ember['default'].Component;
  var get = _ember['default'].get;
  var set = _ember['default'].set;
  exports['default'] = Component.extend({
    tagName: 'div',
    classNames: ['channel-result'],
    // properties/attributes
    displayName: null,
    name: null,
    imageURL: null,
    followers: 0,
    views: 0,
    language: null,

    init: function init() {
      this._super.apply(this, arguments);
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      var imageURL = get(this, 'imageURL');

      if (imageURL == null) {
        set(this, 'imageURL', '/avatar.png');
      } else {
        set(this, 'imageURL', imageURL);
      }
    }
  });
});
define('twitch-sniper/components/fa-icon', ['exports', 'ember-font-awesome/components/fa-icon'], function (exports, _emberFontAwesomeComponentsFaIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaIcon['default'];
    }
  });
});
define('twitch-sniper/components/fa-list', ['exports', 'ember-font-awesome/components/fa-list'], function (exports, _emberFontAwesomeComponentsFaList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaList['default'];
    }
  });
});
define('twitch-sniper/components/fa-stack', ['exports', 'ember-font-awesome/components/fa-stack'], function (exports, _emberFontAwesomeComponentsFaStack) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFontAwesomeComponentsFaStack['default'];
    }
  });
});
define('twitch-sniper/components/results-list', ['exports', 'ember'], function (exports, _ember) {
  var Component = _ember['default'].Component;
  var get = _ember['default'].get;
  var set = _ember['default'].set;
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['results-list'],
    // properties/attributes
    type: null,
    results: null,
    englishOnly: false,

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
    }

  });
});
define('twitch-sniper/components/stream-result', ['exports', 'ember'], function (exports, _ember) {
  var Component = _ember['default'].Component;
  var get = _ember['default'].get;
  var set = _ember['default'].set;
  exports['default'] = Component.extend({
    tagName: 'div',
    classNames: ['stream-result'],
    // properties/attributes
    streamName: null,
    displayName: null,
    createdDate: null,
    imageURL: null,
    gameName: null,
    viewers: 0,
    description: null,

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
    }

  });
});
define('twitch-sniper/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('twitch-sniper/controllers/sniper', ['exports', 'ember'], function (exports, _ember) {
  var Controller = _ember['default'].Controller;
  var get = _ember['default'].get;
  var set = _ember['default'].set;
  var computed = _ember['default'].computed;
  exports['default'] = Controller.extend({
    queryParams: ['query', 'type', 'limit', 'offset'],
    query: 'starcraft',
    type: 'streams',
    limit: 10,
    offset: 0,
    currentPage: computed('limit', 'offset', function () {
      var limit = get(this, 'limit');
      var offset = get(this, 'offset');
      return Math.floor(offset / limit) + 1;
    }),

    actions: {
      searchStreams: function searchStreams() {
        var searchInput = get(this, 'searchInput');
        //console.log(searchInput);
        if (searchInput !== undefined && searchInput != null && searchInput != '') {
          set(this, 'query', searchInput);
          set(this, 'type', 'streams');
          set(this, 'offset', 0);
        }
      },

      searchChannels: function searchChannels() {
        var searchInput = get(this, 'searchInput');
        //console.log(searchInput);
        if (searchInput !== undefined && searchInput != null && searchInput != '') {
          set(this, 'query', searchInput);
          set(this, 'type', 'channels');
          set(this, 'offset', 0);
        }
      },

      nextPage: function nextPage(total) {
        var limit = get(this, 'limit');
        var offset = get(this, 'offset');
        var newOffset = offset + limit;
        if (newOffset < total) {
          set(this, 'offset', newOffset);
        }
      },

      prevPage: function prevPage() {
        var limit = get(this, 'limit');
        var offset = get(this, 'offset');
        var newOffset = offset - limit;
        if (newOffset >= 0) {
          set(this, 'offset', newOffset);
        }
      }
    }
  });
});
define('twitch-sniper/helpers/app-version', ['exports', 'ember', 'twitch-sniper/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _twitchSniperConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _twitchSniperConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('twitch-sniper/helpers/calc-time-since-stream', ['exports', 'ember'], function (exports, _ember) {
  exports.calcTimeSinceStream = calcTimeSinceStream;

  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

  function calcTimeSinceStream(_ref) {
    var _ref2 = _toArray(_ref);

    var date = _ref2[0];

    var rest = _ref2.slice(1);

    var response = date.toString();

    var current = new Date();
    var millis = current.getTime() - date.getTime();
    var hours = Math.floor(millis / 1000 / 60 / 60);
    if (hours == 0) {
      // calc minutes
      var minutes = Math.floor(millis / 1000 / 60);
      if (minutes == 0) {
        response = 'Began streaming just now!';
      } else {
        response = 'Began streaming ' + minutes + ' minutes ago.';
      }
    } else {
      response = 'Began streaming ' + hours + ' hours ago.';
    }
    return response;
  }

  exports['default'] = _ember['default'].Helper.helper(calcTimeSinceStream);
});
define('twitch-sniper/helpers/calc-total-pages', ['exports', 'ember'], function (exports, _ember) {
  exports.calcTotalPages = calcTotalPages;

  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

  function calcTotalPages(_ref) {
    var _ref2 = _toArray(_ref);

    var limit = _ref2[0];
    var totalStreams = _ref2[1];

    var rest = _ref2.slice(2);

    return Math.floor(totalStreams / limit) + 1;
  }

  exports['default'] = _ember['default'].Helper.helper(calcTotalPages);
});
define('twitch-sniper/helpers/is-no-results', ['exports', 'ember'], function (exports, _ember) {
  exports.isNoResults = isNoResults;

  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

  function isNoResults(_ref) {
    var _ref2 = _toArray(_ref);

    var totalResults = _ref2[0];

    var rest = _ref2.slice(1);

    if (totalResults == 0) {
      return true;
    } else {
      return false;
    }
  }

  exports['default'] = _ember['default'].Helper.helper(isNoResults);
});
define('twitch-sniper/helpers/is-type-channels', ['exports', 'ember'], function (exports, _ember) {
  exports.isTypeChannels = isTypeChannels;

  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

  function isTypeChannels(_ref) {
    var _ref2 = _toArray(_ref);

    var type = _ref2[0];

    var rest = _ref2.slice(1);

    if (type == 'channels') {
      return true;
    } else {
      return false;
    }
  }

  exports['default'] = _ember['default'].Helper.helper(isTypeChannels);
});
define('twitch-sniper/helpers/is-type-streams', ['exports', 'ember'], function (exports, _ember) {
  exports.isTypeStreams = isTypeStreams;

  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

  function isTypeStreams(_ref) {
    var _ref2 = _toArray(_ref);

    var type = _ref2[0];

    var rest = _ref2.slice(1);

    if (type == 'streams') {
      return true;
    } else {
      return false;
    }
  }

  exports['default'] = _ember['default'].Helper.helper(isTypeStreams);
});
define('twitch-sniper/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('twitch-sniper/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('twitch-sniper/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'twitch-sniper/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _twitchSniperConfigEnvironment) {
  var _config$APP = _twitchSniperConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('twitch-sniper/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('twitch-sniper/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('twitch-sniper/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('twitch-sniper/initializers/export-application-global', ['exports', 'ember', 'twitch-sniper/config/environment'], function (exports, _ember, _twitchSniperConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_twitchSniperConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _twitchSniperConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_twitchSniperConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('twitch-sniper/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('twitch-sniper/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('twitch-sniper/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("twitch-sniper/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('twitch-sniper/models/channel', ['exports', 'ember-data'], function (exports, _emberData) {
  var Model = _emberData['default'].Model;
  var attr = _emberData['default'].attr;
  exports['default'] = Model.extend({
    broadcaster_language: attr('string'),
    created_at: attr('date'),
    display_name: attr('string'),
    followers: attr('number'),
    game: attr('string', { defaultValue: '' }),
    language: attr('string'),
    logo: attr('string'),
    mature: attr('boolean'),
    name: attr('string'),
    partner: attr('boolean'),
    profile_banner: attr('string'),
    profile_banner_background_color: attr('string'),
    status: attr('string'),
    updated_at: attr('date'),
    url: attr('string'),
    video_banner: attr('string'),
    views: attr('number', { defaultValue: 0 })
  });
});
define('twitch-sniper/models/stream', ['exports', 'ember-data'], function (exports, _emberData) {
  var Model = _emberData['default'].Model;
  var attr = _emberData['default'].attr;
  exports['default'] = Model.extend({
    channel: attr('channel'),

    // (routes, models, and serializers should always reference singular objects - ember is smart enough to "pluralize" them)
    // ember data will always gen or get an id, so it doesn't have to be explicitly declared
    created_at: attr('date'),
    game: attr('string', { defaultValue: '' }),
    viewers: attr('number', { defaultValue: 0 }),
    preview: attr('preview')
  });
});
define('twitch-sniper/models/totalchannel', ['exports', 'ember-data'], function (exports, _emberData) {
  var Model = _emberData['default'].Model;
  var attr = _emberData['default'].attr;
  exports['default'] = Model.extend({
    total: attr('number', { defaultValue: 0 })
  });
});
define('twitch-sniper/models/totalstream', ['exports', 'ember-data'], function (exports, _emberData) {
  var Model = _emberData['default'].Model;
  var attr = _emberData['default'].attr;
  exports['default'] = Model.extend({
    total: attr('number', { defaultValue: 0 })
  });
});
define('twitch-sniper/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('twitch-sniper/router', ['exports', 'ember', 'twitch-sniper/config/environment'], function (exports, _ember, _twitchSniperConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _twitchSniperConfigEnvironment['default'].locationType,
    rootURL: _twitchSniperConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('sniper');
  });

  exports['default'] = Router;
});
define('twitch-sniper/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    redirect: function redirect() {
      this.transitionTo('sniper');
    }
  });
});
define('twitch-sniper/routes/sniper', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({
    queryParams: {
      query: {
        refreshModel: true
      },
      type: {
        refreshModel: true
      },
      limit: {
        refreshModel: true
      },
      offset: {
        refreshModel: true
      }
    },

    model: function model(params) {
      //console.log(params);
      if (params.type == 'streams') {
        return _rsvp['default'].hash({
          streams: this.get('store').query('stream', {
            query: params.query,
            limit: params.limit,
            offset: params.offset
          }),
          total: this.get('store').queryRecord('totalstream', {
            query: params.query,
            limit: params.limit,
            offset: params.offset
          })
        });
      } else if (params.type == 'channels') {
        return _rsvp['default'].hash({
          channels: this.get('store').query('channel', {
            query: params.query,
            limit: params.limit,
            offset: params.offset
          }),
          total: this.get('store').queryRecord('totalchannel', {
            query: params.query,
            limit: params.limit,
            offset: params.offset
          })
        });
      } else if (params.type == 'games') {
        return _rsvp['default'].hash({
          streams: this.get('store').query('stream', {
            query: params.query,
            limit: params.limit,
            offset: params.offset
          }),
          total: this.get('store').queryRecord('totalstream', {
            query: params.query,
            limit: params.limit,
            offset: params.offset
          })
        });
      }
    },

    setupController: function setupController(controller, model) {
      //console.log('setup', model);
      //this._super(controller, model);
      _ember['default'].set(controller, 'results', model);
    }
  });
});
define('twitch-sniper/serializers/channel', ['exports', 'ember-data'], function (exports, _emberData) {
  var RESTSerializer = _emberData['default'].RESTSerializer;
  exports['default'] = RESTSerializer.extend({
    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      //console.log(payload);
      payload = { channels: payload.channels };
      payload.channels.forEach(function (channel) {
        channel.id = channel._id;
      });
      //console.log(payload);
      return this._super(store, primaryModelClass, payload, id, requestType);
    }
  });
});
define('twitch-sniper/serializers/stream', ['exports', 'ember-data'], function (exports, _emberData) {
  var RESTSerializer = _emberData['default'].RESTSerializer;
  exports['default'] = RESTSerializer.extend({
    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      payload = { streams: payload.streams };
      payload.streams.forEach(function (stream) {
        stream.id = stream._id;
      });
      //console.log(payload);
      return this._super(store, primaryModelClass, payload, id, requestType);
    }
  });
});
define('twitch-sniper/serializers/totalchannel', ['exports', 'ember-data'], function (exports, _emberData) {
  var RESTSerializer = _emberData['default'].RESTSerializer;
  exports['default'] = RESTSerializer.extend({
    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      payload = { totalchannels: { id: 1, total: payload._total } };
      //console.log(payload);
      return this._super(store, primaryModelClass, payload, id, requestType);
    }
  });
});
define('twitch-sniper/serializers/totalstream', ['exports', 'ember-data'], function (exports, _emberData) {
  var RESTSerializer = _emberData['default'].RESTSerializer;
  exports['default'] = RESTSerializer.extend({
    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      payload = { totalstreams: { id: 1, total: payload._total } };
      //console.log(payload);
      return this._super(store, primaryModelClass, payload, id, requestType);
    }
  });
});
define('twitch-sniper/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("twitch-sniper/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3Pfh0z3r", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "twitch-sniper/templates/application.hbs" } });
});
define("twitch-sniper/templates/components/channel-result", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Ufn+dB2t", "block": "{\"statements\":[[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"preview\"],[\"dynamic-attr\",\"src\",[\"unknown\",[\"imageURL\"]],null],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"info\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"displayName\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"aside\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"followers\"]],false],[\"text\",\" followers\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"views\"]],false],[\"text\",\" views\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Language: \"],[\"append\",[\"unknown\",[\"language\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "twitch-sniper/templates/components/channel-result.hbs" } });
});
define("twitch-sniper/templates/components/results-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0XK2lxiK", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"is-no-results\"],[[\"get\",[\"results\",\"total\",\"total\"]]],null]],null,6,5]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"unknown\",[\"channel\",\"url\"]],null],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"channel-result\"],null,[[\"displayName\",\"name\",\"imageURL\",\"followers\",\"views\",\"language\"],[[\"get\",[\"channel\",\"display_name\"]],[\"get\",[\"channel\",\"name\"]],[\"get\",[\"channel\",\"logo\"]],[\"get\",[\"channel\",\"followers\"]],[\"get\",[\"channel\",\"views\"]],[\"get\",[\"channel\",\"language\"]]]]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"channel\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"results\",\"channels\"]]],null,0]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"is-type-channels\"],[[\"get\",[\"type\"]]],null]],null,1],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"unknown\",[\"stream\",\"channel\",\"url\"]],null],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"stream-result\"],null,[[\"streamName\",\"displayName\",\"createdDate\",\"imageURL\",\"gameName\",\"viewers\"],[[\"get\",[\"stream\",\"channel\",\"status\"]],[\"get\",[\"stream\",\"channel\",\"display_name\"]],[\"get\",[\"stream\",\"created_at\"]],[\"get\",[\"stream\",\"preview\",\"large\"]],[\"get\",[\"stream\",\"game\"]],[\"get\",[\"stream\",\"viewers\"]]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"stream\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"results\",\"streams\"]]],null,3],[\"text\",\"\\n\\n  \"],[\"comment\",\" channels \"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n  \"],[\"comment\",\" streams \"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"is-type-streams\"],[[\"get\",[\"type\"]]],null]],null,4,2],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"searchWarning\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"text\",\"No Results Found.\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"Please try a different search.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "twitch-sniper/templates/components/results-list.hbs" } });
});
define("twitch-sniper/templates/components/stream-result", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "/TF2zNvn", "block": "{\"statements\":[[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"preview\"],[\"dynamic-attr\",\"src\",[\"unknown\",[\"imageURL\"]],null],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"info\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"strong\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"streamName\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"aside\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"gameName\"]],false],[\"close-element\"],[\"text\",\" -\\n    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"viewers\"]],false],[\"text\",\" viewers\"],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"displayName\"]],false],[\"close-element\"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"helper\",[\"calc-time-since-stream\"],[[\"get\",[\"createdDate\"]]],null],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "twitch-sniper/templates/components/stream-result.hbs" } });
});
define("twitch-sniper/templates/sniper", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "d4n3leVf", "block": "{\"statements\":[[\"open-element\",\"main\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"wallpaper\"],[\"static-attr\",\"src\",\"/wallpaper.jpg\"],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"sniper-cont\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"search\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"enter\",\"value\",\"placeholder\"],[\"search\",\"inputSearchQuery\",[\"get\",[\"searchInput\"]],\"Search Query...\"]]],false],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"searchStreams\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"searchStreams\"]],[\"flush-element\"],[\"text\",\"Search Streams\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"searchChannels\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"searchChannels\"]],[\"flush-element\"],[\"text\",\"Search Channels\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"results\"],[\"flush-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"results-nav\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"strong\",[]],[\"static-attr\",\"class\",\"totalResults\"],[\"flush-element\"],[\"text\",\"Total results: \"],[\"append\",[\"unknown\",[\"results\",\"total\",\"total\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"pagination\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"prevPage\"]],[\"flush-element\"],[\"append\",[\"helper\",[\"fa-icon\"],[\"chevron-left\"],null],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"class\",\"page\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"currentPage\"]],false],[\"text\",\" / \"],[\"append\",[\"helper\",[\"calc-total-pages\"],[[\"get\",[\"limit\"]],[\"get\",[\"results\",\"total\",\"total\"]]],null],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"nextPage\",[\"get\",[\"results\",\"total\",\"total\"]]]],[\"flush-element\"],[\"append\",[\"helper\",[\"fa-icon\"],[\"chevron-right\"],null],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"append\",[\"helper\",[\"results-list\"],null,[[\"results\",\"type\"],[[\"get\",[\"results\"]],[\"get\",[\"type\"]]]]],false],[\"text\",\"\\n\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "twitch-sniper/templates/sniper.hbs" } });
});
define('twitch-sniper/transforms/channel', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Transform.extend({
    deserialize: function deserialize(serialized) {
      return Ember.Object.create(serialized);
    },

    serialize: function serialize(deserialized) {
      return deserialized;
    }
  });
});
define('twitch-sniper/transforms/preview', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Transform.extend({
    deserialize: function deserialize(serialized) {
      return Ember.Object.create(serialized);
    },

    serialize: function serialize(deserialized) {
      return deserialized;
    }
  });
});


define('twitch-sniper/config/environment', ['ember'], function(Ember) {
  var prefix = 'twitch-sniper';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("twitch-sniper/app")["default"].create({"name":"twitch-sniper","version":"0.0.0+e6a0bc5c"});
}
//# sourceMappingURL=twitch-sniper.map
