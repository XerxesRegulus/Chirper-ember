import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
   actions: {
    goToCreateChirp: function() {
      this.transitionTo('chirps.new');
    },
    goToCurrentProfile: function() {
      this.transitionTo('users', this.get('session.currentUser.id'));
    }
  }
});
