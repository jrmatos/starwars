angular.module('starwars').
	service('characterAPI', ['$http', 'config', function ($http, config) {

		// confiv.baseUrl...

		
		this.getCharacters = function () {
			console.log('...........');
			return $http.get('public/json/characters.json');
		}
		
	}])