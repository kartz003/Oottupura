import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewaorderPage } from './viewaorder.page';

describe('ViewaorderPage', () => {
  let component: ViewaorderPage;
  let fixture: ComponentFixture<ViewaorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewaorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
