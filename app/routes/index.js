import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if (this.get('isAuthenticated')) {
       this.transitionTo('chirps');
       windows.wat = this;
       console.log(this);
    }
  }
});
