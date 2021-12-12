import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewtablebyidPage } from './viewtablebyid.page';

describe('ViewtablebyidPage', () => {
  let component: ViewtablebyidPage;
  let fixture: ComponentFixture<ViewtablebyidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtablebyidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewtablebyidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
