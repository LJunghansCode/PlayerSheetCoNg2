import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSpellsComponent } from './player-spells.component';

describe('PlayerSpellsComponent', () => {
  let component: PlayerSpellsComponent;
  let fixture: ComponentFixture<PlayerSpellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSpellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
