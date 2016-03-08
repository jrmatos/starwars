angular.module('starwars')
.controller('peopleCtrl', ['$scope', 'peopleAPI', 'people', function ($scope, peopleAPI, people) {

	if(!peopleAPI.getPeople().length) {
		peopleAPI.setAmountPages(people.data.count);
		peopleAPI.setPage(people.data.next.split('=')[1] - 1);
		peopleAPI.setPeople(people.data.results);
	}

	$scope.people = peopleAPI.getPeople();
	$scope.page = peopleAPI.getPage();
	$scope.amountPages = peopleAPI.getAmountPages();
	$scope.filter =  '';

	// show info of a person
	$scope.togglePeople = function (person) {		
		if(person.opened) {
			person.opened = false;
		}
		else {
			$scope.people.forEach(function(value) {
				if(value.opened) value.opened = false;
			});
			person.opened = true;			
		}
	}

	$scope.loadMore = function () {
		
		peopleAPI.setPage(peopleAPI.getPage() + 1);
		$scope.page = peopleAPI.getPage();

		if($scope.page <= $scope.amountPages) {
			peopleAPI.findPeople($scope.page).
				success(function(data) {
					peopleAPI.setPeople(data.results);
					$scope.people = peopleAPI.getPeople();
				}).
				error(function(err) {
					throw err;
				});
		}	
	}

}]);