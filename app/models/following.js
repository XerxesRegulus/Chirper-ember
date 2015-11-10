import DS from 'ember-data';

export default DS.Model.extend({
  user_id: DS.attr(),
  following_id: DS.attr(),
  user: DS.attr(),
  following: DS.attr()
});
