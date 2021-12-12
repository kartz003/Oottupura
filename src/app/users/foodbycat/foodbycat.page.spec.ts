import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodbycatPage } from './foodbycat.page';

describe('FoodbycatPage', () => {
  let component: FoodbycatPage;
  let fixture: ComponentFixture<FoodbycatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodbycatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodbycatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
