import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadnavbarComponent } from './headnavbar.component';

describe('HeadnavbarComponent', () => {
  let component: HeadnavbarComponent;
  let fixture: ComponentFixture<HeadnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
