import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  // selector: '[app-todos]',
  // selector: '.app-todos',
  templateUrl: './todos.component.html',
  // template: `
  //   <app-todo></app-todo>
  //   <app-todo></app-todo>
  // `,
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  disableAddTodo = true;
  todoCreated = false;
  newTodoName = 'New todo!';
  todos = ['Learn components!', 'Learn directives!'];

  constructor() {
    setTimeout(() => {
      this.disableAddTodo = false;
    }, 2000);
  }

  ngOnInit() {
  }

  onAddTodo() {
    this.todoCreated = true;
    this.todos.push(this.newTodoName);
  }

  onUpdateTodoName(event: Event) {
    this.newTodoName = (<HTMLInputElement>event.target).value;
  }

}
