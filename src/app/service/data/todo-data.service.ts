import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
	providedIn: 'root'
})
export class TodoDataService {
	constructor(private http: HttpClient) {}

	fetchAllTodos(username: string) {
		return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
	}

	fetchSingleTodo(username: string, id: number) {
		return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
	}

	deleteTodoById(username: string, id: number) {
		return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
	}

	updateTodo(username: string, id: number, todo: Todo) {
		return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
	}

	saveTodo(username: string, todo: Todo) {
		return this.http.post(`http://localhost:8080/users/${username}/todos`, todo);
	}
}
