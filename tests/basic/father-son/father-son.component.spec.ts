import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FatherSonComponent } from '../../../src/app/basic/father-son/father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compilet: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatherSonComponent],
    });
    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compilet = fixture.nativeElement;
    jest.clearAllMocks();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('debe hacer match con el snapshot', () => {
    expect(compilet).toMatchSnapshot();
  });

  test('no deben de aparecer los botones si no hay un client', () => {
    const btn = compilet.querySelectorAll('button');
    expect(btn.length).toBeFalsy();
  });

  test('deben de aparecer los 2 botones si  hay un client', () => {
    component.client = { name: 'Juan', id: 1 };
    fixture.detectChanges();
    const buttons = compilet.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  test('Si hay cliente hacer match con el snapshot', () => {
    component.client = { name: 'Juan', id: 1 };
    fixture.detectChanges();
    expect(compilet).toMatchSnapshot();
  });

  test('Debe emitir  cuando se hace click en el boton de eliminar', () => {
    component.client = { name: 'Juan', id: 1 };
    fixture.detectChanges();
    jest.spyOn(component.onDeleteClient, 'emit');

    const btnDelete = compilet.querySelector('#btn-delete');
    btnDelete?.dispatchEvent(new Event('click'));
    expect(component.onDeleteClient.emit).toHaveBeenCalled();
  });

  test('Debe de emitir onClientUpdated con el botón de cambiar ID', () => {
    component.client = { name: 'Juan', id: 1 };
    fixture.detectChanges();
    jest.spyOn(component.onClientUpdated, 'emit');

    const btnChange = compilet.querySelector('#btn-change');
    btnChange?.dispatchEvent(new Event('click'));
    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({
      name: 'Juan',
      id: 5,
    });
  });

  test('Debe de imitir onChangeCLient con el ID especificado si hay un cliente', () => {
    jest.spyOn(component.onClientUpdated, 'emit');
    component.onChange(10);
    expect(component.onClientUpdated.emit).not.toHaveBeenCalled();

    component.client = { name: 'Juan', id: 1 };
    fixture.detectChanges();
    component.onChange(10);
    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({
      name: 'Juan',
      id: 10,
    });
  });
});
