/**
 * Reusable service for filtering a list of tasks, injectable per DPI in controllers, other services etc...
 * 
 *  * @author Ole Kozaczenko

 */

app.filter("taskFilter", function() {
	return function(tasks, filterValue) {
		
		if (!filterValue)
			return tasks;

		var matches = [];
		filterValue = filterValue.toLowerCase();
		for (var i = 0; i < tasks.length; i++) {
			var task = tasks[i];

			if (task.list.toLowerCase().indexOf(filterValue) > -1) {
				matches.push(task);
			}
		}
		return matches;
	};
});