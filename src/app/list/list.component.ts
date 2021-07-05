import { Component, Input } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() todos: Todo[] = [];
}
