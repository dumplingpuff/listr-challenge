import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      lists: this.store.findAll('list'),
      // item: this.store.findAll('item'),
    };
  }
});
