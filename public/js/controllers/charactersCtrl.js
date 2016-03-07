angular.module('starwars')
.controller('charactersCtrl', ['$scope', 'characters', function ($scope, characters) {
	$scope.characters = characters.data.characters;
}]);