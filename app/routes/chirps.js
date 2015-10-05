import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.csrf.fetchToken();
  },
  model(){
    return this.store.find('chirp');
  },
  actions: {
    deleteChirp: function(chirp) {
      chirp.destroyRecord();
    }
  }
});