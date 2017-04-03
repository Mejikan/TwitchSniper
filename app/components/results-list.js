import Ember from 'ember';

const { Component, get, set } = Ember;

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['results-list'],
  // properties/attributes
  type: null,
  results: null,
  englishOnly: false,

  didReceiveAttrs() {
    this._super(...arguments);

  }


});
