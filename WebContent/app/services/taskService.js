/**
 * Service encapsulating the access to the task server, injectable per DPI in controllers, services etc.
 * 
 *  * @author Ole Kozaczenko

 */

app.factory('taskService', function($resource) {

	var requestUri = 'http://localhost:8080/Tasklist/rest/tasks';

	return $resource(requestUri, {id:'@id'}, {
		// declare non-default methods here, see angularJS $resource API documentation
	});
	


});