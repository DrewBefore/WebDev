import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyFormComponent } from './udemy-form.component';

describe('UdemyFormComponent', () => {
  let component: UdemyFormComponent;
  let fixture: ComponentFixture<UdemyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdemyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
