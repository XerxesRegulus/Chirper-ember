import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    return this.csrf.fetchToken();
    alert(this)
  },

  model: function() {return{}},
  actions: {
    createChirp: function() {
      const newChirp = this.get('store').createRecord('chirp', this.currentModel);
      newChirp.save().then((chirp) => {
        this.transitionTo('chirps');
      });
    }
  }
});
