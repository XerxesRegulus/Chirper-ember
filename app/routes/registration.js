import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Route.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',
  model: function() {return{};},
  actions: {
    createUser: function() {
      const newUser = this.get('store').createRecord('user', this.currentModel);
      const email = newUser.get('identification');
      newUser.set('email', email);
      newUser.save().then((user) => {
        var data = newUser.getProperties('identification', 'password');
        return this.get('session').authenticate('simple-auth-authenticator:devise', data);
      }, (resp) => {
        console.log('failed to create wat');
      });
    }
  }
});
