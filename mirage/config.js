export default function() {
  this.get('/brands');
  this.get('/brands/:id');

  this.get('/cars', { coalesce: true });
  this.get('/cars/:id');

  this.get('/drivers', { coalesce: true });
  this.get('/drivers/:id');
}
