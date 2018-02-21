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
  todoCreated = 'Todo was not created';
  newTodoName = 'New todo!';

  constructor() {
    setTimeout(() => {
      this.disableAddTodo = false;
    }, 3000);
  }

  ngOnInit() {
  }

  onAddTodo() {
    this.todoCreated = `Todo was created with name: ${this.newTodoName}`;
  }

  onUpdateTodoName(event: Event) {
    this.newTodoName = (<HTMLInputElement>event.target).value;
  }

}
