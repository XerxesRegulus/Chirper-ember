import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  username: DS.attr(),
  chirps: DS.attr(),
  password: DS.attr(),
  password_confirmation: DS.attr()
});
