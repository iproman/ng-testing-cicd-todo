import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { Todo } from '../Todo';
import { AppComponent } from '../app.component';

describe('ListComponent', () => {
  let listComponent: ListComponent;
  let appComponent: AppComponent;

  let fixture: ComponentFixture<ListComponent>;
  let fixtureAppComponent: ComponentFixture<AppComponent>;


  let fixtureTest: {
    tds: Todo[],
    tds2: Todo[],
    todo: Todo
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ListComponent]
    })
      .compileComponents();

    fixtureTest = {
      tds: [
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
      ],
      tds2: [
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
      ],
      todo: {
        id: 123,
        name: 'new todo'
      }
    }
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    listComponent = fixture.componentInstance;
    fixture.detectChanges();

    fixtureAppComponent = TestBed.createComponent(AppComponent);
    appComponent = fixtureAppComponent.componentInstance;
    fixtureAppComponent.detectChanges();
  });

  it('should create', () => {
    expect(listComponent).toBeTruthy();
  });

  it('@Input test todos', done => {

    expect(listComponent.todos.length).toEqual(0);

    listComponent.todos = fixtureTest.tds;
    expect(listComponent.todos).toEqual(fixtureTest.tds2);
    done();
  });

  it('"table" testing', done => {
    // Set all todos
    listComponent.todos = fixtureTest.tds;
    fixture.detectChanges();

    // Check first value in table
    const fixNative = fixture.nativeElement;
    const mark = fixNative.querySelector('table tbody tr td:last-child').textContent;
    expect(mark).toEqual(fixtureTest.tds[0].name);
    done();
  });

});
