import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {return{};},
    actions: {
      createChirp: function() {
        const userId = this.get('session.currentUser.id');
        const newChirp = this.get('store').createRecord('chirp', this.currentModel);
        newChirp.set('user_id', userId);
        newChirp.save().then((chirp) => {
          this.transitionTo('chirps');
        }, (resp) => {
          console.log('failed to create wat');
        });
      }
    }
});
