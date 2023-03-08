import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ME2FMC';

  squadmates = this.fb.group({
    zaeed: this.fb.group({
      name: ['Zaeed'],
      recruited: [true],
      loyal: [true]
    }),
    legion: this.fb.group({
      name: ['Legion'],
      recruited: [true],
      loyal: [true]
    }),
    samara: this.fb.group({
      name: ['Samara'],
      recruited: [true],
      loyal: [true]
    }),
    tali: this.fb.group({
      name: ['Tali'],
      recruited: [true],
      loyal: [true]
    }),
    mordin: this.fb.group({
      name: ['Mordin'],
      recruited: [true, Validators.requiredTrue],
      loyal: [true]
    }),
    garrus: this.fb.group({
      name: ['Garrus'],
      recruited: [true, Validators.requiredTrue],
      loyal: [true]
    }),
    miranda: this.fb.group({
      name: ['Miranda'],
      recruited: [true, Validators.requiredTrue],
      loyal: [true]
    }),
    grunt: this.fb.group({
      name: ['Grunt'],
      recruited: [true],
      loyal: [true]
    }),
    jacob: this.fb.group({
      name: ['Jacob'],
      recruited: [true, Validators.requiredTrue],
      loyal: [true]
    }),
    thane: this.fb.group({
      name: ['Thane'],
      recruited: [true],
      loyal: [true]
    }),
    jack: this.fb.group({
      name: ['Jack'],
      recruited: [true, Validators.requiredTrue],
      loyal: [true]
    }),
    kasumi: this.fb.group({
      name: ['Kasumi'],
      recruited: [true],
      loyal: [true]
    }),
  });
  insufficientSquadmates = false;

  squadmateColumns = ['name', 'recruited', 'loyal'];
  squadmateStatusData = [
    { name: 'Zaeed', recruited: true, loyal: true },
    { name: 'Legion', recruited: true, loyal: true },
    { name: 'Samara', recruited: true, loyal: true },
    { name: 'Tali', recruited: true, loyal: true },
    { name: 'Mordin', recruited: true, loyal: true },
    { name: 'Garrus', recruited: true, loyal: true },
    { name: 'Miranda', recruited: true, loyal: true },
    { name: 'Grunt', recruited: true, loyal: true },
    { name: 'Jacob', recruited: true, loyal: true },
    { name: 'Thane', recruited: true, loyal: true },
    { name: 'Jack', recruited: true, loyal: true },
    { name: 'Kasumi', recruited: true, loyal: true },
  ];
  availableSquadmates: any[] = [];

  shipUpgradeColumns = ['name', 'included'];
  shipUpgradeData = [
    { name: 'Heavy Ship Armor', included: false },
    { name: 'Multicore Shielding', included: false },
    { name: 'Thanix Cannon', included: false }
  ];

  ventSpecialists = [
    'Tali',
    'Mordin',
    'Thane',
    'Kasumi',
    'Garrus',
    'Jacob',
    'Legion',
  ];
  fireteamLeaders = [
    'Tali',
    'Mordin',
    'Zaeed',
    'Grunt',
    'Samara',
    'Jack',
    'Thane',
    'Kasumi',
    'Garrus',
    'Miranda',
    'Jacob',
    'Legion',
  ];

  bioticSpecialists = [
    'Samara',
    'Jack',
    'Thane',
    'Miranda',
    'Jacob',
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() { }

  submitSquadmateStatus(stepper: MatStepper) {
    this.insufficientSquadmates = false;

    var squadmateObjects = Object.values(this.squadmates.value);

    var recruitedSquadmates = 0;
    for (var index in squadmateObjects) {
      var squadmateObject = squadmateObjects[index];
      
      if (squadmateObject.recruited === true || squadmateObject.recruited === undefined) {
        recruitedSquadmates++;
      }
    }

    if (recruitedSquadmates >= 8) {
      this.availableSquadmates = [...Object.values(this.squadmates.value)];
      stepper.next();
    } else {
      this.insufficientSquadmates = true;
    }
  }
}
