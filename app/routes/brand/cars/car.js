import Route from '@ember/routing/route';

import { hash as resolveAll } from 'rsvp';

export default Route.extend({
  model({ id }) {
    return this.store.find('car', id).then(car => {
      return resolveAll({
        drivers: car.get('drivers'),
      });
    });
  },
});
