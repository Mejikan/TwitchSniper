import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.twitch.tv',
  namespace: 'kraken/search',
  headers: {
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': '24vg2u8o4aj2ddz79ps5j0y0em1krv'
  }
});
