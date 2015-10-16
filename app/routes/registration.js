import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {return{};},
    actions: {
      createUser: function() {
        const newUser = this.get('store').createRecord('user', this.currentModel);
        newUser.save().then((chirp) => {
          this.transitionTo('chirps');
        }, (resp) => {
          console.log('failed to create wat');
        });
      }
    }
});
``
