import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatefoodPage } from './updatefood.page';

describe('UpdatefoodPage', () => {
  let component: UpdatefoodPage;
  let fixture: ComponentFixture<UpdatefoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatefoodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatefoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
