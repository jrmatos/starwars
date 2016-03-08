angular.module('starwars').
	factory('peopleAPI', ['$http', 'configValue', function ($http, configValue) {
		var people = [],
			amountPages = 0,
			page =  0;
		return {			
			getPeople: function () {
				return people;
			},
			setPeople: function (p) {
				people = people.concat(p);					
			},
			getAmountPages: function () {
				return amountPages;
			},
			setAmountPages: function (ap) {
				amountPages = Math.ceil(ap / 10);
			},
			getPage: function () {
				return page;
			},
			setPage: function (p) {
				page = p;
			},
			findPeople: function (p) {
				if(!people.length) {
					return $http.get(configValue.baseUrl + '/people?page=1');					
				}
				else {
					if(p) {
						return $http.get(configValue.baseUrl + '/people?page=' + p);						
					}
					else {
						return;
					}
				}
			}
		}		
	}])