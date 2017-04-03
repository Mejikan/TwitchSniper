import DS from 'ember-data';

const { RESTSerializer } = DS;

export default RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { streams: payload.streams };
    payload.streams.forEach((stream) => {
      stream.id = stream._id;
    });
    //console.log(payload);
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
