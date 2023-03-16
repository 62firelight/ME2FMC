import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { Subject } from 'rxjs';
import { AppConstants } from './app.constants';
import { SquadmateStatusComponent } from './components/squadmate-status/squadmate-status.component';
import { FinalBattleTeam } from './interfaces/FinalBattleTeam';
import { infiltrationTeam } from './interfaces/InfiltrationTeam';
import { LongWalkTeam } from './interfaces/LongWalkTeam';
import { OculusSquadmates } from './interfaces/OculusSquadmates';
import { ShipUpgrades } from './interfaces/ShipUpgrades';
import { Squadmates } from './interfaces/Squadmates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ME2 Final Mission Calculator';

  showLoyalSquadmates = false;

  squadmates: FormGroup<Squadmates>;

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

  shipUpgrades: FormGroup<ShipUpgrades>;

  oculusSquadmates: FormGroup<OculusSquadmates>;
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

  infiltrationTeam: FormGroup<infiltrationTeam>;
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

  longWalkTeam: FormGroup<LongWalkTeam>;
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

  finalBattleTeam: FormGroup<FinalBattleTeam>;
  // finalBattleTeam = this.fb.nonNullable.group({
  //   finalSquadmate1: ['', Validators.required],
  //   finalSquadmate2: ['', Validators.required]
  // });
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

  resetting: Subject<boolean> = new Subject();

  constructor(private constants: AppConstants, private fb: FormBuilder) {
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

    this.currentHtlScores.clear();
    this.htlDeaths = [];
  }

  ngOnInit() { }

  resetCalculator(stepper: MatStepper) {
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

      if (swarmSquadmate1 != 'Miranda' && swarmSquadmate2Index >= swarmSquadmate1Index) {
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
    this.totalHtlScore = 0;
    for (const squadmate of this.availableSquadmates) {
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

    // OLD (thresholds are from flowchart)
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
        summary += '\n';
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

  log(value: any) {
    console.log(value);
  }
}
