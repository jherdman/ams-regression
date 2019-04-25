import Route from '@ember/routing/route';

export default Route.extend({
  model({ brand_id: id }) {
    return this.store.find('brand', id);
  },
});
