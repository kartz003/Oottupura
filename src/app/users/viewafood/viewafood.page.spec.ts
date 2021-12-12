import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewafoodPage } from './viewafood.page';

describe('ViewafoodPage', () => {
  let component: ViewafoodPage;
  let fixture: ComponentFixture<ViewafoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewafoodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewafoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
