// config routes
angular.module('starwars').
	config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'public/partials/default.html',
			controller: 'mainCtrl'
		}).
		// characters - PLURAL
		when('/characters', {
			templateUrl: 'public/partials/characters.html',
			controller: 'charactersCtrl',
			resolve: {
				characters: ['characterAPI', function (characterAPI) {					
					return characterAPI.getCharacters();
				}]	
			}
		}).
		when('/lightsabers', {
			templateUrl: 'public/partials/lightsabers.html',
			controller: 'mainCtrl'
		}).
		otherwise({
			redirectTo: '/'
		})
	}])