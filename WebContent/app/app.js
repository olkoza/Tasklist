/**
 * "Main File", defines the application and links together view and controller level depending on the url 
 * 
 * @author Ole Kozaczenko
 */

var app = angular.module("TasklistApp", ['ngRoute', 'ngResource']); 
app.config(function ($routeProvider) {
	 
    $routeProvider.when("/tasks", {
        controller: "taskController",
        templateUrl: "app/views/tasklist.html"
    });
    $routeProvider.otherwise({ redirectTo: "/tasks" });
 
});


