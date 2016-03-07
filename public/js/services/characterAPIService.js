angular.module('starwars').
	factory('characterAPI', ['$http', 'config', function ($http, config) {

		return {
			getCharacters: function () {
				return $http.get(config.baseUrl + '/public/json/characters.json');
			}
		}
		
	}])