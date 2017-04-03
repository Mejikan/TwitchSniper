import DS from 'ember-data';

const { RESTSerializer } = DS;

export default RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    //console.log(payload);
    payload = { channels: payload.channels };
    payload.channels.forEach((channel) => {
      channel.id = channel._id;
    });
    //console.log(payload);
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
