import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let brand = this.modelFor('brand');

    return brand.get('cars');
  },
});
