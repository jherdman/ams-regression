import Application from './application';

export default Application.extend({
  serialize() {
    let json = Application.prototype.serialize.apply(this, arguments);

    if (json.cars) {
      // Transform collection
      let objects = json.cars;

      objects.forEach(transformRecord);

      return json;
    } else {
      // Transform a single record
      transformRecord(json.car);

      return json;
    }
  },
});

function transformRecord(json) {
  json.links = {
    'drivers': `/drivers?car_id=${json.id}`,
  };

  delete json.driver_ids;

  return json;
}
