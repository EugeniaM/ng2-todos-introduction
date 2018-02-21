import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [`
    .done {
      color: white;
    }
  `]
})
export class TodoComponent {
  todoItem = 'Write Angular App';
  todoStatus = 'in progress';
  todoTimeSpent = 5;

  constructor() {
    this.todoStatus = Math.random() > 0.5 ? 'done' : 'in progress';
  }

  getTodoStatus() {
    return this.todoStatus;
  }

  getColor() {
    return this.todoStatus === 'done' ? 'darkgreen' : 'pink';
  }
}
