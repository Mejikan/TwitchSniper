import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
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

  model(params) {
    //console.log(params);
    if (params.type == 'streams'){
      return RSVP.hash({
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
    } else if (params.type == 'channels'){
      return RSVP.hash({
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
    } else if (params.type == 'games'){
      return RSVP.hash({
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

  setupController(controller, model) {
    //console.log('setup', model);
    //this._super(controller, model);
    Ember.set(controller, 'results', model);
  }
});
