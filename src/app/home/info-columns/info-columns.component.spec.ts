import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoColumnsComponent } from './info-columns.component';

describe('InfoColumnsComponent', () => {
  let component: InfoColumnsComponent;
  let fixture: ComponentFixture<InfoColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
