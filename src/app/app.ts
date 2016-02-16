import * as angular from 'angular';
import 'angular-ui-router';
import UserRoutes = require('./user/routes');

angular.module('examples', ['ui.router'])
  .run(() => {
    console.log('run!'); 
  })
  .config(UserRoutes);
