import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatStepper, MatStep } from '@angular/material/stepper';
import { Subject } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';
import { FinalBattleTeam } from 'src/app/interfaces/FinalBattleTeam';
import { infiltrationTeam } from 'src/app/interfaces/InfiltrationTeam';
import { LongWalkTeam } from 'src/app/interfaces/LongWalkTeam';
import { OculusSquadmates } from 'src/app/interfaces/OculusSquadmates';
import { ShipUpgrades } from 'src/app/interfaces/ShipUpgrades';
import { Squadmates } from 'src/app/interfaces/Squadmates';
import { ConfirmDialog } from './confirm-dialog';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  showLoyalSquadmates = false;

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
  initialTechSpecialists = [
    'Tali',
    'Mordin',
    'Thane',
    'Kasumi',
    'Garrus',
    'Jacob',
    'Legion',
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
  initialBioticSpecialists = [
    'Samara',
    'Morinth',
    'Jack',
    'Thane',
    'Miranda',
    'Jacob',
  ];

  choosableSquadmates: string[] = [];
  availableSquadmates: any[] = [];
  techSpecialists: string[] = [];
  fireteamOneLeaders: string[] = [];
  bioticSpecialists: string[] = [];

  normandyCrewDead = false;
  shepardDead = false;

  squadmates: FormGroup<Squadmates>;
  shipUpgrades: FormGroup<ShipUpgrades>;
  oculusSquadmates: FormGroup<OculusSquadmates>;
  infiltrationTeam: FormGroup<infiltrationTeam>;
  longWalkTeam: FormGroup<LongWalkTeam>;
  finalBattleTeam: FormGroup<FinalBattleTeam>;

  goodTechSpecialists = [
    'Tali',
    'Legion',
    'Kasumi'
  ];
  goodFireteamLeaders = [
    'Jacob',
    'Miranda',
    'Garrus'
  ];
  goodBioticSpecialists = [
    'Samara',
    'Morinth',
    'Jack'
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

  noArmorReason = 'No armor upgrade';
  noShieldReason = 'No shield upgrade';
  noWeaponsReason = 'No weapons upgrade';
  badTechSpecialistReason = 'Bad tech specialist';
  badfireteamOneLeaderReason = 'Bad fireteam 1 leader';
  badBioticSpecialistReason = 'Bad biotic specialist';
  badfireteamTwoLeaderReason = 'Bad fireteam 2 leader';
  badCrewEscortReason = 'Non-loyal escort';
  nonloyalFinalSquadmateReason = 'Non-loyal squadmate in final battle';
  htlDeathReason = 'Held the line';

  resetting: Subject<boolean> = new Subject();
  calculateHtl: Subject<boolean> = new Subject();
  finishDeathCalculation: Subject<string[]> = new Subject();

  constructor(private constants: AppConstants, private fb: FormBuilder, public dialog: MatDialog) {
    this.squadmates = constants.SQUADMATES;
    this.shipUpgrades = constants.SHIP_UPGRADES;
    this.oculusSquadmates = constants.OCULUS_SQUADMATES;
    this.infiltrationTeam = constants.INFILTRATION_TEAM;
    this.longWalkTeam = constants.LONG_WALK_TEAM;
    this.finalBattleTeam = constants.FINAL_BATTLE_TEAM;

    this.initializeOptions();
  }

  initializeOptions() {
    this.choosableSquadmates = this.initialChoosableSquadmates;
    this.techSpecialists = this.initialTechSpecialists;
    this.fireteamOneLeaders = this.initialFireteamOneLeaders;
    this.bioticSpecialists = this.initialBioticSpecialists;

    this.normandyCrewDead = false;
    this.shepardDead = false;
  }

  ngOnInit() { }

  resetCalculator(stepper: MatStepper) {
    const dialogRef = this.dialog.open(ConfirmDialog);

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        // Reset stepper
        stepper.reset();

        // Reset all forms
        this.resetting.next(true);
        this.squadmates.reset();
        this.shipUpgrades.reset();
        this.oculusSquadmates.reset();
        this.infiltrationTeam.reset();
        this.longWalkTeam.reset();
        this.finalBattleTeam.reset();

        this.initializeOptions();
      }
    });
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

  killHtlDefenders(defenders: any[], numberOfHtlDeaths: number) {
    var htlDeaths: string[] = [];

    if (numberOfHtlDeaths <= 0) {
      this.finishDeathCalculation.next(htlDeaths);
      return;
    }

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
        htlDeaths.push(squadmateName);
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
          htlDeaths.push(squadmateName);
          this.killSquadmate([squadmateName], this.htlDeathReason);
          numberOfHtlDeaths--;
          deadSquadmateIndexes.add(index);

          if (numberOfHtlDeaths <= 0) {
            break;
          }
        }
      }
    }

    this.finishDeathCalculation.next(htlDeaths);
  }

  getRecruitedSquadmates(): number {
    return this.availableSquadmates.filter(squadmate => squadmate.recruited && squadmate.recruited).length;
  }

  getAliveSquadmates(): number {
    return this.availableSquadmates.filter(squadmate => squadmate.recruited && squadmate.deathReason === '').length;
  }

  submitSquadmateStatus(stepper: MatStepper, step: MatStep) {
    // Retrieve status of squadmates
    this.availableSquadmates = Object.values(this.squadmates.getRawValue());

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
  }

  submitShipUpgrades(stepper: MatStepper, step: MatStep) {
    // Retrieve state of ship upgrades
    const shipUpgrades = Object.values(this.shipUpgrades.getRawValue());

    // Check armor upgrade
    const armor = shipUpgrades[0];
    if (armor && armor.included == false) {
      this.killSquadmate(this.noArmorDeaths, this.noArmorReason);
    }

    // Update list of choosable squadmates for next section
    this.choosableSquadmates = this.updateSquadmateOptions(this.choosableSquadmates);

    step.completed = true;
    stepper.next();
  }

  submitOculusSquadmates(stepper: MatStepper, step: MatStep) {
    // Retrieve chosen squadmates for Oculus boss fight
    const oculusSquadmates = Object.values(this.oculusSquadmates.value);

    // Assign chosen squadmates
    this.assignSquadmates(oculusSquadmates[0], oculusSquadmates[1]);

    // Get ship upgrades
    const shipUpgrades = Object.values(this.shipUpgrades.getRawValue());

    // Check shield upgrade and weapons upgrade
    const shield = shipUpgrades[1];
    if (shield && shield.included == false) {
      this.killSquadmate(this.noShieldDeaths, this.noShieldReason, true);
    }
    const weapons = shipUpgrades[2];
    if (weapons && weapons.included == false) {
      this.killSquadmate(this.noWeaponsDeaths, this.noWeaponsReason, true);
    }

    // Unassign chosen squadmates
    this.assignSquadmates(oculusSquadmates[0], oculusSquadmates[1], false);

    // Update lists for next section
    this.techSpecialists = this.updateSquadmateOptions(this.techSpecialists);
    this.fireteamOneLeaders = this.updateSquadmateOptions(this.fireteamOneLeaders);

    step.completed = true;
    stepper.next();
  }

  submitInfiltrationTeam(stepper: MatStepper, step: MatStep) {
    // Retrieve chosen infiltration team
    const infiltrationTeam = Object.values(this.infiltrationTeam.value);
    const techSpecialist = infiltrationTeam[0];
    const fireteamOneLeader = infiltrationTeam[1];

    if (techSpecialist === null || fireteamOneLeader === null) {
      // ERROR
      return;
    }

    // Check tech specialist and fireteam one leader
    const chosenTechSpecialist = this.availableSquadmates.find(squadmate => squadmate.name === techSpecialist);
    const chosenFireteamOneLeader = this.availableSquadmates.find(squadmate => squadmate.name === fireteamOneLeader);
    if (!this.goodTechSpecialists.includes(techSpecialist) || !chosenTechSpecialist.loyal) {
      this.killSquadmate([techSpecialist], this.badTechSpecialistReason);
    } else if (!this.goodFireteamLeaders.includes(fireteamOneLeader) || !chosenFireteamOneLeader.loyal) {
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
    // Retrieve chosen team for long walk
    const longWalkTeam = Object.values(this.longWalkTeam.value);
    const bioticSpecialist = longWalkTeam[0];
    const fireteamTwoLeader = longWalkTeam[1];
    const crewEscort = longWalkTeam[2];
    const swarmSquadmate1 = longWalkTeam[3];
    const swarmSquadmate2 = longWalkTeam[4];

    if (bioticSpecialist === null || fireteamTwoLeader === null
      || crewEscort === null || swarmSquadmate1 === null
      || swarmSquadmate2 === null) {
      // ERROR
      return;
    }

    // Check biotic specialist
    const chosenBioticSpecialist = this.availableSquadmates.find(squadmate => squadmate.name === bioticSpecialist);
    if (!this.goodBioticSpecialists.includes(bioticSpecialist) || !chosenBioticSpecialist.loyal) {
      // Decide which of Shepard's squadmates is going to die
      const swarmSquadmate1Index = this.badBioticSpecialistDeaths.indexOf(swarmSquadmate1);
      const swarmSquadmate2Index = this.badBioticSpecialistDeaths.indexOf(swarmSquadmate2);

      if (swarmSquadmate1 !== 'Miranda' && (swarmSquadmate2 === 'Miranda' || swarmSquadmate2Index >= swarmSquadmate1Index)) {
        this.killSquadmate([swarmSquadmate1], this.badBioticSpecialistReason);
      } else {
        this.killSquadmate([swarmSquadmate2], this.badBioticSpecialistReason);
      }
    }

    // Check if crew escort was assigned
    if (crewEscort === 'None') {
      this.normandyCrewDead = true;
      console.log('Crew died for reason: No escort');
    } else {
      // Check loyalty of crew escort
      // const chosenCrewEscort = this.availableSquadmates.find(squadmate => squadmate.name === crewEscort);
      var chosenCrewEscort = undefined;
      for (const squadmate of this.availableSquadmates) {
        if (squadmate.name === crewEscort) {
          chosenCrewEscort = squadmate;
          break;
        }
      }
      if (chosenCrewEscort !== undefined) {
        if (!chosenCrewEscort.loyal) {
          this.killSquadmate([crewEscort], this.badCrewEscortReason);
        } else {
          chosenCrewEscort.recruited = false;
        }
      }
    }

    // Check fireteam two leader
    // Prevent death if there are only 3 more squadmates left
    const fireteamTwoLeaderObj = this.availableSquadmates.find(squadmate => squadmate.name === fireteamTwoLeader);
    if (fireteamTwoLeader !== 'Miranda' && ((!fireteamTwoLeaderObj.loyal || !this.goodFireteamLeaders.includes(fireteamTwoLeader)) && this.getAliveSquadmates() > 3)) {
      this.killSquadmate([fireteamTwoLeader], this.badfireteamTwoLeaderReason);
    }

    // Update list for next section
    this.choosableSquadmates = this.updateSquadmateOptions(this.choosableSquadmates);

    step.completed = true;
    stepper.next();
  }

  submitFinalBattleTeam(stepper: MatStepper, step: MatStep) {
    // Retrieve chosen team for final battle
    const finalBattleTeam = Object.values(this.finalBattleTeam.value);
    const finalSquadmate1 = finalBattleTeam[0];
    const finalSquadmate2 = finalBattleTeam[1];

    // Assign chosen squadmates
    this.assignSquadmates(finalSquadmate1, finalSquadmate2);

    if (finalSquadmate1 === null || finalSquadmate2 === null) {
      // ERROR
      return;
    }

    // Check loyalty of chosen squadmates
    const chosenFinalSquadmate1 = this.availableSquadmates.find(squadmate => squadmate.name === finalSquadmate1);
    if (!chosenFinalSquadmate1.loyal) {
      this.killSquadmate([finalSquadmate1], this.nonloyalFinalSquadmateReason);
    }
    const chosenFinalSquadmate2 = this.availableSquadmates.find(squadmate => squadmate.name === finalSquadmate2);
    if (!chosenFinalSquadmate2.loyal) {
      this.killSquadmate([finalSquadmate2], this.nonloyalFinalSquadmateReason);
    }

    // Calculate scores for Hold the Line
    this.calculateHtl.next(true);

    // Mark crew escort as recruited so they show up in the summary
    const crewEscort = this.longWalkTeam.value.crewEscort;
    if (crewEscort !== undefined) {
      var chosenCrewEscort = undefined;
      for (const squadmate of this.availableSquadmates) {
        if (squadmate.name === crewEscort) {
          chosenCrewEscort = squadmate;
          break;
        }
      }
      // const chosenCrewEscort = this.availableSquadmates.find(squadmate => squadmate.name === crewEscort);
      if (chosenCrewEscort !== undefined) {
        chosenCrewEscort.recruited = true;
      }
    }

    // Check if Commander Shepard will survive
    if (this.getAliveSquadmates() < 2) {
      this.shepardDead = true;
      console.log('Shepard died for reason: Less than 2 squadmates survived');
    }

    step.completed = true;
    stepper.next();
  }
}
