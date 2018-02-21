import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {
  todoItem = 'Write Angular App';
  todoStatus = 'in progress';
  todoTimeSpent = 5;

  getTodoStatus() {
    return this.todoStatus;
  }
}
