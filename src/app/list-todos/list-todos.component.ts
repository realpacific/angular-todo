import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

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
	message: string;
	constructor(private todosService: TodoDataService, private router: Router) {}

	ngOnInit() {
		this.fetchTodos('prashant');
	}

	fetchTodos(username: string) {
		this.todosService.fetchAllTodos(username).subscribe(
			(response) => {
				this.todos = response;
			},
			(error) => console.log(error)
		);
	}

	deleteTodo(id: number) {
		this.todosService.deleteTodoById('prashant', id).subscribe(
			(response) => {
				this.message = 'Todo has been deleted';
				this.fetchTodos('prashant');
			},
			(error) => console.log(error)
		);
	}

	updateTodo(id: number) {
		this.router.navigate([ 'todos', id ]);
	}

	addTodo() {
		this.router.navigate([ 'todos', -1 ]);
	}
}
