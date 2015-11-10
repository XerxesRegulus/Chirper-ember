import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('chirps', function() {
    this.route('new');
  });
  this.route('login');
  this.route('registration', {path: 'users/sign_up'});
  this.resource('users', function(){
    this.route('show', {path: ':user_id'}, function(){
      this.route('followers', {path: ':user_id/followers'});
      this.route('followings');
    });
  });
});

export default Router;
