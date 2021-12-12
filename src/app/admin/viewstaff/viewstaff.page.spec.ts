import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewstaffPage } from './viewstaff.page';

describe('ViewstaffPage', () => {
  let component: ViewstaffPage;
  let fixture: ComponentFixture<ViewstaffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewstaffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewstaffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
