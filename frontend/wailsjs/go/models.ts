export namespace main {
	
	export class Task {
	    name: string;
	    isCompleted: boolean;
	    dueDate: string;
	    priority: string;
	
	    static createFrom(source: any = {}) {
	        return new Task(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.isCompleted = source["isCompleted"];
	        this.dueDate = source["dueDate"];
	        this.priority = source["priority"];
	    }
	}

}

