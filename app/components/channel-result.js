import Ember from 'ember';

const { Component, get, set } = Ember;

export default Component.extend({
  tagName: 'div',
  classNames: ['channel-result'],
  // properties/attributes
  displayName: null,
  name: null,
  imageURL: null,
  followers: 0,
  views: 0,
  language: null,

  init(){
    this._super(...arguments);
  },

  didReceiveAttrs() {
    this._super(...arguments);
    let imageURL = get(this, 'imageURL');

    if (imageURL == null) {
      set(this, 'imageURL', '/avatar.png');
    } else {
      set(this, 'imageURL', imageURL);
    }
  }
});
