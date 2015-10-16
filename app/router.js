import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('chirps', function() {
    this.route('new');
  });
  this.route('registration', {path: 'users/sign_up'});
  this.route('users', {path: 'users/:id'});
  this.route('login');
});

export default Router;
