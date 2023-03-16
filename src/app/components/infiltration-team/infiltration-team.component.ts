import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppConstants } from 'src/app/app.constants';
import { infiltrationTeam } from 'src/app/interfaces/InfiltrationTeam';
import { Squadmates } from 'src/app/interfaces/Squadmates';

@Component({
  selector: 'app-infiltration-team',
  templateUrl: './infiltration-team.component.html',
  styleUrls: ['./infiltration-team.component.css']
})
export class InfiltrationTeamComponent {
  infiltrationTeam: FormGroup<infiltrationTeam>;
  squadmates: FormGroup<Squadmates>;

  @Input() techSpecialists: string[] = [];
  @Input() fireteamOneLeaders: string[] = [];
  @Input() showLoyalSquadmates: boolean = false;
  @Output() newInfiltrationTeamEvent = new EventEmitter<FormGroup>();

  constructor(private constants: AppConstants) {
    this.infiltrationTeam = constants.INFILTRATION_TEAM;
    this.squadmates = constants.SQUADMATES;
  }
}
