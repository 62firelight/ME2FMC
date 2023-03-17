import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-final-outcome',
  templateUrl: './final-outcome.component.html',
  styleUrls: ['./final-outcome.component.css']
})
export class FinalOutcomeComponent {

  @Input() recruitedSquadmates = 12;
  @Input() aliveSquadmates = 12;
  @Input() availableSquadmates: any[] = [];
  @Input() normandyCrewDead = false;
  @Input() shepardDead = false;
  @Input() summary = false;

}
