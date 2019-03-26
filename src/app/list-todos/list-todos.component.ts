import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
	constructor(public id: number, public description: string, public done: boolean, public targetDate: Date) {}
}

@Component({
	selector: 'app-list-todos',
	templateUrl: './list-todos.component.html',
	styleUrls: [ './list-todos.component.css' ]
})
export class ListTodosComponent implements OnInit {
	todos: Todo[];

	constructor(private todosService: TodoDataService) {}

	ngOnInit() {
		this.fetchTodos('prashant');
	}

	fetchTodos(username: string) {
		console.log(this.todosService.fetchAllTodos(username))
		this.todosService.fetchAllTodos(username).subscribe(
			(response) => {
				console.log(response);
				this.todos = response;
				// response.forEach((todo) => {
				// 	this.todos.push(todo);
				// });
			},
			(error) => console.log(error)
		);
	}
}
