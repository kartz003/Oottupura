import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewtablesPage } from './viewtables.page';

describe('ViewtablesPage', () => {
  let component: ViewtablesPage;
  let fixture: ComponentFixture<ViewtablesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtablesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewtablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
