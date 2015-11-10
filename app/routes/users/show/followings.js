import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.findAll('following', params.id);
  },
  aftermodel: function() {
    this.set('user', this.modelFor('user'));
  }
});
