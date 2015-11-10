import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.findRecord('user', params.user_id);
  },
  setupController: function(controller, model) {
    const user = this.modelFor('user');
    controller.set('user', model);
  },
  actions: {
    goToFollowers: function(user){
      this.transitionTo('users.show.followers', user.id);
    }
  }
});
