import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('add-equipo');
  
  this.route('index-admin', function() {
    this.route('equipos');
    this.route('sedes');
    this.route('encuentros');
  });
  this.route('index-manager', function() {
    this.route('equipo');
    this.route('miembros');
    this.route('encuentros');
    this.route('publicaciones');
  });
  this.route('index-member', function() {
    this.route('equipo');
    this.route('encuentros');
    this.route('publicaciones');
  });
});

export default Router;
