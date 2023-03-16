import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadmateStatusComponent } from './squadmate-status.component';

describe('SquadmateStatusComponent', () => {
  let component: SquadmateStatusComponent;
  let fixture: ComponentFixture<SquadmateStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquadmateStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquadmateStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
