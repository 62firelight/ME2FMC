import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiltrationTeamComponent } from './infiltration-team.component';

describe('InfiltrationTeamComponent', () => {
  let component: InfiltrationTeamComponent;
  let fixture: ComponentFixture<InfiltrationTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfiltrationTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiltrationTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
