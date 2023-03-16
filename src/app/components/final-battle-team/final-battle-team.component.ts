import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppConstants } from 'src/app/app.constants';
import { FinalBattleTeam } from 'src/app/interfaces/FinalBattleTeam';
import { LongWalkTeam } from 'src/app/interfaces/LongWalkTeam';
import { Squadmates } from 'src/app/interfaces/Squadmates';

@Component({
  selector: 'app-final-battle-team',
  templateUrl: './final-battle-team.component.html',
  styleUrls: ['./final-battle-team.component.css']
})
export class FinalBattleTeamComponent {
  finalBattleTeam: FormGroup<FinalBattleTeam>;
  squadmates: FormGroup<Squadmates>;

  @Input() choosableSquadmates: string[] = [];
  @Input() showLoyalSquadmates: boolean = false;
  @Output() newFinalBattleTeamEvent = new EventEmitter<FormGroup>();

  constructor(private constants: AppConstants) {
    this.finalBattleTeam = constants.FINAL_BATTLE_TEAM;
    this.squadmates = constants.SQUADMATES;
  }
}
