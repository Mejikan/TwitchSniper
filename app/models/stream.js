import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  channel: attr('channel'),

  // (routes, models, and serializers should always reference singular objects - ember is smart enough to "pluralize" them)
  // ember data will always gen or get an id, so it doesn't have to be explicitly declared
  created_at: attr('date'),
  game: attr('string', { defaultValue: '' }),
  viewers: attr('number', { defaultValue: 0 }),
  preview: attr('preview')
});
