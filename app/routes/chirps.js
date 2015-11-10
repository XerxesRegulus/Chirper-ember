import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('chirp');
  },
  actions: {
    deleteChirp: function(chirp) {
      chirp.destroyRecord();
    },
    chirpUserLink: function(chirp){
      const userId = chirp.get('user.id');
      this.transitionTo('users.show', userId);
    }
  }
});
