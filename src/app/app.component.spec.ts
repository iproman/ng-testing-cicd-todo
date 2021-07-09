import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<any>;
  let component: AppComponent;
  let fixtureData: {
    todo: any,
    todos: any
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixtureData = {
      todo: {
        id: 4,
        name: 'Antonio',
      },
      todos: [
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
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('check todos', done => {
    expect(component.todos).toBeFalsy();
    component.ngOnInit();
    expect(component.todos).toEqual(fixtureData.todos);
    done();
  });

  it('should add todo to list of todos', done => {
    component.ngOnInit();
    component.addTodo(fixtureData.todo);
    expect(component.todos).toContain(fixtureData.todo);
    done();
  });
});
