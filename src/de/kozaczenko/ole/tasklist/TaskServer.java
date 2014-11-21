package de.kozaczenko.ole.tasklist;

import java.util.ArrayList;
import java.util.Iterator;

import javax.inject.Singleton;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;

import com.google.gson.Gson;



// The class registers its methods for the various HTTP requests per annotation

//Sets the path to base URL + /tasks
/**
 * @author Ole Kozaczenko
 *
 */
@Path("/tasks")
@Singleton
public class TaskServer {

	private Gson gson = new Gson();
	private ArrayList<Task> tasks = new ArrayList<Task>();

	@POST
	public void saveTask(@QueryParam("id") String id, String serializedTask) {
		if (id != null)
			removeTaskWithId(id);
		tasks.add(gson.fromJson(serializedTask, Task.class));
	}

	@DELETE
	public void deleteTask(@QueryParam("id") String id) {
		removeTaskWithId(id);
	}

	@GET
	public String serializeTasks(@QueryParam("id") String id) {
		if (id != null) {
			for (Task task : tasks)
				if (task.getId().equals(id))
					return gson.toJson(task);
		}
		return gson.toJson(tasks);
	}

	private void removeTaskWithId(String id) {
		for (Iterator<Task> it = tasks.iterator(); it.hasNext();) {
			Task aTask = it.next();
			if (aTask.getId().equals(id)) {
				it.remove();
			}
		}
	}
}