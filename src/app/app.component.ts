import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatStep, MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ME2 Final Mission Calculator';

  showLoyalSquadmates = false;

  squadmates = this.fb.nonNullable.group({
    zaeed: this.fb.nonNullable.group({
      name: ['Zaeed'],
      recruited: [true],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    legion: this.fb.nonNullable.group({
      name: ['Legion'],
      recruited: [true],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    samara: this.fb.nonNullable.group({
      name: ['Samara'],
      recruited: [true],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    tali: this.fb.nonNullable.group({
      name: ['Tali'],
      recruited: [true],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    mordin: this.fb.nonNullable.group({
      name: ['Mordin'],
      recruited: [{ value: true, disabled: true }, Validators.requiredTrue],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    garrus: this.fb.nonNullable.group({
      name: ['Garrus'],
      recruited: [{ value: true, disabled: true }, Validators.requiredTrue],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    miranda: this.fb.nonNullable.group({
      name: ['Miranda'],
      recruited: [{ value: true, disabled: true }, Validators.requiredTrue],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    grunt: this.fb.nonNullable.group({
      name: ['Grunt'],
      recruited: [true],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    jacob: this.fb.nonNullable.group({
      name: ['Jacob'],
      recruited: [{ value: true, disabled: true }, Validators.requiredTrue],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    thane: this.fb.nonNullable.group({
      name: ['Thane'],
      recruited: [true],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    jack: this.fb.nonNullable.group({
      name: ['Jack'],
      recruited: [{ value: true, disabled: true }, Validators.requiredTrue],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
    kasumi: this.fb.nonNullable.group({
      name: ['Kasumi'],
      recruited: [true],
      loyal: [true],
      inCurrentSquad: [false],
      deathReason: ['']
    }),
  });
  recruitedSquadmates = 12;
  insufficientSquadmates = false;
  legionAs8thSquadmate = false;
  samaraIsMorinth = false;

  initialChoosableSquadmates = [
    'Zaeed',
    'Legion',
    'Samara',
    'Morinth',
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
  choosableSquadmates: string[] = [];
  availableSquadmates: any[] = [];
  normandyCrewDead = false;

  shipUpgrades = this.fb.nonNullable.group({
    armor: this.fb.nonNullable.group({
      name: ['Heavy Ship Armor'],
      included: [true]
    }),
    shield: this.fb.nonNullable.group({
      name: ['Multicore Shielding'],
      included: [true]
    }),
    weapons: this.fb.nonNullable.group({
      name: ['Thanix Cannon'],
      included: [true]
    })
  });
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
    'Samara',
    'Morinth'
  ];
  noWeaponsDeaths = [
    'Thane',
    'Garrus',
    'Zaeed',
    'Grunt',
    'Jack',
    'Samara',
    'Morinth'
  ];
  noArmorReason = 'No armor upgrade';
  noShieldReason = 'No shield upgrade';
  noWeaponsReason = 'No weapons upgrade';

  oculusSquadmates = this.fb.nonNullable.group({
    oculusSquadmate1: ['', Validators.required],
    oculusSquadmate2: ['', Validators.required]
  });

  infiltrationTeam = this.fb.nonNullable.group({
    techSpecialist: ['', Validators.required],
    fireteamOneLeader: ['', Validators.required]
  });
  initialTechSpecialists = [
    'Tali',
    'Mordin',
    'Thane',
    'Kasumi',
    'Garrus',
    'Jacob',
    'Legion',
  ];
  techSpecialists: string[] = [];
  goodTechSpecialists = [
    'Tali',
    'Legion',
    'Kasumi'
  ];
  initialFireteamOneLeaders = [
    'Tali',
    'Mordin',
    'Zaeed',
    'Grunt',
    'Samara',
    'Morinth',
    'Jack',
    'Thane',
    'Kasumi',
    'Garrus',
    'Miranda',
    'Jacob',
    'Legion'
  ];
  fireteamOneLeaders: string[] = [];
  goodFireteamLeaders = [
    'Jacob',
    'Miranda',
    'Garrus'
  ];
  badTechSpecialistReason = 'Bad tech specialist';
  badfireteamOneLeaderReason = 'Bad fireteam 1 leader';

  longWalkTeam = this.fb.nonNullable.group({
    bioticSpecialist: ['', Validators.required],
    fireteamTwoLeader: ['', Validators.required],
    crewEscort: ['', Validators.required],
    swarmSquadmate1: ['', Validators.required],
    swarmSquadmate2: ['', Validators.required]
  });
  initialBioticSpecialists = [
    'Samara',
    'Morinth',
    'Jack',
    'Thane',
    'Miranda',
    'Jacob',
  ];
  bioticSpecialists: string[] = [];
  goodBioticSpecialists = [
    'Samara',
    'Morinth',
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
    'Mordin',
    'Tali',
    'Kasumi',
    'Zaeed',
    'Morinth'
  ];
  badBioticSpecialistReason = 'Bad biotic specialist';
  badfireteamTwoLeaderReason = 'Bad fireteam 2 leader';
  badCrewEscortReason = 'Non-loyal escort';

  finalBattleTeam = this.fb.nonNullable.group({
    finalSquadmate1: ['', Validators.required],
    finalSquadmate2: ['', Validators.required]
  });
  nonloyalFinalSquadmateReason = 'Non-loyal squadmate in final battle';
  htlScores = new Map([
    ['Grunt', 4],
    ['Zaeed', 4],
    ['Garrus', 4],
    ['Thane', 2],
    ['Legion', 2],
    ['Samara', 2],
    ['Morinth', 2],
    ['Jacob', 2],
    ['Miranda', 2],
    ['Jack', 1],
    ['Kasumi', 1],
    ['Tali', 1],
    ['Mordin', 1],
  ]);
  currentHtlScores: Map<string, number> = new Map();
  totalHtlScore = 0;
  htlScore = 0;
  htlDeathsOrder = [
    'Mordin',
    'Tali',
    'Kasumi',
    'Jack',
    'Miranda',
    'Jacob',
    'Garrus',
    'Samara',
    'Morinth',
    'Legion',
    'Thane',
    'Zaeed',
    'Grunt'
  ];
  htlDeaths: string[] = [];
  htlDeathReason = 'Held the line';

  constructor(private fb: FormBuilder) {
    this.initializeOptions();
  }

  initializeOptions() {
    this.choosableSquadmates = this.initialChoosableSquadmates;
    this.techSpecialists = this.initialTechSpecialists;
    this.fireteamOneLeaders = this.initialFireteamOneLeaders;
    this.bioticSpecialists = this.initialBioticSpecialists;

    this.normandyCrewDead = false;

    this.currentHtlScores.clear();
    this.htlDeaths = [];
  }

  ngOnInit() {
    this.recruitedSquadmates = [...Object.values(this.squadmates.getRawValue())].filter(squadmate => squadmate.recruited).length;

    this.squadmates.valueChanges.subscribe(result => {
      this.recruitedSquadmates = [...Object.values(this.squadmates.getRawValue())].filter(squadmate => squadmate.recruited).length;
    });
  }

  resetCalculator(stepper: MatStepper) {
    // Reset stepper (and squadmate status with it)
    stepper.reset();

    // Reset all other forms
    this.shipUpgrades.reset();
    this.oculusSquadmates.reset();
    this.infiltrationTeam.reset();
    this.longWalkTeam.reset();
    this.finalBattleTeam.reset();

    if (this.samaraIsMorinth) {
      this.toggleSamaraIsMorinth();
    }

    this.initializeOptions();
  }

  toggleSamaraIsMorinth() {
    this.samaraIsMorinth = !this.samaraIsMorinth;

    if (this.samaraIsMorinth) {
      this.squadmates.patchValue({
        samara: {
          name: 'Morinth',
          loyal: true
        }
      });
      this.squadmates.get('samara')?.get('loyal')?.disable();
    } else {
      this.squadmates.patchValue({
        samara: {
          name: 'Samara'
        }
      });
      this.squadmates.get('samara')?.get('loyal')?.enable();
    }
  }

  toggleAllRecruited() {
    var squadmates = Object.keys(this.squadmates.value);
    var newRecruitedValue = !Object.values(this.squadmates.value).some(squadmate => squadmate.recruited);

    for (var squadmate of squadmates) {
      if (this.squadmates.get(squadmate)?.get('recruited')?.disabled) {
        continue;
      }

      this.squadmates.patchValue({
        [squadmate]: {
          recruited: newRecruitedValue
        }
      })
    }
  }

  toggleAllLoyal() {
    var squadmates = Object.keys(this.squadmates.value);
    var newLoyaltyValue = !Object.values(this.squadmates.value).some(squadmate => squadmate.loyal);

    for (var squadmate of squadmates) {
      if (this.samaraIsMorinth && squadmate == 'samara') {
        continue;
      }

      this.squadmates.patchValue({
        [squadmate]: {
          loyal: newLoyaltyValue
        }
      })
    }
  }

  updateSquadmateOptions(squadmateOptions: string[]): string[] {
    return squadmateOptions.filter(squadmateOption => {
      var squadmate = this.availableSquadmates.find(squadmate => squadmate.name === squadmateOption);
      return squadmate !== undefined && squadmate.recruited && squadmate.deathReason == '';
    });
  }

  killSquadmate(doomedSquadmates: string[], deathReason: string, onlyKillOutsideCurrentSquad = false) {
    for (var doomedSquadmate of doomedSquadmates) {
      var squadmateToDie = undefined;

      for (var squadmate of this.availableSquadmates) {
        // If a squadmate is in the active squad and we are not allowed to kill anyone outside
        // the current squad, skip to the next squadmate
        if (onlyKillOutsideCurrentSquad && squadmate.inCurrentSquad) {
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
      if (squadmate.name === activeSquadmate1) {
        squadmate.inCurrentSquad = assign
      } else if (squadmate.name === activeSquadmate2) {
        squadmate.inCurrentSquad = assign;
      }
    }
  }

  getHtlScore(name: string, loyal: boolean): number {
    const htlScore = this.htlScores.get(name);

    if (htlScore === undefined) {
      return 0;
    }

    return htlScore + (loyal ? 1 : 0);
  }

  convertFromCamelCase(text: string): string {
    // insert a space before all caps
    return text.replace(/([A-Z0-9])/g, ' $1')
      // uppercase the first character
      .replace(/^./, function (str) { return str.toUpperCase(); })
  }

  killHtlDefenders(defenders: any[], numberOfHtlDeaths: number) {
    this.htlDeaths = [];

    var squadmateDeathOrderMap: Map<number, string> = new Map();
    var deadSquadmateIndexes: Set<number> = new Set();

    // Add each defender to a map
    for (var defender of defenders) {
      var squadmateDeathIndex = this.htlDeathsOrder.indexOf(defender);

      squadmateDeathOrderMap.set(squadmateDeathIndex, defender);
    }

    // Sort order of squadmate deaths
    squadmateDeathOrderMap = new Map([...squadmateDeathOrderMap].sort((a, b) => a[0] - b[0]));

    // Kill non-loyal squadmates first
    for (const [index, squadmateName] of squadmateDeathOrderMap) {
      var squadmateObj = undefined;
      for (var squadmate of this.availableSquadmates) {
        if (squadmate.name === squadmateName) {
          squadmateObj = squadmate;
          break;
        }
      }
      // var squadmateObj = this.availableSquadmates.find(squadmate => squadmate == squadmateName);

      if (squadmateObj !== undefined && squadmateObj.loyal === false) {
        this.htlDeaths.push(squadmateName);
        this.killSquadmate([squadmateName], this.htlDeathReason);
        numberOfHtlDeaths--;
        deadSquadmateIndexes.add(index);

        if (numberOfHtlDeaths <= 0) {
          break;
        }
      }
    }

    if (numberOfHtlDeaths > 0) {
      // Kill left-over squadmates
      for (const [index, squadmateName] of squadmateDeathOrderMap) {
        if (deadSquadmateIndexes.has(index)) {
          continue;
        }

        var squadmateObj = undefined;
        for (var squadmate of this.availableSquadmates) {
          if (squadmate.name === squadmateName) {
            squadmateObj = squadmate;
            break;
          }
        }
        // var squadmateObj = this.availableSquadmates.find(squadmate => squadmate == squadmateName);

        if (squadmateObj !== undefined) {
          this.htlDeaths.push(squadmateName);
          this.killSquadmate([squadmateName], this.htlDeathReason);
          numberOfHtlDeaths--;
          deadSquadmateIndexes.add(index);

          if (numberOfHtlDeaths <= 0) {
            break;
          }
        }
      }
    }
  }

  getRecruitedSquadmates(): number {
    return this.availableSquadmates.filter(squadmate => squadmate.recruited && squadmate.recruited).length;
  }

  getAliveSquadmates(): number {
    return this.availableSquadmates.filter(squadmate => squadmate.recruited && squadmate.deathReason === '').length;
  }

  submitSquadmateStatus(stepper: MatStepper, step: MatStep) {
    this.insufficientSquadmates = false;
    this.legionAs8thSquadmate = false;

    if (this.recruitedSquadmates == 8 && this.squadmates.value.legion?.recruited) {
      // Check if Legion is part of the squad
      this.legionAs8thSquadmate = true;
    } else if (this.recruitedSquadmates >= 8) {
      this.availableSquadmates = [...Object.values(this.squadmates.getRawValue())];
      // console.log(this.availableSquadmates);

      // Account for possibility where shield upgrade is 
      // unobtainable if Tali isn't recruited
      if (!this.squadmates.getRawValue().tali.recruited) {
        this.shipUpgrades.patchValue({
          shield: {
           included: false
          }
        });
        this.shipUpgrades.get('shield')?.disable();
      } else {
        this.shipUpgrades.get('shield')?.enable();
      }

      step.completed = true;
      stepper.next();
    } else {
      this.insufficientSquadmates = true;
    }
  }

  submitShipUpgrades(stepper: MatStepper, step: MatStep) {
    // Check if armor was upgraded
    var shipUpgradeObjects = [...Object.values(this.shipUpgrades.getRawValue())];

    var armor = shipUpgradeObjects[0];
    if (armor !== undefined && armor.included == false) {
      this.killSquadmate(this.noArmorDeaths, this.noArmorReason);
    }

    // Update list of choosable squadmates for next section
    this.choosableSquadmates = this.updateSquadmateOptions(this.choosableSquadmates);

    step.completed = true;
    stepper.next();
  }

  submitOculusSquadmates(stepper: MatStepper, step: MatStep) {
    // Find out who is currently in Shepard's squad when fighting the Oculus
    var activeSquadmates = [...Object.values(this.oculusSquadmates.value)];

    this.assignSquadmates(activeSquadmates[0], activeSquadmates[1]);

    // Get ship upgrades
    var shipUpgradeObjects = [...Object.values(this.shipUpgrades.getRawValue())];

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
    this.techSpecialists = this.updateSquadmateOptions(this.techSpecialists);
    this.fireteamOneLeaders = this.updateSquadmateOptions(this.fireteamOneLeaders);

    step.completed = true;
    stepper.next();
  }

  submitInfiltrationTeam(stepper: MatStepper, step: MatStep) {
    var infiltrationTeam = [...Object.values(this.infiltrationTeam.value)];
    var techSpecialist = infiltrationTeam[0];
    var fireteamOneLeader = infiltrationTeam[1];

    if (techSpecialist === null || fireteamOneLeader === null) {
      // ERROR
      return;
    }

    var techSpecialistObj = this.availableSquadmates.find(squadmate => squadmate.name === techSpecialist);
    var fireteamOneLeaderObj = this.availableSquadmates.find(squadmate => squadmate.name === fireteamOneLeader);
    if (!this.goodTechSpecialists.includes(techSpecialist) || !techSpecialistObj.loyal) {
      this.killSquadmate([techSpecialist], this.badTechSpecialistReason);
    } else if (!this.goodFireteamLeaders.includes(fireteamOneLeader) || !fireteamOneLeaderObj.loyal) {
      this.killSquadmate([techSpecialist], this.badfireteamOneLeaderReason);
    }

    // Update lists for next section
    this.bioticSpecialists = this.updateSquadmateOptions(this.bioticSpecialists);
    this.fireteamOneLeaders = this.updateSquadmateOptions(this.fireteamOneLeaders);
    this.choosableSquadmates = this.updateSquadmateOptions(this.choosableSquadmates);

    step.completed = true;
    stepper.next();
  }

  submitLongWalkTeam(stepper: MatStepper, step: MatStep) {
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

      if (swarmSquadmate1 != 'Miranda' && swarmSquadmate2Index >= swarmSquadmate1Index) {
        this.killSquadmate([swarmSquadmate1], this.badBioticSpecialistReason);
      } else {
        this.killSquadmate([swarmSquadmate2], this.badBioticSpecialistReason);
      }
    }

    if (crewEscort === 'None') {
      this.normandyCrewDead = true;
      console.log('Crew died for reason: No escort');
    } else {
      // var crewEscortObj = this.availableSquadmates.find(squadmate => squadmate.name === crewEscort);
      var crewEscortObj = undefined;
      for (var squadmate of this.availableSquadmates) {
        if (squadmate.name === crewEscort) {
          crewEscortObj = squadmate;
          break;
        }
      }
      if (crewEscortObj !== undefined) {
        if (!crewEscortObj.loyal) {
          this.killSquadmate([crewEscort], this.badCrewEscortReason);
        } else {
          crewEscortObj.recruited = false;
        }
      }
    }

    var fireteamTwoLeaderObj = this.availableSquadmates.find(squadmate => squadmate.name === fireteamTwoLeader);
    // Override death if there are only 3 more squadmates left
    if (fireteamTwoLeader !== 'Miranda' && ((!fireteamTwoLeaderObj.loyal || !this.goodFireteamLeaders.includes(fireteamTwoLeader)) && this.getAliveSquadmates() > 3)) {
      this.killSquadmate([fireteamTwoLeader], this.badfireteamTwoLeaderReason);
    }

    // Update list for next section
    this.choosableSquadmates = this.updateSquadmateOptions(this.choosableSquadmates);

    step.completed = true;
    stepper.next();
  }

  submitFinalBattle(stepper: MatStepper, step: MatStep) {
    var finalBattleTeam = [...Object.values(this.finalBattleTeam.value)];
    var finalSquadmate1 = finalBattleTeam[0];
    var finalSquadmate2 = finalBattleTeam[1];

    this.assignSquadmates(finalSquadmate1, finalSquadmate2);

    if (finalSquadmate1 === null || finalSquadmate2 === null) {
      // ERROR
      return;
    }

    var finalSquadmate1Obj = this.availableSquadmates.find(squadmate => squadmate.name === finalSquadmate1);
    if (!finalSquadmate1Obj.loyal) {
      this.killSquadmate([finalSquadmate1], this.nonloyalFinalSquadmateReason);
    }

    var finalSquadmate2Obj = this.availableSquadmates.find(squadmate => squadmate.name === finalSquadmate2);
    if (!finalSquadmate2Obj.loyal) {
      this.killSquadmate([finalSquadmate2], this.nonloyalFinalSquadmateReason);
    }

    // Calculate scores for Hold the Line
    this.totalHtlScore = 0;
    for (var squadmate of this.availableSquadmates) {
      if (!squadmate.recruited || squadmate.inCurrentSquad || squadmate.deathReason !== '') {
        continue;
      }

      const htlScore = this.getHtlScore(squadmate.name, squadmate.loyal);

      this.currentHtlScores.set(squadmate.name, htlScore);
      this.totalHtlScore += htlScore;
    }

    // Calculate average
    // this.htlScore = this.totalHtlScore / this.currentHtlScores.size;
    this.htlScore = this.totalHtlScore / 3;

    // Round average to 1dp
    // this.htlScore = Math.round(this.htlScore * 10) / 10;

    // Round score down
    this.htlScore = Math.floor(this.htlScore);

    const numberOfDefenders = this.currentHtlScores.size;
    const defenders = [...this.currentHtlScores.keys()];

    if (this.htlScore > numberOfDefenders) {
      this.htlScore = numberOfDefenders;
    }

    const numberOfDeaths = numberOfDefenders - this.htlScore;
    if (numberOfDeaths > 0) {
      this.killHtlDefenders(defenders, numberOfDeaths);
    }
    // if (numberOfDefenders >= 5) {
    //   if (this.htlScore < 2.0 && this.htlScore >= 1.5) {
    //     // Kill one squadmate
    //     this.killHtlDefenders(defenders, 1);
    //   } else if (this.htlScore < 1.5 && this.htlScore >= 0.5) {
    //     // Kill two squadmates
    //     this.killHtlDefenders(defenders, 2);
    //   } else if (this.htlScore < 0.5 && this.htlScore >= 0.0) {
    //     // Kill three squadmates
    //     this.killHtlDefenders(defenders, 3);
    //   }
    // } else if (numberOfDefenders === 4) {
    //   if (this.htlScore < 2.0 && this.htlScore > 1.0) {
    //     // Kill one squadmate
    //     this.killHtlDefenders(defenders, 1);
    //   } else if (this.htlScore <= 1.0 && this.htlScore >= 0.5) {
    //     // Kill two squadmates
    //     this.killHtlDefenders(defenders, 2);
    //   } else if (this.htlScore < 0.5 && this.htlScore > 0.0) {
    //     // Kill three squadmates
    //     this.killHtlDefenders(defenders, 3);
    //   } else if (this.htlScore <= 0.0) {
    //     // Kill all squadmates
    //     this.killHtlDefenders(defenders, 4);
    //   }
    // } else if (numberOfDefenders === 3) {
    //   if (this.htlScore < 2.0 && this.htlScore >= 1.0) {
    //     // Kill one squadmate
    //     this.killHtlDefenders(defenders, 1);
    //   } else if (this.htlScore < 1.0 && this.htlScore > 0.0) {
    //     // Kill two squadmates
    //     this.killHtlDefenders(defenders, 2);
    //   } else if (this.htlScore <= 0.0) {
    //     // Kill all three squadmates
    //     this.killHtlDefenders(defenders, 3);
    //   }
    // } else if (numberOfDefenders === 2) {
    //   if (this.htlScore < 2.0 && this.htlScore > 0.0) {
    //     // Kill one squadmate
    //     this.killHtlDefenders(defenders, 1);
    //   } else if (this.htlScore <= 0.0) {
    //     // Kill both squadmates
    //     this.killHtlDefenders(defenders, 2);
    //   }
    // } else if (numberOfDefenders === 1) {
    //   if (this.htlScore < 2.0 && this.htlScore >= 0.0) {
    //     // Kill squadmate
    //     this.killHtlDefenders(defenders, 1);
    //   }
    // }

    var crewEscort = this.longWalkTeam.value.crewEscort;
    if (crewEscort !== undefined) {
      var crewEscortObj = undefined;
      for (var squadmate of this.availableSquadmates) {
        if (squadmate.name === crewEscort) {
          crewEscortObj = squadmate;
          break;
        }
      }
      // var crewEscortObj = this.availableSquadmates.find(squadmate => squadmate.name === crewEscort);
      if (crewEscortObj !== undefined) {
        crewEscortObj.recruited = true;
      }
    }

    if (this.getAliveSquadmates() < 2) {
      console.log('Shepard died for reason: Less than 2 squadmates survived');
    }

    step.completed = true;
    stepper.next();
  }

  getSummary(): string {
    var summary =
      `Mass Effect 2 Suicide Mission Summary
    
`;

    summary += 'Squadmate Status\n';
    for (var squadmate of Object.values(this.squadmates.getRawValue())) {
      summary += `${squadmate.name}: ${squadmate.recruited ? 'Recruited' : 'Not Recruited'}`;
      if (squadmate.recruited) {
        summary += ` and ${squadmate.loyal ? "Loyal" : "Not Loyal"}\n`;
      } else {
        summary +='\n';
      }
      
    }
    summary += '\n';

    summary += 'Ship Upgrades\n';
    for (var shipUpgrade of Object.values(this.shipUpgrades.getRawValue())) {
      summary += `${shipUpgrade.name}: ${shipUpgrade.included ? 'Acquired' : 'Not Acquired'}\n`
    }
    summary += '\n';

    summary += 'Omega-4 Relay: The Oculus\n';
    for (var os in this.oculusSquadmates.controls) {
      const selection = this.oculusSquadmates.get(os)?.value;
      summary += `${this.convertFromCamelCase(os)}: ${selection ? selection : 'None'}\n`;
    }
    summary += '\n';

    summary += 'Collector Base: Infiltration\n';
    for (var i in this.infiltrationTeam.controls) {
      const selection = this.infiltrationTeam.get(i)?.value;
      summary += `${this.convertFromCamelCase(i)}: ${selection ? selection : 'None'}\n`;
    }
    summary += '\n';

    summary += 'Collector Base: The Long Walk\n';
    for (var l in this.longWalkTeam.controls) {
      const selection = this.longWalkTeam.get(l)?.value;
      summary += `${this.convertFromCamelCase(l)}: ${selection ? selection : 'None'}\n`;
    }
    summary += '\n';

    summary += 'Collector Base: Final Battle\n';
    for (var f in this.finalBattleTeam.controls) {
      const selection = this.finalBattleTeam.get(f)?.value;
      summary += `${this.convertFromCamelCase(f)}: ${selection ? selection : 'None'}\n`;
    }
    summary += '\n';

    summary += 'Collector Base: Hold the Line\n';
    summary += `There ${this.currentHtlScores.size == 1 ? "is" : "are"} ${this.currentHtlScores.size} squadmate${this.currentHtlScores.size == 1 ? "" : "s"} holding the line. Their individual score${this.currentHtlScores.size == 1 ? " is" : "s are"} as follows:\n`
    for (var [individual, score] of this.currentHtlScores) {
      summary += `* ${individual}: ${score}\n`;
    }
    summary += `The total squadmate score is ${this.totalHtlScore}.`;

    summary += `\n\n${this.htlScore == this.currentHtlScores.size ? "All" : this.htlScore} squadmate${this.htlScore == 1 ? "" : "s"} holding the line will survive. (${this.totalHtlScore} / 3 = ${this.htlScore} rounded down)\n`;

    if (this.htlDeaths.length > 0) {
      summary += `\n${this.htlDeaths.length} squadmate${this.htlDeaths.length == 1 ? "" : "s"} died holding the line, including:\n`
      for (var death of this.htlDeaths) {
        summary += `* ${death}\n`;
      }
    }
    summary += '\n';

    summary += 'Final Outcome\n';
    for (var sm of this.availableSquadmates) {
      if (sm.recruited) {
        summary += `${sm.name} - ${sm.deathReason ? `Died (${sm.deathReason.toLowerCase()})` : "Survived"}\n`;
      }
    }
    summary += `Normandy Crew - ${this.normandyCrewDead ? "Died (no escort)" : "Survived"}\n`;
    summary += `Shepard - ${this.getAliveSquadmates() < 2 ? "Died (less than 2 squadmates survived)" : "Survived"}\n`;
    summary += '\n';

    return summary;
    // return 'If you are seeing this, the copy text feature has not been fully implemented yet :(';
  }
}
