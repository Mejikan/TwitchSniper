import Ember from 'ember';

const { Component, get, set } = Ember;

export default Component.extend({
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

  didReceiveAttrs() {
    this._super(...arguments);

  }

});
