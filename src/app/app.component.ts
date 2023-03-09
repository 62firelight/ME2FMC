import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ME2FMC';

  squadmates = this.fb.group({
    zaeed: this.fb.group({
      name: ['Zaeed'],
      recruited: [true],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    legion: this.fb.group({
      name: ['Legion'],
      recruited: [true],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    samara: this.fb.group({
      name: ['Samara'],
      recruited: [true],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    tali: this.fb.group({
      name: ['Tali'],
      recruited: [true],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    mordin: this.fb.group({
      name: ['Mordin'],
      recruited: [true, Validators.requiredTrue],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    garrus: this.fb.group({
      name: ['Garrus'],
      recruited: [true, Validators.requiredTrue],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    miranda: this.fb.group({
      name: ['Miranda'],
      recruited: [true, Validators.requiredTrue],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    grunt: this.fb.group({
      name: ['Grunt'],
      recruited: [true],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    jacob: this.fb.group({
      name: ['Jacob'],
      recruited: [true, Validators.requiredTrue],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    thane: this.fb.group({
      name: ['Thane'],
      recruited: [true],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    jack: this.fb.group({
      name: ['Jack'],
      recruited: [true, Validators.requiredTrue],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    kasumi: this.fb.group({
      name: ['Kasumi'],
      recruited: [true],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
  });
  insufficientSquadmates = false;

  squadmateColumns = ['name', 'recruited', 'loyal'];
  squadmateStatusData = [
    { name: 'Zaeed', recruited: true, loyal: true },
    { name: 'Legion', recruited: true, loyal: true },
    { name: 'Samara', recruited: true, loyal: true },
    { name: 'Tali', recruited: true, loyal: true },
    { name: 'Mordin', recruited: true, loyal: true },
    { name: 'Garrus', recruited: true, loyal: true },
    { name: 'Miranda', recruited: true, loyal: true },
    { name: 'Grunt', recruited: true, loyal: true },
    { name: 'Jacob', recruited: true, loyal: true },
    { name: 'Thane', recruited: true, loyal: true },
    { name: 'Jack', recruited: true, loyal: true },
    { name: 'Kasumi', recruited: true, loyal: true },
  ];
  availableSquadmates: any[] = [];

  shipUpgradeColumns = ['name', 'included'];
  shipUpgrades = this.fb.group({
    armor: this.fb.group({
      name: ['Heavy Ship Armor'],
      included: [true]
    }),
    shield: this.fb.group({
      name: ['Multicore Shielding'],
      included: [true]
    }),
    weapons: this.fb.group({
      name: ['Thanix Cannon'],
      included: [true]
    })
  });
  shipUpgradeData = [
    { name: 'Heavy Ship Armor', included: false },
    { name: 'Multicore Shielding', included: false },
    { name: 'Thanix Cannon', included: false }
  ];
  noArmorDeaths = [
    'Jack'
  ];
  noShieldDeaths = [
    'Kasumi',
    'Legion',
    'Tali',
    'Thane',
    'Garrus',
    'Zaeed',
    'Grunt',
    'Samara'
  ];
  noWeaponsDeaths = [
    'Thane',
    'Garrus',
    'Zaeed',
    'Grunt',
    'Jack',
    'Samara'
  ]
  noArmorReason = 'No armor upgrade';
  noShieldReason = 'No shield upgrade';
  noWeaponsReason = 'No weapons upgrade';

  oculusSquadmates = this.fb.group({
    oculus1: ['', Validators.required],
    oculus2: ['', Validators.required]
  });

  ventSpecialists = [
    'Tali',
    'Mordin',
    'Thane',
    'Kasumi',
    'Garrus',
    'Jacob',
    'Legion',
  ];
  fireteamLeaders = [
    'Tali',
    'Mordin',
    'Zaeed',
    'Grunt',
    'Samara',
    'Jack',
    'Thane',
    'Kasumi',
    'Garrus',
    'Miranda',
    'Jacob',
    'Legion',
  ];

  bioticSpecialists = [
    'Samara',
    'Jack',
    'Thane',
    'Miranda',
    'Jacob',
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() { }

  killSquadmate(doomedSquadmates: string[], deathReason: string) {
    for (var doomedSquadmate of doomedSquadmates) {
      var squadmateToDie = undefined;

      for (var squadmate of this.availableSquadmates) {
        if (squadmate.recruited === true
          && squadmate.inCurrentSquad === false
          && squadmate.deathReason === ''
          && squadmate.name === doomedSquadmate) {
          squadmateToDie = squadmate;
          break;
        }
      }

      if (squadmateToDie !== undefined) {
        squadmateToDie.deathReason = deathReason;
        console.log(`${squadmateToDie.name} died for reason: ${deathReason}`);
        break;
      }
    }
  }

  assignSquadmates(activeSquadmate1: string | null, activeSquadmate2: string | null, assign = true) {
    if (activeSquadmate1 === null || activeSquadmate2 === null) {
      return;
    }

    for (var squadmate of this.availableSquadmates) {
      // TODO: Check if squadmate is recruited and alive
      if (squadmate.name === activeSquadmate1) {
        squadmate.inCurrentSquad = assign ? true : false;
      } else if (squadmate.name === activeSquadmate2) {
        squadmate.inCurrentSquad = assign ? true : false;
      }
    }
  }

  submitSquadmateStatus(stepper: MatStepper) {
    this.insufficientSquadmates = false;

    var squadmateObjects = Object.values(this.squadmates.value);

    // Count recruited squadmates
    var recruitedSquadmates = 0;
    for (var index in squadmateObjects) {
      var squadmateObject = squadmateObjects[index];

      if (squadmateObject.recruited === true || squadmateObject.recruited === undefined) {
        recruitedSquadmates++;
      }
    }

    if (recruitedSquadmates >= 8) {
      this.availableSquadmates = [...Object.values(this.squadmates.value)];
      stepper.next();
    } else {
      this.insufficientSquadmates = true;
    }
  }

  submitShipUpgrades(stepper: MatStepper) {
    // Check if armor was upgraded
    var shipUpgradeObjects = [...Object.values(this.shipUpgrades.value)];

    var armor = shipUpgradeObjects[0];
    if (armor !== undefined && armor.included == false) {
      this.killSquadmate(this.noArmorDeaths, this.noArmorReason);
    }

    stepper.next();
  }

  submitOculusSquadmates(stepper: MatStepper) {
    // Find out who is currently in Shepard's squad when fighting the Oculus
    var activeSquadmates = [...Object.values(this.oculusSquadmates.value)];

    this.assignSquadmates(activeSquadmates[0], activeSquadmates[1]);

    // Get ship upgrades
    var shipUpgradeObjects = [...Object.values(this.shipUpgrades.value)];

    var shield = shipUpgradeObjects[1];
    if (shield !== undefined && shield.included == false) {
      this.killSquadmate(this.noShieldDeaths, this.noShieldReason);
    }

    var weapons = shipUpgradeObjects[2];
    if (weapons !== undefined && weapons.included == false) {
      this.killSquadmate(this.noWeaponsDeaths, this.noWeaponsReason);
    }

    // Unassign active squadmates
    this.assignSquadmates(activeSquadmates[0], activeSquadmates[1], false);

    stepper.next();
  }
}
