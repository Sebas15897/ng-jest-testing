import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../src/app/app.component';
import { AppRoutingModule } from '../src/app/app.routing.module';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppRoutingModule],
    declarations: [AppComponent]
  }));

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
