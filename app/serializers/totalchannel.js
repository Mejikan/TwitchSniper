import DS from 'ember-data';

const { RESTSerializer } = DS;

export default RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { totalchannels: { id: 1, total: payload._total } };
    //console.log(payload);
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
