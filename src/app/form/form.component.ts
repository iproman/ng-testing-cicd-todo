import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../Todo';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

})
export class FormComponent {

  @Output() sendTodo = new EventEmitter<Todo>();

  addTodo(value: string): void {
    if (value) {
      const newObj = {
        id: this.#getNumbers(uuidv4()),
        name: value
      }

      this.sendTodo.next(newObj);
    }

  }

  #getNumbers(str: string) {
    return Number(str.replace(/[a-zA-Z]|-/g, '').slice(0, 5));
  }
}
