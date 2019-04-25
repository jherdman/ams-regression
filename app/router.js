import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('brand', { path: '/brands/:brand_id' }, function() {
    this.route('cars', function() {
      this.route('car', { path: '/:car_id' });
    });
  });
});

export default Router;
