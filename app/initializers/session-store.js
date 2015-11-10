export function initialize(container, application){
  application.inject('session:custom', '_store', 'service:store');
}

export default {
  name: 'session-store',
  after: 'ember-data',
  initialize: initialize
}
