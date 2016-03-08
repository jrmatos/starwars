// config routes
angular.module('starwars').
	config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'public/partials/default.html',
			controller: 'mainCtrl'
		}).
		// people - PLURAL
		when('/people', {
			templateUrl: 'public/partials/people.html',
			controller: 'peopleCtrl',
			resolve: {
				people: ['peopleAPI', function (peopleAPI) {									
					return peopleAPI.findPeople();
				}]	
			}
		}).
		otherwise({
			redirectTo: '/'
		})
	}])