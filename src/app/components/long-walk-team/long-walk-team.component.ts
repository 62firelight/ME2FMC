import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppConstants } from 'src/app/app.constants';
import { LongWalkTeam } from 'src/app/interfaces/LongWalkTeam';
import { Squadmates } from 'src/app/interfaces/Squadmates';

@Component({
  selector: 'app-long-walk-team',
  templateUrl: './long-walk-team.component.html',
  styleUrls: ['./long-walk-team.component.css']
})
export class LongWalkTeamComponent {
  longWalkTeam: FormGroup<LongWalkTeam>;
  squadmates: FormGroup<Squadmates>;

  @Input() aliveSquadmates: number = 12;
  @Input() bioticSpecialists: string[] = [];
  @Input() fireteamTwoLeaders: string[] = [];
  @Input() choosableSquadmates: string[] = [];
  @Input() showLoyalSquadmates: boolean = false;
  @Output() newLongWalkTeamEvent = new EventEmitter<FormGroup>();

  constructor(private constants: AppConstants) {
    this.longWalkTeam = constants.LONG_WALK_TEAM;
    this.squadmates = constants.SQUADMATES;
  }
}
