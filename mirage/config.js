export default function() {
  this.get('/brands');
  this.get('/brands/:id');

  this.get('/cars', { coalesce: true });
  this.get('/cars/:id');

  this.get('/drivers/:id');
  this.get('/drivers', function({ drivers }, { queryParams: { car_id } }) {
    return drivers.where({ carId: car_id });
  });
}
