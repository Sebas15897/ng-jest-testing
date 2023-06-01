import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FatherComponent } from '../../../src/app/basic/father/father.component';
import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';
import { By } from '@angular/platform-browser';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatherComponent, FatherSonComponent]
    });
    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('debe de extablecer el cliente con el nombre indicado', () => {
    component.onSetClienrt('Juan');
    fixture.detectChanges();
    const codeDiv = compiled.querySelector('#client-div');
    expect(codeDiv?.textContent).toContain('name');
    expect(codeDiv?.textContent).toContain('Juan');
    expect(codeDiv?.textContent).toContain("1");
  });

  test('debe de borrar el cliente si se emite onDelClient', () => {
    component.client = {
      id: 1,
      name: 'Juan',
    }
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent));
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance;
    sonComponent.onDeleteClient.emit();
    expect(component.client).toBeUndefined();
  });

  test('debe de actialixzar el cliente onClientUpdate', () => {
    component.client = {
      id: 1,
      name: 'Juan',
    }
    fixture.detectChanges();

    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent));
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance;
    sonComponent.onClientUpdated.emit({ id: 10, name: 'Juan Carlos'});
    expect(component.client).toEqual({ id: 10, name: 'Juan Carlos'});
  });


});
