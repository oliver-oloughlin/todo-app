import { Component, OnInit } from '@angular/core';
import { Todo } from "./todo"
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  todos: Todo[] = []

  constructor(private service: TodoService) {
    
  }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.service.getTodos().subscribe(todos => this.todos = todos)
  }

  deleteTodo(id: number) {
    this.service.deleteTodo(id).subscribe()
    this.refresh()
  }

  addTodo(description: string, summary: string) {
    this.service.addTodo({
      description,
      summary
    }).subscribe()
    this.refresh()
  }

  refresh() {
    location.reload()
  }

}
