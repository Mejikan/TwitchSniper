'use strict';

define('twitch-sniper/tests/adapters/channel.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - adapters/channel.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/channel.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/adapters/stream.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - adapters/stream.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/stream.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/adapters/totalchannel.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - adapters/totalchannel.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/totalchannel.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/adapters/totalstream.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - adapters/totalstream.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/totalstream.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/adapters/twitch.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - adapters/twitch.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/twitch.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/components/channel-result.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/channel-result.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/channel-result.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/components/results-list.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/results-list.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/results-list.js should pass ESLint.\n3:9  - \'Component\' is assigned a value but never used. (no-unused-vars)\n3:20  - \'get\' is assigned a value but never used. (no-unused-vars)\n3:25  - \'set\' is assigned a value but never used. (no-unused-vars)');
  });
});
define('twitch-sniper/tests/components/stream-result.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/stream-result.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/stream-result.js should pass ESLint.\n3:20  - \'get\' is assigned a value but never used. (no-unused-vars)\n3:25  - \'set\' is assigned a value but never used. (no-unused-vars)');
  });
});
define('twitch-sniper/tests/controllers/sniper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/sniper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/sniper.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/helpers/calc-time-since-stream.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/calc-time-since-stream.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/calc-time-since-stream.js should pass ESLint.\n3:47  - \'rest\' is defined but never used. (no-unused-vars)');
  });
});
define('twitch-sniper/tests/helpers/calc-total-pages.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/calc-total-pages.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/calc-total-pages.js should pass ESLint.\n3:57  - \'rest\' is defined but never used. (no-unused-vars)');
  });
});
define('twitch-sniper/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('twitch-sniper/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/helpers/is-no-results.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/is-no-results.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/is-no-results.js should pass ESLint.\n3:47  - \'rest\' is defined but never used. (no-unused-vars)');
  });
});
define('twitch-sniper/tests/helpers/is-type-channels.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/is-type-channels.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/is-type-channels.js should pass ESLint.\n3:42  - \'rest\' is defined but never used. (no-unused-vars)');
  });
});
define('twitch-sniper/tests/helpers/is-type-streams.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/is-type-streams.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/is-type-streams.js should pass ESLint.\n3:41  - \'rest\' is defined but never used. (no-unused-vars)');
  });
});
define('twitch-sniper/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'twitch-sniper/tests/helpers/start-app', 'twitch-sniper/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _twitchSniperTestsHelpersStartApp, _twitchSniperTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _twitchSniperTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _twitchSniperTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('twitch-sniper/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/helpers/resolver', ['exports', 'twitch-sniper/resolver', 'twitch-sniper/config/environment'], function (exports, _twitchSniperResolver, _twitchSniperConfigEnvironment) {

  var resolver = _twitchSniperResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _twitchSniperConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _twitchSniperConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('twitch-sniper/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/helpers/start-app', ['exports', 'ember', 'twitch-sniper/app', 'twitch-sniper/config/environment'], function (exports, _ember, _twitchSniperApp, _twitchSniperConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _twitchSniperConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _twitchSniperApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('twitch-sniper/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/integration/components/channel-result-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('channel-result', 'Integration | Component | channel result', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'ulfPpOyI',
      'block': '{"statements":[["append",["unknown",["channel-result"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'ndi1d5/G',
      'block': '{"statements":[["text","\\n"],["block",["channel-result"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('twitch-sniper/tests/integration/components/channel-result-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/channel-result-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/channel-result-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/integration/components/result-list-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('result-list', 'Integration | Component | result list', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'azRt2l3T',
      'block': '{"statements":[["append",["unknown",["result-list"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'J3x3QKaV',
      'block': '{"statements":[["text","\\n"],["block",["result-list"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('twitch-sniper/tests/integration/components/result-list-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/result-list-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/result-list-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/integration/components/stream-result-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('stream-result', 'Integration | Component | stream result', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'l5/noZPs',
      'block': '{"statements":[["append",["unknown",["stream-result"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'lJrfSe7q',
      'block': '{"statements":[["text","\\n"],["block",["stream-result"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('twitch-sniper/tests/integration/components/stream-result-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/stream-result-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/stream-result-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/models/channel.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/channel.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/channel.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/models/stream.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/stream.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/stream.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/models/totalchannel.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/totalchannel.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/totalchannel.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/models/totalstream.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/totalstream.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/totalstream.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/routes/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/routes/sniper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/sniper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sniper.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/serializers/channel.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - serializers/channel.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/channel.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/serializers/stream.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - serializers/stream.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/stream.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/serializers/totalchannel.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - serializers/totalchannel.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/totalchannel.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/serializers/totalstream.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - serializers/totalstream.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/totalstream.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/test-helper', ['exports', 'twitch-sniper/tests/helpers/resolver', 'ember-qunit'], function (exports, _twitchSniperTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_twitchSniperTestsHelpersResolver['default']);
});
define('twitch-sniper/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/transforms/channel.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - transforms/channel.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'transforms/channel.js should pass ESLint.\n5:12  - \'Ember\' is not defined. (no-undef)');
  });
});
define('twitch-sniper/tests/transforms/preview.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - transforms/preview.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'transforms/preview.js should pass ESLint.\n5:12  - \'Ember\' is not defined. (no-undef)');
  });
});
define('twitch-sniper/tests/unit/adapters/channel-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:channel', 'Unit | Adapter | channel', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('twitch-sniper/tests/unit/adapters/channel-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/adapters/channel-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/channel-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/adapters/stream-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:stream', 'Unit | Adapter | stream', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('twitch-sniper/tests/unit/adapters/stream-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/adapters/stream-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/stream-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/adapters/totalchannel-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:totalchannel', 'Unit | Adapter | totalchannel', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('twitch-sniper/tests/unit/adapters/totalchannel-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/adapters/totalchannel-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/totalchannel-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/adapters/totalstreams-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:totalstreams', 'Unit | Adapter | totalstreams', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('twitch-sniper/tests/unit/adapters/totalstreams-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/adapters/totalstreams-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/totalstreams-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/adapters/twitch-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:twitch', 'Unit | Adapter | twitch', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('twitch-sniper/tests/unit/adapters/twitch-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/adapters/twitch-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/twitch-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/controllers/sniper-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:sniper', 'Unit | Controller | sniper', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('twitch-sniper/tests/unit/controllers/sniper-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/controllers/sniper-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/sniper-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/helpers/calc-time-since-stream-test', ['exports', 'twitch-sniper/helpers/calc-time-since-stream', 'qunit'], function (exports, _twitchSniperHelpersCalcTimeSinceStream, _qunit) {

  (0, _qunit.module)('Unit | Helper | calc time since stream');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _twitchSniperHelpersCalcTimeSinceStream.calcTimeSinceStream)([42]);
    assert.ok(result);
  });
});
define('twitch-sniper/tests/unit/helpers/calc-time-since-stream-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/helpers/calc-time-since-stream-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/calc-time-since-stream-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/helpers/calc-total-pages-test', ['exports', 'twitch-sniper/helpers/calc-total-pages', 'qunit'], function (exports, _twitchSniperHelpersCalcTotalPages, _qunit) {

  (0, _qunit.module)('Unit | Helper | calc total pages');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _twitchSniperHelpersCalcTotalPages.calcTotalPages)([42]);
    assert.ok(result);
  });
});
define('twitch-sniper/tests/unit/helpers/calc-total-pages-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/helpers/calc-total-pages-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/calc-total-pages-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/helpers/is-no-results-test', ['exports', 'twitch-sniper/helpers/is-no-results', 'qunit'], function (exports, _twitchSniperHelpersIsNoResults, _qunit) {

  (0, _qunit.module)('Unit | Helper | is no results');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _twitchSniperHelpersIsNoResults.isNoResults)([42]);
    assert.ok(result);
  });
});
define('twitch-sniper/tests/unit/helpers/is-no-results-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/helpers/is-no-results-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/is-no-results-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/helpers/is-type-channels-test', ['exports', 'twitch-sniper/helpers/is-type-channels', 'qunit'], function (exports, _twitchSniperHelpersIsTypeChannels, _qunit) {

  (0, _qunit.module)('Unit | Helper | is type channels');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _twitchSniperHelpersIsTypeChannels.isTypeChannels)([42]);
    assert.ok(result);
  });
});
define('twitch-sniper/tests/unit/helpers/is-type-channels-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/helpers/is-type-channels-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/is-type-channels-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/helpers/is-type-streams-test', ['exports', 'twitch-sniper/helpers/is-type-streams', 'qunit'], function (exports, _twitchSniperHelpersIsTypeStreams, _qunit) {

  (0, _qunit.module)('Unit | Helper | is type streams');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _twitchSniperHelpersIsTypeStreams.isTypeStreams)([42]);
    assert.ok(result);
  });
});
define('twitch-sniper/tests/unit/helpers/is-type-streams-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/helpers/is-type-streams-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/is-type-streams-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/models/channel-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('channel', 'Unit | Model | channel', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('twitch-sniper/tests/unit/models/channel-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/channel-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/channel-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/models/stream-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('stream', 'Unit | Model | stream', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('twitch-sniper/tests/unit/models/stream-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/stream-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/stream-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/models/totalchannel-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('totalchannel', 'Unit | Model | totalchannel', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('twitch-sniper/tests/unit/models/totalchannel-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/totalchannel-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/totalchannel-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/models/totalstreams-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('totalstreams', 'Unit | Model | totalstreams', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('twitch-sniper/tests/unit/models/totalstreams-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/totalstreams-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/totalstreams-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('twitch-sniper/tests/unit/routes/application-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/application-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/routes/sniper-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:sniper', 'Unit | Route | sniper', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('twitch-sniper/tests/unit/routes/sniper-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/sniper-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sniper-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/serializers/channel-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('channel', 'Unit | Serializer | channel', {
    // Specify the other units that are required for this test.
    needs: ['serializer:channel']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('twitch-sniper/tests/unit/serializers/channel-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/serializers/channel-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/channel-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/serializers/stream-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('stream', 'Unit | Serializer | stream', {
    // Specify the other units that are required for this test.
    needs: ['serializer:stream']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('twitch-sniper/tests/unit/serializers/stream-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/serializers/stream-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/stream-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/serializers/totalchannel-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('totalchannel', 'Unit | Serializer | totalchannel', {
    // Specify the other units that are required for this test.
    needs: ['serializer:totalchannel']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('twitch-sniper/tests/unit/serializers/totalchannel-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/serializers/totalchannel-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/totalchannel-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/serializers/totalstreams-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('totalstreams', 'Unit | Serializer | totalstreams', {
    // Specify the other units that are required for this test.
    needs: ['serializer:totalstreams']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('twitch-sniper/tests/unit/serializers/totalstreams-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/serializers/totalstreams-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/totalstreams-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/transforms/channel-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('transform:channel', 'Unit | Transform | channel', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var transform = this.subject();
    assert.ok(transform);
  });
});
define('twitch-sniper/tests/unit/transforms/channel-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/transforms/channel-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/transforms/channel-test.js should pass ESLint.\n');
  });
});
define('twitch-sniper/tests/unit/transforms/preview-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('transform:preview', 'Unit | Transform | preview', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var transform = this.subject();
    assert.ok(transform);
  });
});
define('twitch-sniper/tests/unit/transforms/preview-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/transforms/preview-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/transforms/preview-test.js should pass ESLint.\n');
  });
});
require('twitch-sniper/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
