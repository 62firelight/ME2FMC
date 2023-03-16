import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OculusSquadmatesComponent } from './oculus-squadmates.component';

describe('OculusSquadmatesComponent', () => {
  let component: OculusSquadmatesComponent;
  let fixture: ComponentFixture<OculusSquadmatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OculusSquadmatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OculusSquadmatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
