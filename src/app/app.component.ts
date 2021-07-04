import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // @ts-ignore
  todos: Todo[];

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        name: 'Mark',
      },
      {
        id: 2,
        name: 'Jacob',
      },
      {
        id: 3,
        name: 'Larry the Bird',
      },
    ]
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }
}
