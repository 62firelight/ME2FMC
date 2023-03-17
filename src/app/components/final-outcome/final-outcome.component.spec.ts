import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalOutcomeComponent } from './final-outcome.component';

describe('FinalOutcomeComponent', () => {
  let component: FinalOutcomeComponent;
  let fixture: ComponentFixture<FinalOutcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalOutcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
