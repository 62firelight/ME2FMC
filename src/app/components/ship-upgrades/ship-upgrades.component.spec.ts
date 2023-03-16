import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipUpgradesComponent } from './ship-upgrades.component';

describe('ShipUpgradesComponent', () => {
  let component: ShipUpgradesComponent;
  let fixture: ComponentFixture<ShipUpgradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipUpgradesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipUpgradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
