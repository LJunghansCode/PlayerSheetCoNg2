import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompanionComponent } from './new-companion.component';

describe('NewCompanionComponent', () => {
  let component: NewCompanionComponent;
  let fixture: ComponentFixture<NewCompanionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCompanionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompanionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
