import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewbookedtablesPage } from './viewbookedtables.page';

describe('ViewbookedtablesPage', () => {
  let component: ViewbookedtablesPage;
  let fixture: ComponentFixture<ViewbookedtablesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbookedtablesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewbookedtablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
