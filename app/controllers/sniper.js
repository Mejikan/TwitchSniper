import Ember from 'ember';

const { Controller, get, set, computed } = Ember;

export default Controller.extend({
  queryParams: ['query', 'type', 'limit', 'offset'],
  query: 'starcraft',
  type: 'streams',
  limit: 10,
  offset: 0,
  resultsPerPageInput: 10,
  currentPage: computed ('limit', 'offset', function() {
      let limit = get(this, 'limit');
      let offset = get(this, 'offset');
      return Math.floor(offset/limit) + 1;
    }),
  setNewLimit: function() {
    let resultsPerPageInput = get(this, 'resultsPerPageInput');
    if (resultsPerPageInput !== undefined && resultsPerPageInput != null && resultsPerPageInput != ''){
      resultsPerPageInput = Number(resultsPerPageInput);
      if (Number.isInteger(resultsPerPageInput) && resultsPerPageInput > 0 && resultsPerPageInput <= 100){
        set(this, 'limit', resultsPerPageInput);
        set(this, 'offset', 0);
      } else {
        set(this, 'limit', 10);
        set(this, 'offset', 0);
      }
    }
  }.observes("resultsPerPageInput"),

  actions: {
    searchStreams() {
      let searchInput = get(this, 'searchInput');
      //console.log(searchInput);
      if (searchInput !== undefined && searchInput != null && searchInput != ''){
        set(this, 'query', searchInput);
        set(this, 'type', 'streams');
        set(this, 'offset', 0);
      } else {
        alert('Please give me something to search for!');
      }
    },

    searchChannels() {
      let searchInput = get(this, 'searchInput');
      //console.log(searchInput);
      if (searchInput !== undefined && searchInput != null && searchInput != ''){
        set(this, 'query', searchInput);
        set(this, 'type', 'channels');
        set(this, 'offset', 0);
      } else {
        alert('Please give me something to search for!');
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
