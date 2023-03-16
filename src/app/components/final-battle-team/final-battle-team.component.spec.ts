import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalBattleTeamComponent } from './final-battle-team.component';

describe('FinalBattleTeamComponent', () => {
  let component: FinalBattleTeamComponent;
  let fixture: ComponentFixture<FinalBattleTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalBattleTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalBattleTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
