import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from "./todo"

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todo[]>("/todos")
  }

  deleteTodo(id: number) {
    return this.http.delete(`todos/${id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
  }

  addTodo(data: Omit<Todo, "id">) {
    return this.http.post<Omit<Todo, "id">>("todos", data)
  }

}