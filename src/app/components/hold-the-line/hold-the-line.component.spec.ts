import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldTheLineComponent } from './hold-the-line.component';

describe('HoldTheLineComponent', () => {
  let component: HoldTheLineComponent;
  let fixture: ComponentFixture<HoldTheLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldTheLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoldTheLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
