import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.findQuery('follower', {id: params.user_id});
  },
  aftermodel: function() {
    this.set('user', this.modelFor('user/show'));
  }
});
