import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';
import { ShipUpgrades } from 'src/app/interfaces/ShipUpgrades';

@Component({
  selector: 'app-ship-upgrades',
  templateUrl: './ship-upgrades.component.html',
  styleUrls: ['./ship-upgrades.component.css']
})
export class ShipUpgradesComponent {
  shipUpgrades: FormGroup<ShipUpgrades>;

  @Output() newShipUpgradesEvent = new EventEmitter<FormGroup>();

  constructor(private constants: AppConstants) {
    this.shipUpgrades = constants.SHIP_UPGRADES;
  }

}
