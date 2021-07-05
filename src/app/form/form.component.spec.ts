import { FormComponent } from './form.component';
import { first } from 'rxjs/operators';
import { Todo } from '../Todo';

describe('FormComponent', () => {
  let component: FormComponent;
  // let fixture: ComponentFixture<FormComponent>;

  /*beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ]
    })
    .compileComponents();
  });*/

  beforeEach(() => {
    component = new FormComponent();
    // fixture = TestBed.createComponent(FormComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create FormComponent', done => {
    expect(component).toBeTruthy();
    done();
  });

  it('#addTodo should emit value', done => {
    const t: Todo = {
      id: 123,
      name: 'Todo name'
    }
    component.sendTodo
      .pipe(first())
      .subscribe(todo => {
        expect(todo.name).toEqual(t.name);
      })
    component.addTodo('Todo name');
    done();
  });

  it('#getNumber should return number', done => {
    const testString = '-a12-b3';
    const resNum = 123;

    expect(component.getNumber(testString))
      .toEqual(resNum);

    done();
  });
});
