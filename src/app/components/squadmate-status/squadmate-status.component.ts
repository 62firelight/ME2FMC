import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';
import { Squadmates } from '../../interfaces/Squadmates';

@Component({
  selector: 'app-squadmate-status',
  templateUrl: './squadmate-status.component.html',
  styleUrls: ['./squadmate-status.component.css']
})
export class SquadmateStatusComponent {
  squadmates: FormGroup<Squadmates>;

  recruitedSquadmates = 12;
  samaraIsMorinth = false;

  legionAs8thSquadmate = false;
  insufficientSquadmates = false;

  @Input() resetEvent = new Observable<boolean>();
  @Output() newSquadmateStatusEvent = new EventEmitter<FormGroup>();

  constructor(private constants: AppConstants) {
    this.squadmates = constants.SQUADMATES;
  }

  ngOnInit() {
    this.resetEvent.subscribe(result => {
      this.squadmates.reset();

      if (this.samaraIsMorinth) {
        this.toggleSamaraIsMorinth();
      }
    });

    this.recruitedSquadmates = [...Object.values(this.squadmates.getRawValue())].filter(squadmate => squadmate.recruited).length;

    this.squadmates.valueChanges.subscribe(result => {
      this.recruitedSquadmates = [...Object.values(this.squadmates.getRawValue())].filter(squadmate => squadmate.recruited).length;
    });
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

  validateSquadmateStatus() {
    this.insufficientSquadmates = false;
    this.legionAs8thSquadmate = false;

    if (this.recruitedSquadmates == 8 && this.squadmates.value.legion?.recruited) {
      // Check if Legion is part of the squad
      this.legionAs8thSquadmate = true;
    } else if (this.recruitedSquadmates < 8) {
      this.insufficientSquadmates = true;
    } else {
      this.newSquadmateStatusEvent.emit(this.squadmates);
    }

  }
}
