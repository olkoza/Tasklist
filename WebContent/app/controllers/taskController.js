/**
 * Main Controller, provides the scope variables and methods for the tasklist view as well
 * as connecting it to the server accessing service
 * 
 * @author Ole Kozaczenko
 */

'use strict';
app.controller('taskController',
		function($scope, taskService, $filter, $route) {
			$scope.tasks = [];
			$scope.filteredTasks = [];
			$scope.filterValue = '';
			$scope.newTask = {};

			init();

			function init() {
				loadAllTasks();
				createWatcher();
				filterTasks('');
			}
			;

			function createWatcher() {
				$scope.$watch("filterValue", function(filterInput) {
					filterTasks(filterInput);
				});
			}

			function showAllTasks() {
				loadAllTasks();
				$scope.filterValue = '';
				$scope.filteredTasks = $scope.tasks;
			}

			function loadAllTasks() {
				$scope.tasks = taskService.query();
			}

			function filterTasks(filterInput) {
				if (filterInput) {
					$scope.filteredTasks = $filter('taskFilter')($scope.tasks,
							filterInput);
				} else {
					$scope.filteredTasks = $scope.tasks;
				}

			}

			$scope.showAll = function() {
				showAllTasks();
			}

			$scope.deleteTask = function(id) {
				var deleteService = new taskService();
				deleteService.id = id;
				deleteService.$remove(function() {
					$route.reload();
				});
			}

			$scope.toggleDoneProperty = function(id) {
				var taskToToggle = taskService.get({
					'id' : id
				}, function() {
					taskToToggle.done = !taskToToggle.done
					taskToToggle.$save();
				});
			}

			$scope.createTask = function() {
				var createService = new taskService();
				createService.name = $scope.newTask.name;
				createService.list = $scope.newTask.list;
				createService.$save(function() {
					$route.reload();
				});
			}
		});
