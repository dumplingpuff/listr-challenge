import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('striing'),
  listItem: DS.hasMany('', { async: true }),
});
