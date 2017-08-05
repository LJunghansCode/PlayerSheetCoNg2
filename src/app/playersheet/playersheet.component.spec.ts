import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersheetComponent } from './playersheet.component';

describe('PlayersheetComponent', () => {
  let component: PlayersheetComponent;
  let fixture: ComponentFixture<PlayersheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
