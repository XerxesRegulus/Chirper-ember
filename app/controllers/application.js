import Ember from 'ember';

export default Ember.Controller.extend({
   actions: {
    goToCreateChirp: function() {
      this.transitionTo('chirps.new');
    },
    ownProfile: function() {
      var userId= this.get('session.currentUser.id');
      this.transitionTo('users', userId)
    }
  }
});
