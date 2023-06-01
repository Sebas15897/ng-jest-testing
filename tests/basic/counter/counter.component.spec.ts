import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from '../../../src/app/basic/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe de hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('increment debe incrementar (5) en el contador', () => {
    component.incrementBy(5);
    expect(component.counter).toBe(15);
  });

  test('al hacer click debe aumentar o disminuir de 1 en 1', () => {
    const buttons = compiled.querySelectorAll('button');

    buttons[0].click();
    expect(component.counter).toBe(11);
    buttons[1].click();
    buttons[1].click();
    expect(component.counter).toBe(9);
  });

  test('al cambiar el counter debe actualizar la etiqueta h1', () => {
    component.incrementBy(10);
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('10');
  });
});
