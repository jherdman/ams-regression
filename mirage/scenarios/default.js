export default function(server) {
  let subaru = server.create('brand', {
    name: 'Subaru',
  });

  let ford = server.create('brand', {
    name: 'Ford',
  });

  let outback = server.create('car', {
    name: 'Outback',
    brand: subaru,
  });

  let wrx = server.create('car', {
    name: 'WRX',
    brand: subaru,
  });

  let mustang = server.create('car', {
    name: 'Mustang',
    brand: ford,
  });

  server.create('driver', {
    name: 'Baby',
    car: wrx,
  });

  server.create('driver', {
    name: 'James',
    car: outback,
  });

  server.create('driver', {
    name: 'Kristen',
    car: outback,
  });

  server.create('driver', {
    name: 'Yasser',
    car: outback,
  });

  server.create('driver', {
    name: 'Ben',
    car: mustang,
  });
}
