import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  broadcaster_language: attr('string'),
  created_at: attr('date'),
  display_name: attr('string'),
  followers: attr('number'),
  game: attr('string', { defaultValue: '' }),
  language: attr('string'),
  logo: attr('string'),
  mature: attr('boolean'),
  name: attr('string'),
  partner: attr('boolean'),
  profile_banner: attr('string'),
  profile_banner_background_color: attr('string'),
  status: attr('string'),
  updated_at: attr('date'),
  url: attr('string'),
  video_banner: attr('string'),
  views: attr('number', { defaultValue: 0 })
});
