import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppConstants } from 'src/app/app.constants';
import { FinalBattleTeam } from 'src/app/interfaces/FinalBattleTeam';
import { infiltrationTeam } from 'src/app/interfaces/InfiltrationTeam';
import { LongWalkTeam } from 'src/app/interfaces/LongWalkTeam';
import { OculusSquadmates } from 'src/app/interfaces/OculusSquadmates';
import { ShipUpgrades } from 'src/app/interfaces/ShipUpgrades';
import { Squadmates } from 'src/app/interfaces/Squadmates';
import { HoldTheLineService, HtlResult } from 'src/app/services/hold-the-line.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  squadmates: FormGroup<Squadmates>;
  shipUpgrades: FormGroup<ShipUpgrades>;
  oculusSquadmates: FormGroup<OculusSquadmates>;
  infiltrationTeam: FormGroup<infiltrationTeam>;
  longWalkTeam: FormGroup<LongWalkTeam>;
  finalBattleTeam: FormGroup<FinalBattleTeam>;
  htlResult: HtlResult;

  @Input() recruitedSquadmates = 12;
  @Input() aliveSquadmates = 12;
  @Input() availableSquadmates: any[] = [];
  @Input() normandyCrewDead = false;
  @Input() shepardDead = false;

  constructor(private constants: AppConstants, private htlService: HoldTheLineService) {
    this.squadmates = constants.SQUADMATES;
    this.shipUpgrades = constants.SHIP_UPGRADES;
    this.oculusSquadmates = constants.OCULUS_SQUADMATES;
    this.infiltrationTeam = constants.INFILTRATION_TEAM;
    this.longWalkTeam = constants.LONG_WALK_TEAM;
    this.finalBattleTeam = constants.FINAL_BATTLE_TEAM;

    this.htlResult = htlService.getHtlCalculation();
  }

  convertFromCamelCase(text: string): string {
    // insert a space before all caps
    return text.replace(/([A-Z0-9])/g, ' $1')
      // uppercase the first character
      .replace(/^./, function (str) { return str.toUpperCase(); })
  }

  getSummary(): string {
    var summary =
      `Mass Effect 2 Final Mission Summary
    
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
    summary += `There ${this.htlResult.currentHtlScores.size == 1 ? "is" : "are"} ${this.htlResult.currentHtlScores.size} squadmate${this.htlResult.currentHtlScores.size == 1 ? "" : "s"} holding the line. Their individual score${this.htlResult.currentHtlScores.size == 1 ? " is" : "s are"} as follows:\n`
    for (var [individual, score] of this.htlResult.currentHtlScores) {
      summary += `* ${individual}: ${score}\n`;
    }
    summary += `The total squadmate score is ${this.htlResult.totalHtlScore}.`;

    summary += `\n\n${this.htlResult.htlScore == this.htlResult.currentHtlScores.size ? "All" : this.htlResult.htlScore} squadmate${this.htlResult.htlScore == 1 ? "" : "s"} holding the line will survive. (${this.htlResult.totalHtlScore} / 3 = ${this.htlResult.htlScore} rounded down)\n`;

    if (this.htlResult.htlDeaths.length > 0) {
      summary += `\n${this.htlResult.htlDeaths.length} squadmate${this.htlResult.htlDeaths.length == 1 ? "" : "s"} died holding the line, including:\n`
      for (var death of this.htlResult.htlDeaths) {
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
    summary += `Shepard - ${this.shepardDead ? "Died (less than 2 squadmates survived)" : "Survived"}\n`;
    summary += '\n';

    return summary;
    // return 'If you are seeing this, the copy text feature has not been fully implemented yet :(';
  }
}
