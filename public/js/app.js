angular.module('docsApp', [
	'ngRoute'
]).config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix("!");

	$routeProvider.when('/', {
		templateUrl: '/pages/default.html'
	}).when('/clients', {
		templateUrl: '/pages/clients.html'
	}).otherwise('/');
}]);