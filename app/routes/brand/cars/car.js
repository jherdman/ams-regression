import Route from '@ember/routing/route';

export default Route.extend({
  model({ car_id: id }) {
    return this.store.findRecord('car', id);
  },

  afterModel(model) {
    return model.get('drivers').then(drivers => {
      this.set('drivers', drivers);
    });
  },

  setupController(controller) {
    this._super(...arguments);

    let { drivers } = this;

    controller.set('drivers', drivers);
  },
});
