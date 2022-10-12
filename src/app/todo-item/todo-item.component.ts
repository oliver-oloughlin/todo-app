import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  id
  description
  summary

  constructor() {
    this.id = 1
    this.description = "Clean up kitchen mess"
    this.summary = "A task to do"
  }

  ngOnInit(): void {
  }

}
