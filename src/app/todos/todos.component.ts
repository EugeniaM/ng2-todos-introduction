import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  // selector: '[app-todos]',
  // selector: '.app-todos',
  // templateUrl: './todos.component.html',
  template: `
    <app-todo></app-todo>
    <app-todo></app-todo>
  `,
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
