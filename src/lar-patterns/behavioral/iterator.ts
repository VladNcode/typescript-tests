class Task {
	constructor(public priority: number) {}
}

class TaskList {
	private tasks: Task[] = [];

	sortByPriority() {
		this.tasks = this.tasks.sort((a, b) => a.priority - b.priority);
	}

	addTask(task: Task) {
		this.tasks.push(task);
	}

	getTasks() {
		return this.tasks;
	}

	countTasks() {
		return this.tasks.length;
	}

	getIterator() {
		return new PriorityTaskIterator(this);
	}
}

interface IIterator<T> {
	current(): T | undefined;
	next(): T | undefined;
	prev(): T | undefined;
	index(): number;
}

class PriorityTaskIterator implements IIterator<Task> {
	private position: number = 0;
	private taskList: TaskList;

	constructor(taskList: TaskList) {
		// priority
		taskList.sortByPriority();
		this.taskList = taskList;
	}

	current(): Task | undefined {
		return this.taskList.getTasks()[this.position];
	}
	next(): Task | undefined {
		this.position++;
		return this.current();
	}
	prev(): Task | undefined {
		this.position--;
		return this.current();
	}
	index(): number {
		return this.position;
	}
}

const taskList = new TaskList();
taskList.addTask(new Task(8));
taskList.addTask(new Task(1));
taskList.addTask(new Task(3));

const iterator = taskList.getIterator();
console.log(iterator.current());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.prev());
console.log(iterator.index());
