import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppConstants } from 'src/app/app.constants';
import { OculusSquadmates } from 'src/app/interfaces/OculusSquadmates';
import { Squadmates } from 'src/app/interfaces/Squadmates';

@Component({
  selector: 'app-oculus-squadmates',
  templateUrl: './oculus-squadmates.component.html',
  styleUrls: ['./oculus-squadmates.component.css']
})
export class OculusSquadmatesComponent {
  oculusSquadmates: FormGroup<OculusSquadmates>;
  squadmates: FormGroup<Squadmates>;

  @Input() choosableSquadmates: string[] = [];
  @Input() showLoyalSquadmates: boolean = false;
  @Output() newOculusSquadmatesEvent = new EventEmitter<FormGroup>();

  constructor(private constants: AppConstants) {
    this.oculusSquadmates = constants.OCULUS_SQUADMATES;
    this.squadmates = constants.SQUADMATES;
  }

}
