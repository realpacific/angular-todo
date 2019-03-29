import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import {API_URL} from 'src/app/app.constants';

@Injectable({
	providedIn: 'root'
})
export class TodoDataService {
	constructor(private http: HttpClient) {}

	fetchAllTodos(username: string) {
		return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
	}

	fetchSingleTodo(username: string, id: number) {
		return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
	}

	deleteTodoById(username: string, id: number) {
		return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
	}

	updateTodo(username: string, id: number, todo: Todo) {
		return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);
	}

	saveTodo(username: string, todo: Todo) {
		return this.http.post(`${API_URL}/users/${username}/todos`, todo);
	}
}
