import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallemusicaPage } from './detallemusica.page';

describe('DetallemusicaPage', () => {
  let component: DetallemusicaPage;
  let fixture: ComponentFixture<DetallemusicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallemusicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallemusicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
