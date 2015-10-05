import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('chirps', function() {
    this.route('new')
  });
  this.route('users', {path: 'users/:id'});
});

export default Router;
