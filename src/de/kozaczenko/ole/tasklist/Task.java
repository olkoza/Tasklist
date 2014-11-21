package de.kozaczenko.ole.tasklist; 
import java.util.UUID;

/**
 * @author Ole Kozaczenko
 *
 */
public class Task {
	
	private String name;
	private boolean done;
	private String list;
	private String id;
	
	public Task() {
		super();
		this.id = UUID.randomUUID().toString();
	}
	@Override
	public String toString() {
		return "Task [name=" + name + ", done=" + done
				+ ", list=" + list + ", id=" + id + "]";
	}
	public String getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isDone() {
		return done;
	}
	public void setDone(boolean done) {
		this.done = done;
	}
	public String getList() {
		return list;
	}
	public void setList(String list) {
		this.list = list;
	}

}
