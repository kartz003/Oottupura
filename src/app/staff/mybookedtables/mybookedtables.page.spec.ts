import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MybookedtablesPage } from './mybookedtables.page';

describe('MybookedtablesPage', () => {
  let component: MybookedtablesPage;
  let fixture: ComponentFixture<MybookedtablesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybookedtablesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MybookedtablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
