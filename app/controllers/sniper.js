import Ember from 'ember';

const { Controller, get, set, computed } = Ember;

export default Controller.extend({
  queryParams: ['query', 'type', 'limit', 'offset'],
  query: 'starcraft',
  type: 'streams',
  limit: 10,
  offset: 0,
  currentPage: computed ('limit', 'offset', function() {
      let limit = get(this, 'limit');
      let offset = get(this, 'offset');
      return Math.floor(offset/limit) + 1;
    }),

  actions: {
    searchStreams() {
      let searchInput = get(this, 'searchInput');
      //console.log(searchInput);
      if (searchInput !== undefined && searchInput != null && searchInput != ''){
        set(this, 'query', searchInput);
        set(this, 'type', 'streams');
        set(this, 'offset', 0);
      }
    },

    searchChannels() {
      let searchInput = get(this, 'searchInput');
      //console.log(searchInput);
      if (searchInput !== undefined && searchInput != null && searchInput != ''){
        set(this, 'query', searchInput);
        set(this, 'type', 'channels');
        set(this, 'offset', 0);
      }
    },

    nextPage(total) {
      let limit = get(this, 'limit');
      let offset = get(this, 'offset');
      let newOffset = offset + limit;
      if (newOffset < total){
        set(this, 'offset', newOffset);
      }
    },

    prevPage() {
      let limit = get(this, 'limit');
      let offset = get(this, 'offset');
      let newOffset = offset - limit;
      if (newOffset >= 0){
        set(this, 'offset', newOffset);
      }
    }
  }
});
