// item route

import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
  return {
    items: this.store.findAll('blogpost', params.blogpost_id)
  };
}
});
