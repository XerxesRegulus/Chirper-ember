import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.findRecord('user', params.id);
  },
  setupController(controller, model) {
    controller.set('user', model)
  },
});