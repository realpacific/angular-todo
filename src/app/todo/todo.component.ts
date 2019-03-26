import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: [ './todo.component.css' ]
})
export class TodoComponent implements OnInit {
	id: number;
	todo: Todo;

	constructor(private todoService: TodoDataService, private router: Router, private route: ActivatedRoute) {
		this.id = this.route.snapshot.params['id'];
	}

	ngOnInit() {
		this.todo = new Todo(this.id, '', false, new Date());
		if (this.id != -1) {
			this.fetchTodo('prashant', this.id);
		}
	}

	fetchTodo(username: string, id: number): any {
		this.todoService.fetchSingleTodo(username, id).subscribe((response) => {
			this.todo = response;
		});
	}

	saveTodo() {
		console.log(this.todo);
		if (this.id != -1) {
			this.todoService.updateTodo('prashant', this.id, this.todo).subscribe((response) => {
				this.router.navigate([ 'todos' ]);
			});
		} else {
			this.todoService.saveTodo('prashant', this.todo).subscribe((response) => {
				this.router.navigate([ 'todos' ]);
			});
		}
	}
}
