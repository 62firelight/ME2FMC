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
  choosableSquadmates = [
    'Zaeed',
    'Legion',
    'Samara',
    'Tali',
    'Mordin',
    'Garrus',
    'Miranda',
    'Grunt',
    'Jacob',
    'Thane',
    'Jack',
    'Kasumi'
  ];
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

  infiltrationTeam = this.fb.group({
    ventSpecialist: ['', Validators.required],
    fireteamOneLeader: ['', Validators.required]
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
  goodVentSpecialists = [
    'Tali',
    'Legion',
    'Kasumi'
  ];
  fireteamOneLeaders = [
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
  goodFireteamLeaders = [
    'Jacob',
    'Miranda',
    'Garrus'
  ];
  badVentSpecialistReason = 'Bad vent specialist';
  badfireteamOneLeaderReason = 'Bad fireteam 1 leader';

  longWalkTeam = this.fb.group({
    bioticSpecialist: ['', Validators.required],
    fireteamTwoLeader: ['', Validators.required],
    crewEscort: ['', Validators.required],
    swarmSquadmate1: ['', Validators.required],
    swarmSquadmate2: ['', Validators.required]
  });
  bioticSpecialists = [
    'Samara',
    'Jack',
    'Thane',
    'Miranda',
    'Jacob',
  ];
  goodBioticSpecialists = [
    'Samara',
    'Jack'
  ];
  badBioticSpecialistDeaths = [
    'Thane',
    'Jack',
    'Garrus',
    'Legion',
    'Grunt',
    'Samara',
    'Jacob',
    'Tali',
    'Kasumi',
    'Zaeed',
    'Morinth'
  ];
  badBioticSpecialistReason = 'Bad biotic specialist';
  badfireteamTwoLeaderReason = 'Bad fireteam 2 leader';
  badCrewEscortReason = 'Disloyal escort';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.oculusSquadmates.get('oculus1')?.valueChanges.subscribe(
    //   result => this.oculusSquadmates.get('oculus2')?.enable()
    // );

    // this.infiltrationTeam.get('ventSpecialist')?.valueChanges.subscribe(
    //   result => this.infiltrationTeam.get('fireteamOneLeader')?.enable()
    // );
  }

  updateSquadmateOptions(squadmateOptions: string[]) {
    return squadmateOptions.filter(squadmateOption => {
      var squadmate = this.availableSquadmates.find(squadmate => squadmate.name === squadmateOption);
      return squadmate.recruited && squadmate.deathReason == '';
    });
  }

  killSquadmate(doomedSquadmates: string[], deathReason: string, outsideCurrentSquad = false) {
    for (var doomedSquadmate of doomedSquadmates) {
      var squadmateToDie = undefined;

      for (var squadmate of this.availableSquadmates) {
        // If a squadmate is in the active squad and we are not allowed to kill anyone outside
        // the current squad, skip to the next squadmate
        if (outsideCurrentSquad && squadmate.inCurrentSquad) {
          continue;
        }

        if (squadmate.recruited === true
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
        squadmate.inCurrentSquad = assign
      } else if (squadmate.name === activeSquadmate2) {
        squadmate.inCurrentSquad = assign;
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

    // Update list of choosable squadmates for next section
    this.choosableSquadmates = this.updateSquadmateOptions(this.choosableSquadmates);
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
      this.killSquadmate(this.noShieldDeaths, this.noShieldReason, true);
    }

    var weapons = shipUpgradeObjects[2];
    if (weapons !== undefined && weapons.included == false) {
      this.killSquadmate(this.noWeaponsDeaths, this.noWeaponsReason, true);
    }

    // Unassign active squadmates
    this.assignSquadmates(activeSquadmates[0], activeSquadmates[1], false);

    // Update lists for next section
    this.ventSpecialists = this.updateSquadmateOptions(this.ventSpecialists);
    this.fireteamOneLeaders = this.updateSquadmateOptions(this.fireteamOneLeaders);
    stepper.next();
  }

  submitInfiltrationTeam(stepper: MatStepper) {
    var infiltrationTeam = [...Object.values(this.infiltrationTeam.value)];
    var ventSpecialist = infiltrationTeam[0];
    var fireteamOneLeader = infiltrationTeam[1];

    if (ventSpecialist === null || fireteamOneLeader === null) {
      // ERROR
      return;
    }

    var ventSpecialistObj = this.availableSquadmates.find(squadmate => squadmate.name === ventSpecialist);
    var fireteamOneLeaderObj = this.availableSquadmates.find(squadmate => squadmate.name === fireteamOneLeader);
    if (!this.goodVentSpecialists.includes(ventSpecialist) || !ventSpecialistObj.loyal) {
      this.killSquadmate([ventSpecialist], this.badVentSpecialistReason);
    } else if (!this.goodFireteamLeaders.includes(fireteamOneLeader) || !fireteamOneLeaderObj.loyal) {
      this.killSquadmate([ventSpecialist], this.badfireteamOneLeaderReason);
    }

    // Update lists for next section
    this.bioticSpecialists = this.updateSquadmateOptions(this.bioticSpecialists);
    this.fireteamOneLeaders = this.updateSquadmateOptions(this.fireteamOneLeaders);
    this.choosableSquadmates = this.updateSquadmateOptions(this.choosableSquadmates);
    stepper.next();
  }

  submitLongWalkTeam(stepper: MatStepper) {
    var longWalkTeam = [...Object.values(this.longWalkTeam.value)];
    var bioticSpecialist = longWalkTeam[0];
    var fireteamTwoLeader = longWalkTeam[1];
    var crewEscort = longWalkTeam[2];
    var swarmSquadmate1 = longWalkTeam[3];
    var swarmSquadmate2 = longWalkTeam[4];

    if (bioticSpecialist === null || fireteamTwoLeader === null 
    || crewEscort === null || swarmSquadmate1 === null 
    || swarmSquadmate2 === null) {
      // ERROR
      return;
    }

    var bioticSpecialistObj = this.availableSquadmates.find(squadmate => squadmate.name === bioticSpecialist);
    if (!this.goodBioticSpecialists.includes(bioticSpecialist) || !bioticSpecialistObj.loyal) {
      var swarmSquadmate1Index = this.badBioticSpecialistDeaths.indexOf(swarmSquadmate1);
      var swarmSquadmate2Index = this.badBioticSpecialistDeaths.indexOf(swarmSquadmate2);

      if (swarmSquadmate2Index >= swarmSquadmate1Index) {
        this.killSquadmate([swarmSquadmate1], this.badBioticSpecialistReason);
      } else {
        this.killSquadmate([swarmSquadmate2], this.badBioticSpecialistReason);
      }
    }

    var fireteamTwoLeaderObj = this.availableSquadmates.find(squadmate => squadmate.name === fireteamTwoLeader);
    if (fireteamTwoLeader !== 'Miranda' && (!fireteamTwoLeaderObj.loyal || !this.goodFireteamLeaders.includes(fireteamTwoLeader))) {
      this.killSquadmate([fireteamTwoLeader], this.badfireteamTwoLeaderReason);
    }

    var crewEscortObj = this.availableSquadmates.find(squadmate => squadmate.name === crewEscort);
    if (!crewEscortObj.loyal) {
      this.killSquadmate([crewEscort], this.badCrewEscortReason);
    }
    // TODO: Add 'No one' option and calculate crew survival

    this.choosableSquadmates = this.updateSquadmateOptions(this.choosableSquadmates);
    stepper.next();
  }
}
