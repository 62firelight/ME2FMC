import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongWalkTeamComponent } from './long-walk-team.component';

describe('LongWalkTeamComponent', () => {
  let component: LongWalkTeamComponent;
  let fixture: ComponentFixture<LongWalkTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongWalkTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongWalkTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
