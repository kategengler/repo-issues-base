import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('https://api.github.com/repos/kategengler/ember-feature-flags/issues');
  }
});
