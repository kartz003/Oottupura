import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddcouponPage } from './addcoupon.page';

describe('AddcouponPage', () => {
  let component: AddcouponPage;
  let fixture: ComponentFixture<AddcouponPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcouponPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddcouponPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
