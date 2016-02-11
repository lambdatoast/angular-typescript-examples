import * as angular from 'angular';
import 'angular-ui-router';

angular.module('examples', ['ui.router']).run(() => {
  console.log('run!'); 
});
